import time
from celery import shared_task
from celery.exceptions import Retry
from .models import College
from .search_service import format_college_for_search, get_meilisearch_client

@shared_task(bind=True, queue='search_indexing', autoretry_for=(Exception,), retry_kwargs={'max_retries': 5, 'countdown': 2})
def bulk_update_colleges_in_meilisearch(self, college_ids_list):
    """
    Asynchronously bulk push a list of college IDs to Meilisearch.
    This pattern ensures high performance during massive data imports.
    """
    colleges = College.objects.prefetch_related(
        'offered_courses__course__degree',
        'offered_courses__course__specialization',
        'reviews'
    ).filter(id__in=college_ids_list)
    
    if not colleges.exists():
        return f"No colleges found for processing."

    # Serialize objects into minimal RAM footprint documents
    documents = [format_college_for_search(college) for college in colleges]

    client = get_meilisearch_client()
    try:
        index = client.get_index('colleges')
        task = index.add_documents(documents)
        return f"Meilisearch Task {task.task_uid} queued for {len(documents)} documents."
    except Exception as exc:
        # If Meilisearch is down, Celery naturally retries with exponential backoff
        raise self.retry(exc=exc, countdown=2 ** self.request.retries)

@shared_task(queue='search_indexing')
def remove_college_from_meilisearch(college_id):
    """
    Removes a college from the index when deleted from the DB.
    """
    client = get_meilisearch_client()
    try:
        index = client.get_index('colleges')
        index.delete_document(str(college_id))
    except Exception:
        pass # If it's already deleted or index missing, silent pass

import datetime
from math import log
from django_redis import get_redis_connection
from django.db.models import Count
from django.utils import timezone

@shared_task(queue='search_indexing')
def calculate_trending_scores():
    """
    Nightly/6-hourly task to calculate trending scores.
    Reads daily views from Redis, decays them, mixes with ratings,
    and updates the master Redis Sorted Sets.
    """
    redis_client = get_redis_connection("default")
    
    today = datetime.date.today()
    
    # 1. Fetch View Counts with Time Decay
    # We only care about colleges viewed in the last 7 days
    college_views = {} # format: {college_id_str: decayed_view_score}
    
    decay_factors = [1.0, 0.7, 0.5, 0.3, 0.2, 0.1, 0.05]
    
    keys_to_delete = []
    
    # Scan backward 8 days so we can delete the 8th day's keys
    for i in range(8):
        day = today - datetime.timedelta(days=i)
        day_str = day.isoformat()
        views_key = f"college:views:daily:{day_str}"
        
        if i >= 7:
            # Clean up old keys (older than 7 days)
            keys_to_delete.append(views_key)
            continue
            
        decay = decay_factors[i]
        
        # Pull all HASH data for this day
        # Returns dict: {b'college_id': b'view_count'}
        daily_data = redis_client.hgetall(views_key)
        
        for cid_bytes, count_bytes in daily_data.items():
            cid = cid_bytes.decode('utf-8')
            count = int(count_bytes.decode('utf-8'))
            
            decayed_score = count * decay
            if cid in college_views:
                college_views[cid] += decayed_score
            else:
                college_views[cid] = decayed_score
                
    if keys_to_delete:
        redis_client.delete(*keys_to_delete)
        
    if not college_views:
        return "No recent views found. Skipping recalculation to save DB load."
    
    # 2. Fetch Static Stats from DB (Only for active colleges)
    active_college_ids = [int(cid) for cid in college_views.keys()]
    
    active_colleges = College.objects.filter(id__in=active_college_ids).annotate(
        review_count=Count('reviews')
    ).values('id', 'rating', 'review_count', 'city', 'state')
    
    # 3. Calculate Final Scores and Group into Dimensions
    pipeline = redis_client.pipeline()
    
    # We rebuild the sorted sets entirely
    pipeline.delete('rankings:trending:global')
    
    # We need to track which city/state sets we modified to clear them out before repopulating
    cities_modified = set()
    states_modified = set()
    
    # First, let's group our updates
    global_scores = {}
    city_scores = {}
    state_scores = {}
    
    for c in active_colleges:
        cid_str = str(c['id'])
        view_score = college_views.get(cid_str, 0)
        
        rating = float(c['rating'] or 0.0)
        reviews = c['review_count']
        
        # The Final Algorithm!
        # Rating (0-5) * 50 = max 250 points
        # Views carry heavy weight directly (e.g. 100 views = 3000 points)
        # Reviews scale logarithmically
        final_score = (rating * 50) + (view_score * 30) + (log(reviews + 1) * 20)
        
        # Accumulate updates
        global_scores[cid_str] = final_score
        
        if c['city']:
            city_key = f"rankings:trending:city:{c['city'].lower()}"
            cities_modified.add(city_key)
            if city_key not in city_scores: city_scores[city_key] = {}
            city_scores[city_key][cid_str] = final_score
            
        if c['state']:
            state_key = f"rankings:trending:state:{c['state'].lower()}"
            states_modified.add(state_key)
            if state_key not in state_scores: state_scores[state_key] = {}
            state_scores[state_key][cid_str] = final_score

    # Clear old dimension sets
    if cities_modified: pipeline.delete(*list(cities_modified))
    if states_modified: pipeline.delete(*list(states_modified))
    
    # 4. Write new sorted sets to Redis via pipeline
    if global_scores:
        # ZADD signature expects mapping {member: score} in redis-py 3.x+
        pipeline.zadd('rankings:trending:global', global_scores)
        
    for city_key, scores in city_scores.items():
        pipeline.zadd(city_key, scores)
        
    for state_key, scores in state_scores.items():
        pipeline.zadd(state_key, scores)
        
    pipeline.execute()
    
    return f"Trending scores updated for {len(global_scores)} colleges."

