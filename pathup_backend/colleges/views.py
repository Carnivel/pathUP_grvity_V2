import time
from rest_framework import generics, filters as drf_filters, views
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.throttling import AnonRateThrottle, UserRateThrottle
from django_filters import rest_framework as filters
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page, cache_control
from django.conf import settings
from django.core.cache import cache
from django.db.models import Count, Min
from .models import College
from .serializers import CollegeSerializer, CollegeListSerializer
from .search_service import get_meilisearch_client

class CollegeFilter(filters.FilterSet):
    # Enable filtering by "contains" for names and locations rather than exact match
    name = filters.CharFilter(lookup_expr='icontains')
    city = filters.CharFilter(lookup_expr='icontains')
    state = filters.CharFilter(lookup_expr='icontains')
    
    # Nested filtering: Find colleges offering a specific course specialization
    course__specialization = filters.CharFilter(field_name='offered_courses__course__specialization__name', lookup_expr='icontains')
    course__degree = filters.CharFilter(field_name='offered_courses__course__degree__name', lookup_expr='icontains')
    stream = filters.CharFilter(field_name='offered_courses__course__specialization__stream__name', lookup_expr='icontains')
    
    # College Attributes
    district = filters.CharFilter(lookup_expr='icontains')
    university = filters.CharFilter(field_name='university__name', lookup_expr='icontains')
    ownership_type = filters.CharFilter(lookup_expr='iexact')
    
    # Financial filtering: Find colleges where the tuition fee is LESS THAN OR EQUAL to a specific amount
    max_tuition_fee = filters.NumberFilter(field_name='offered_courses__tuition_fee', lookup_expr='lte')
    
    # Financial filtering: For sorting low-to-high, ignore 0 or empty
    offered_courses__tuition_fee__gt = filters.NumberFilter(field_name='offered_courses__tuition_fee', lookup_expr='gt')

    class Meta:
        model = College
        fields = ['name', 'city', 'state', 'district', 'ownership_type', 'university',
                  'stream', 'course__specialization', 'course__degree', 'max_tuition_fee', 'offered_courses__tuition_fee__gt']


class CollegePagination(LimitOffsetPagination):
    default_limit = 30
    max_limit = 100

@method_decorator(cache_page(settings.CACHE_TTL), name='get')
@method_decorator(cache_control(public=True, max_age=settings.CACHE_TTL), name='get')
class CollegeListAPIView(generics.ListAPIView):
    """
    PERFORMANCE FIX: Uses DB annotations instead of prefetch_related.
    Single SQL query with COUNT/MIN aggregates — no N+1, no prefetch overhead.
    """
    serializer_class = CollegeListSerializer
    filter_backends = (filters.DjangoFilterBackend, drf_filters.OrderingFilter)
    filterset_class = CollegeFilter
    ordering_fields = ['rating', 'offered_courses__tuition_fee']
    ordering = ['-rating']
    pagination_class = CollegePagination

    def get_queryset(self):
        return College.published.select_related(
            'university'
        ).annotate(
            course_count=Count('offered_courses', distinct=True),
            min_fee=Min('offered_courses__tuition_fee'),
        )

@method_decorator(cache_page(settings.CACHE_TTL * 24), name='get')
@method_decorator(cache_control(public=True, max_age=settings.CACHE_TTL * 24), name='get')
class CollegeDetailAPIView(generics.RetrieveAPIView):
    queryset = College.published.select_related(
        'university'
    ).prefetch_related(
        'offered_courses__course__degree',
        'offered_courses__course__specialization__stream',
        'accreditations',
        'facilities',
        'images',
        'videos'
    )
    serializer_class = CollegeSerializer
    lookup_field = 'slug'

    def retrieve(self, request, *args, **kwargs):
        from .utils import get_client_ip
        import datetime
        from django.core.cache import cache
        from django_redis import get_redis_connection

        response = super().retrieve(request, *args, **kwargs)
        college_id = response.data.get('id')
        
        if college_id:
            ip = get_client_ip(request)
            guard_key = f"view_guard:{college_id}:{ip}"
            
            # Anti-Abuse: Only track if this IP hasn't viewed this college in 5 mins
            if not cache.get(guard_key):
                cache.set(guard_key, 1, timeout=300) # 5 minute lock
                
                today = datetime.date.today().isoformat()
                views_key = f"college:views:daily:{today}"
                
                # Atomic increment in the backend Redis Hash
                try:
                    redis_client = get_redis_connection("default")
                    redis_client.hincrby(views_key, str(college_id), 1)
                except Exception:
                    pass # Fail silently if Redis counter logic fails in production
                    
        return response

class SearchRateThrottle(AnonRateThrottle):
    rate = '30/minute'

