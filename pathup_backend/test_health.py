import os
import django
from django.test import Client

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pathup_backend.settings')
django.setup()

client = Client()
response = client.get('/api/health/')
print("Status Code:", response.status_code)
print("Response JSON:", response.json())
