import json
from rest_framework import views
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page, cache_control
from django.conf import settings
from django.urls import reverse
from django_redis import get_redis_connection

from .models import College
from .seo_schema import generate_college_jsonld, generate_item_list_jsonld, MAIN_WEBSITE_URL

class SEOSummaryBaseAPIView(views.APIView):
    """Base class for fetching precomputed SEO aggregates from Redis."""
    throttle_classes = [] # Handled by CDN/Nginx caching mostly
    
    def fetch_from_redis(self, key):
        redis_client = get_redis_connection("default")
        try:
            data = redis_client.get(key)
            if data:
                return json.loads(data)
        except Exception:
            pass
        return None

@method_decorator(cache_page(settings.CACHE_TTL * 24), name='get')
@method_decorator(cache_control(public=True, max_age=settings.CACHE_TTL * 24), name='get')
class SEOCitySummaryListAPIView(SEOSummaryBaseAPIView):
    def get(self, request, *args, **kwargs):
        data = self.fetch_from_redis("seo:city:all")
        if not data:
            return Response({"results": []})
        return Response({"results": data})

@method_decorator(cache_page(settings.CACHE_TTL * 24), name='get')
@method_decorator(cache_control(public=True, max_age=settings.CACHE_TTL * 24), name='get')
class SEOCitySummaryDetailAPIView(SEOSummaryBaseAPIView):
    def get(self, request, city, *args, **kwargs):
        city_slug = city.lower().strip()
        data = self.fetch_from_redis(f"seo:city:{city_slug}")
        
        if not data:
            return Response({"error": "City SEO data not found"}, status=404)
            
        # Optional: Add JSON-LD for the city if trending data is available
        redis_client = get_redis_connection("default")
        try:
            top_ids = redis_client.zrevrange(f"rankings:trending:city:{city_slug}", 0, 9)
            if top_ids:
                top_ids = [int(i.decode('utf-8')) for i in top_ids]
                colleges = College.objects.filter(id__in=top_ids)
                college_dict = {col.id: col for col in colleges}
                sorted_colleges = [college_dict[i] for i in top_ids if i in college_dict]
                
                data["jsonld"] = generate_item_list_jsonld(
                    sorted_colleges, 
                    f"{MAIN_WEBSITE_URL}/colleges/{city_slug}", 
                    f"Top Colleges in {data['city']}"
                )
        except Exception:
            pass
            
        return Response(data)

@method_decorator(cache_page(settings.CACHE_TTL * 24), name='get')
@method_decorator(cache_control(public=True, max_age=settings.CACHE_TTL * 24), name='get')
class SEOStateSummaryListAPIView(SEOSummaryBaseAPIView):
    def get(self, request, *args, **kwargs):
        data = self.fetch_from_redis("seo:state:all")
        if not data: return Response({"results": []})
        return Response({"results": data})

@method_decorator(cache_page(settings.CACHE_TTL * 24), name='get')
@method_decorator(cache_control(public=True, max_age=settings.CACHE_TTL * 24), name='get')
class SEOStateSummaryDetailAPIView(SEOSummaryBaseAPIView):
    def get(self, request, state, *args, **kwargs):
        state_slug = state.lower().strip()
        data = self.fetch_from_redis(f"seo:state:{state_slug}")
        
        if not data: return Response({"error": "State SEO data not found"}, status=404)
        return Response(data)

@method_decorator(cache_page(settings.CACHE_TTL * 24), name='get')
@method_decorator(cache_control(public=True, max_age=settings.CACHE_TTL * 24), name='get')
class SEOCourseSummaryListAPIView(SEOSummaryBaseAPIView):
    def get(self, request, *args, **kwargs):
        # TODO: Implement course level aggregation in the celery task 
        # (This acts as a placeholder or reads whatever the task put out)
        data = self.fetch_from_redis("seo:course:all")
        if not data: return Response({"results": []})
        return Response({"results": data})

@method_decorator(cache_page(settings.CACHE_TTL * 24), name='get')
@method_decorator(cache_control(public=True, max_age=settings.CACHE_TTL * 24), name='get')
class SEOCourseSummaryDetailAPIView(SEOSummaryBaseAPIView):
    def get(self, request, slug, *args, **kwargs):
        course_slug = slug.lower().strip()
        data = self.fetch_from_redis(f"seo:course:{course_slug}")
        if not data: return Response({"error": "Course SEO data not found"}, status=404)
        return Response(data)

