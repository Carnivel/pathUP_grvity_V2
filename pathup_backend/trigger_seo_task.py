import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pathup_backend.settings')
django.setup()

from colleges.tasks import precompute_seo_aggregates
from django_redis import get_redis_connection

print("Triggering SEO Aggregation Task...")
result = precompute_seo_aggregates()
print("Task returned:", result)

print("\nVerifying Redis Keys...")
redis_client = get_redis_connection("default")
keys = redis_client.keys("seo:*")

print(f"Found {len(keys)} SEO keys in Redis:")
for k in keys[:10]:
    print(f" - {k.decode('utf-8')}")
if len(keys) > 10:
    print(f" ... and {len(keys) - 10} more.")