import json
from django.db.models import Avg, Count
from collections import Counter

@shared_task(queue='search_indexing')
def precompute_seo_aggregates():
    """
    Nightly/6-hourly task to precompute expensive SEO aggregates (cities, states, courses).
    Stores the JSON results directly in Redis so SEO API endpoints are lightning fast.
    """
    redis_client = get_redis_connection("default")
    pipeline = redis_client.pipeline()
    
    # 1. Precompute State Aggregates
    states = College.objects.values('state').annotate(
        total_colleges=Count('id'),
        avg_rating=Avg('rating')
    ).filter(total_colleges__gt=0)
    
    state_list = []
    for s in states:
        state_name = s['state'].lower().strip()
        if not state_name: continue
        
        # Ownership breakdown
        ownership = list(College.objects.filter(state__iexact=s['state']).values_list('ownership_type', flat=True))
        own_counts = dict(Counter(ownership))
        
        # Top 5 cities in this state
        top_cities = list(College.objects.filter(state__iexact=s['state'])
                          .values('city')
                          .annotate(count=Count('id'))
                          .order_by('-count')[:5])
                          
        seo_data = {
            "state": s['state'],
            "total_colleges": s['total_colleges'],
            "avg_rating": round(float(s['avg_rating'] or 0), 1),
            "ownership_breakdown": own_counts,
            "top_cities": [c['city'] for c in top_cities if c['city']],
            "seo": {
                "meta_title": f"Top {s['total_colleges']} Colleges in {s['state']} 2026 - Fees, Rankings & Reviews",
                "meta_description": f"Explore {s['total_colleges']} top colleges in {s['state']}. Compare Government & Private colleges with rankings, courses & placements.",
                "canonical_url": f"/colleges/{s['state'].lower().replace(' ', '-')}"
            }
        }
        
        pipeline.set(f"seo:state:{state_name}", json.dumps(seo_data))
        state_list.append({"name": s['state'], "count": s['total_colleges'], "slug": s['state'].lower().replace(' ', '-')})
        
    pipeline.set("seo:state:all", json.dumps(state_list))

    # 2. Precompute City Aggregates
    cities = College.objects.values('city', 'state').annotate(
        total_colleges=Count('id'),
        avg_rating=Avg('rating')
    ).filter(total_colleges__gt=0)
    
    city_list = []
    for c in cities:
        city_name = c['city'].lower().strip()
        if not city_name: continue
        
        ownership = list(College.objects.filter(city__iexact=c['city']).values_list('ownership_type', flat=True))
        own_counts = dict(Counter(ownership))
        
        seo_data = {
            "city": c['city'],
            "state": c['state'],
            "total_colleges": c['total_colleges'],
            "avg_rating": round(float(c['avg_rating'] or 0), 1),
            "ownership_breakdown": own_counts,
            "seo": {
                "meta_title": f"Top {c['total_colleges']} Colleges in {c['city']} 2026 - Fees, Rankings & Reviews",
                "meta_description": f"Explore {c['total_colleges']} top colleges in {c['city']}. Compare average fees, rankings, courses & placements.",
                "canonical_url": f"/colleges/{c['city'].lower().replace(' ', '-')}"
            }
        }
        
        pipeline.set(f"seo:city:{city_name}", json.dumps(seo_data))
        city_list.append({"name": c['city'], "state": c['state'], "count": c['total_colleges'], "slug": c['city'].lower().replace(' ', '-')})
        
    pipeline.set("seo:city:all", json.dumps(city_list))

    pipeline.execute()
    return f"SEO aggregates updated: {len(state_list)} states, {len(city_list)} cities."