@method_decorator(cache_page(settings.CACHE_TTL * 1), name='get') # Cache for 1 hour to stay fresher
@method_decorator(cache_control(public=True, max_age=settings.CACHE_TTL * 1), name='get')
class TopCollegesAPIView(views.APIView):
    """
    Dedicated SEO Landing Page View.
    Re-uses Phase 4 trending data but wraps it in rich SEO metadata and JSON-LD.
    """
    throttle_classes = []
    
    def get(self, request, location=None, *args, **kwargs):
        from colleges.serializers import CollegeSerializer
        
        limit = 20 if not location else 10
        redis_key = 'rankings:trending:global'
        title = "Top 20 Colleges in India 2026 - Best Rankings & Reviews"
        desc = "Discover the top 20 best colleges in India. Compare rankings, placement records, and fee structures for engineering, medical, and management."
        url_path = "/top-colleges"
        
        if location:
            loc = location.lower().strip()
            # Try city first, then state
            redis_client = get_redis_connection("default")
            if redis_client.exists(f"rankings:trending:city:{loc}"):
                redis_key = f"rankings:trending:city:{loc}"
                title = f"Top 10 Colleges in {location.title()} 2026"
                desc = f"Discover the top 10 best colleges in {location.title()}."
                url_path = f"/top-colleges/{loc}"
            elif redis_client.exists(f"rankings:trending:state:{loc}"):
                redis_key = f"rankings:trending:state:{loc}"
                title = f"Top 10 Colleges in {location.title()} State 2026"
                desc = f"Discover the top 10 best colleges in {location.title()}."
                url_path = f"/top-colleges/{loc}"
            else:
                return Response({"error": "Location not found in trending data"}, status=404)
                
        redis_client = get_redis_connection("default")
        try:
            top_id_bytes = redis_client.zrevrange(redis_key, 0, limit - 1)
        except Exception:
            top_id_bytes = []
            
        if not top_id_bytes:
            return Response({"results": [], "seo": {"meta_title": title, "meta_description": desc}})
            
        top_ids = [int(i.decode('utf-8')) for i in top_id_bytes]
        
        queryset = College.objects.select_related('university').prefetch_related(
            'offered_courses__course__degree', 'offered_courses__course__specialization__stream'
        ).filter(id__in=top_ids)
        
        college_dict = {col.id: col for col in queryset}
        sorted_colleges = [college_dict[i] for i in top_ids if i in college_dict]
        
        serializer = CollegeSerializer(sorted_colleges, many=True, context={'request': request})
        
        return Response({
            "results": serializer.data,
            "seo": {
                "meta_title": title,
                "meta_description": desc,
                "canonical_url": url_path
            },
            "jsonld": generate_item_list_jsonld(sorted_colleges, f"{MAIN_WEBSITE_URL}{url_path}", title)
        })


class SitemapIndexAPIView(views.APIView):
    throttle_classes = []
    
    def get(self, request, *args, **kwargs):
        redis_client = get_redis_connection("default")
        
        # We need a rough count of colleges to chunk them
        total_colleges = College.objects.count()
        chunk_size = 1000
        chunks = (total_colleges // chunk_size) + 1
        
        sitemaps = []
        for i in range(1, chunks + 1):
            sitemaps.append({
                "url": f"/api/sitemap/?type=colleges&page={i}",
            })
            
        sitemaps.append({"url": "/api/sitemap/?type=cities"})
        sitemaps.append({"url": "/api/sitemap/?type=states"})
        
        return Response({"sitemaps": sitemaps})

class SitemapAPIView(views.APIView):
    throttle_classes = []
    
    def get(self, request, *args, **kwargs):
        sitemap_type = request.query_params.get('type', 'colleges')
        
        urls = []
        
        if sitemap_type == 'colleges':
            try:
                page = int(request.query_params.get('page', 1))
            except ValueError:
                page = 1
                
            chunk_size = 1000
            start = (page - 1) * chunk_size
            end = start + chunk_size
            
            # Using only() to fetch exactly what we need, extremely fast
            colleges = College.objects.only('slug').order_by('id')[start:end]
            
            for c in colleges:
                # We don't have an updatedAt field natively on College yet without altering schema,
                # so we omit lastmod or use a default
                urls.append({
                    "loc": f"/colleges/{c.slug}",
                    "priority": 0.8
                })
                
        elif sitemap_type == 'cities':
            redis_client = get_redis_connection("default")
            data = redis_client.get("seo:city:all")
            if data:
                cities = json.loads(data)
                for c in cities:
                    urls.append({
                        "loc": f"/colleges/{c['slug']}",
                        "priority": 0.9
                    })
                    
        elif sitemap_type == 'states':
            redis_client = get_redis_connection("default")
            data = redis_client.get("seo:state:all")
            if data:
                states = json.loads(data)
                for s in states:
                    urls.append({
                        "loc": f"/colleges/{s['slug']}",
                        "priority": 0.9
                    })

        return Response({"urls": urls})

class RobotsAPIView(views.APIView):
    """Provides crawl directives for Next.js to merge into robots.txt"""
    throttle_classes = []
    
    def get(self, request, *args, **kwargs):
        return Response({
            "rules": [
                {
                    "user_agent": "*",
                    "allow": ["/", "/colleges/", "/courses/"],
                    "disallow": ["/api/", "/admin/", "/internal/"]
                }
            ],
            "sitemap": f"{MAIN_WEBSITE_URL}/sitemap.xml"
        })
