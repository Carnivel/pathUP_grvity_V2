import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pathup_backend.settings')
django.setup()

from django.test import Client
from colleges.models import College
from django_redis import get_redis_connection
import datetime

def run_test():
    client = Client()
    redis_conn = get_redis_connection("default")
    
    colleges = list(College.objects.all()[:3])
    if not colleges:
        print("No colleges found in DB to test with.")
        return

    c1, c2, c3 = colleges
    
    print(f"Testing on colleges: {c1.name}, {c2.name}, {c3.name}")
    
    # 1. Test API views tracking (Anti-Abuse)
    print("\n--- Testing API Route Tracking ---")
    res = client.get(f'/api/colleges/{c1.slug}/')
    print(f"First request to {c1.slug}: {res.status_code}")
    
    res = client.get(f'/api/colleges/{c1.slug}/')
    print(f"Second request (should be guarded block): {res.status_code}")

    today = datetime.date.today().isoformat()
    views_key = f"college:views:daily:{today}"
    
    c1_count = redis_conn.hget(views_key, str(c1.id))
    print(f"Redis views for {c1.name} today: {c1_count}")
    
    # 2. Mock some fake historical Redis data
    print("\n--- Seeding Fake Historical Views ---")
    yesterday = (datetime.date.today() - datetime.timedelta(days=1)).isoformat()
    old_day = (datetime.date.today() - datetime.timedelta(days=8)).isoformat()
    
    # c2 gets huge traffic yesterday
    redis_conn.hset(views_key, str(c2.id), 50)
    redis_conn.hset(f"college:views:daily:{yesterday}", str(c2.id), 200)
    
    # c3 gets traffic 8 days ago (should be deleted and ignored)
    redis_conn.hset(f"college:views:daily:{old_day}", str(c3.id), 1000)
    
    # 3. Trigger Celery Task Sync
    print("\n--- Triggering Celery calculate_trending_scores ---")
    from colleges.tasks import calculate_trending_scores
    result = calculate_trending_scores()
    print(result)
    
    # 4. Read the Trending API endpoint
    print("\n--- Testing Trending API ---")
    res = client.get('/api/colleges/trending/')
    print(f"Global Trending Status: {res.status_code}")
    data = res.json()
    print(f"Total returned: {data['count']}")
    
    for idx, c in enumerate(data['results']):
        print(f" #{idx+1} ID: {c['id']} - Name: {c['name']} - Rating: {c['rating']}")
        
    print("\n--- Testing Old Key Cleanup ---")
    deleted = redis_conn.exists(f"college:views:daily:{old_day}")
    print(f"Does the 8-day old key exist? {'YES' if deleted else 'NO (Successfully Cleaned)'}")

if __name__ == '__main__':
    run_test()
