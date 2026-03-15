import sys

file_path = 'c:/Users/anandhu/pathupu_test_antigravity/pathup_backend/colleges/views.py'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Normalize line endings to avoid issues with replace
text = text.replace('\r\n', '\n')

if 'from django.core.cache import cache' not in text:
    text = text.replace('from django.conf import settings\n', 'from django.conf import settings\nfrom django.core.cache import cache\n')

append_str = """
class SystemHealthAPIView(views.APIView):
    \"\"\"
    Lightning-fast, hardened health check for uptime monitors.
    Contains strict timeouts to prevent hanging the API on external failures.
    \"\"\"
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
            
        status_code = 200 if all(service['ok'] for service in health_status.values()) else 503
        return Response(health_status, status=status_code)
"""

if "SystemHealthAPIView" not in text:
    text += append_str

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Fix applied successfully to views.py!")