@method_decorator(cache_page(settings.CACHE_TTL), name='get')
@method_decorator(cache_control(public=True, max_age=settings.CACHE_TTL), name='get')
class CollegeSearchAPIView(views.APIView):
    """
    High-performance typo-tolerant search powered by Meilisearch.
    Fallbacks to MySQL hydration, wrapped in Redis page caching.
    """
    throttle_classes = [SearchRateThrottle, UserRateThrottle]

    def get(self, request, *args, **kwargs):
        query = request.query_params.get('q', '')
        limit = int(request.query_params.get('limit', 10))
        offset = int(request.query_params.get('offset', 0))
        
        # Build Meilisearch Filter string out of Exact Django query params
        # E.g., ?city=Pune becomes filter=["city = Pune"]
        filters = []
        for key in ['city', 'state', 'course']:
            val = request.query_params.get(key)
            if val:
                # Assuming 'course' maps loosely to course_names in Meili
                search_key = 'course_names' if key == 'course' else key
                filters.append(f"{search_key} = '{val}'")

        search_kwargs = {
            'limit': limit,
            'offset': offset,
        }
        if filters:
            search_kwargs['filter'] = filters

        # Analytics Hook (Fire and forget conceptual logging)
        if query:
            # e.g., celery_analytics_task.delay(query, request.META.get('REMOTE_ADDR'))
            pass

        client = get_meilisearch_client()
        try:
            index = client.get_index('colleges')
            ms_response = index.search(query, search_kwargs)
        except Exception:
            # Fallback to empty if Meili is completely down
            return Response({"results": [], "count": 0})

        # The Meilisearch hits contain our minimalist JSON, specifically 'id'
        hit_ids = [hit['id'] for hit in ms_response['hits']]

        # Hydrate the UI fully from the database (MySQL)
        # Using id__in destroys ordering, so we must sort it back in python
        if not hit_ids:
            return Response({"results": [], "count": ms_response['estimatedTotalHits']})

        queryset = College.published.prefetch_related(
            'offered_courses__course__degree',
            'offered_courses__course__specialization',
            'university'
        ).filter(id__in=hit_ids)

        # Dictionary lookup mapping to enforce Meilisearch relevance ordering on ORM result
        college_dict = {col.id: col for col in queryset}
        sorted_colleges = [college_dict[i] for i in hit_ids if i in college_dict]

        serializer = CollegeSerializer(sorted_colleges, many=True, context={'request': request})
        return Response({
            "results": serializer.data,
            "count": ms_response['estimatedTotalHits'],
            "processingTimeMs": ms_response['processingTimeMs']
        })

class SystemHealthAPIView(views.APIView):
    """
    Lightning-fast, hardened health check for uptime monitors.
    Contains strict timeouts to prevent hanging the API on external failures.
    """
    throttle_classes = []
    
    def get(self, request, *args, **kwargs):
        health_status = {}
        
        # 1. MySQL Check
        start = time.time()
        try:
            College.objects.exists()
            health_status['mysql'] = {'ok': True, 'latency_ms': int((time.time() - start) * 1000)}
        except Exception:
            health_status['mysql'] = {'ok': False, 'latency_ms': None}
            
        # 2. Redis Check
        start = time.time()
        try:
            cache.set('__health_ping', 'ok', timeout=2)
            if cache.get('__health_ping') == 'ok':
                health_status['redis'] = {'ok': True, 'latency_ms': int((time.time() - start) * 1000)}
            else:
                raise Exception
        except Exception:
            health_status['redis'] = {'ok': False, 'latency_ms': None}
            
        # 3. Meilisearch Check
        start = time.time()
        try:
            client = get_meilisearch_client()
            if client.is_healthy():
                health_status['meilisearch'] = {'ok': True, 'latency_ms': int((time.time() - start) * 1000)}
            else:
                raise Exception
        except Exception:
            health_status['meilisearch'] = {'ok': False, 'latency_ms': None}

        # 4. Celery Worker Check
        start = time.time()
        try:
            from pathup_backend.celery import app as celery_app
            # Ping workers with a short timeout to keep health check fast
            inspector = celery_app.control.inspect(timeout=1.0)
            status = inspector.ping()
            if status and len(status) > 0:
                health_status['celery'] = {
                    'ok': True, 
                    'latency_ms': int((time.time() - start) * 1000), 
                    'active_workers': len(status)
                }
            else:
                health_status['celery'] = {'ok': False, 'latency_ms': None, 'error': 'No active workers found'}
        except Exception as e:
            health_status['celery'] = {'ok': False, 'latency_ms': None, 'error': str(e)}
            
        status_code = 200 if all(service['ok'] for service in health_status.values()) else 503
        return Response(health_status, status=status_code)

@method_decorator(cache_page(settings.CACHE_TTL), name='get')
@method_decorator(cache_control(public=True, max_age=settings.CACHE_TTL), name='get')
class TrendingCollegesAPIView(views.APIView):
    """
    Lightning-fast endpoint that fetches pre-calculated trending college IDs 
    from Redis Sorted Sets (O(log(N))) and hydrates them via MySQL.
    """
    throttle_classes = [AnonRateThrottle, UserRateThrottle]

    def get(self, request, *args, **kwargs):
        from django_redis import get_redis_connection
        
        limit = int(request.query_params.get('limit', 10))
        city = request.query_params.get('city')
        state = request.query_params.get('state')
        
        redis_key = 'rankings:trending:global'
        if city:
            redis_key = f"rankings:trending:city:{city.lower()}"
        elif state:
            redis_key = f"rankings:trending:state:{state.lower()}"
            
        redis_client = get_redis_connection("default")
        
        # ZREVRANGE to get highest scores first
        # Format returns a list of bytes: [b'4', b'2', ...]
        try:
            top_id_bytes = redis_client.zrevrange(redis_key, 0, limit - 1)
        except Exception:
            top_id_bytes = []
            
        if not top_id_bytes:
            return Response({"results": [], "count": 0, "dimension": redis_key})
            
        top_ids = [int(i.decode('utf-8')) for i in top_id_bytes]
        
        queryset = College.published.select_related(
            'university'
        ).prefetch_related(
            'offered_courses__course__degree',
            'offered_courses__course__specialization__stream',
            'accreditations',
            'facilities'
        ).filter(id__in=top_ids)
        
        # Re-sort hydrated objects to match Redis exact scoring order
        college_dict = {col.id: col for col in queryset}
        sorted_colleges = [college_dict[i] for i in top_ids if i in college_dict]
        
        serializer = CollegeSerializer(sorted_colleges, many=True, context={'request': request})
        
        return Response({
            "results": serializer.data,
            "count": len(sorted_colleges),
            "dimension": redis_key
        })

