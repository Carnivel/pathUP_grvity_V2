from django.core.management.base import BaseCommand
from colleges.models import College
from colleges.tasks import bulk_update_colleges_in_meilisearch
from colleges.search_service import get_meilisearch_client

class Command(BaseCommand):
    help = 'Wipes the current Meilisearch index and forcefully re-syncs all Published colleges.'

    def handle(self, *args, **kwargs):
        client = get_meilisearch_client()
        
        self.stdout.write("Wiping existing Meilisearch index 'colleges'...")
        try:
            client.delete_index('colleges')
        except Exception:
            self.stdout.write("No existing index found, skipping wipe.")
            
        published_ids = list(College.published.values_list('id', flat=True))
        
        if not published_ids:
            self.stdout.write(self.style.WARNING("No published colleges found to sync."))
            return
            
        self.stdout.write(f"Syncing {len(published_ids)} published colleges via Celery...")
        
        # Chunk into groups of 50 to avoid overloading Celery payload limits
        chunk_size = 50
        for i in range(0, len(published_ids), chunk_size):
            chunk = published_ids[i:i + chunk_size]
            bulk_update_colleges_in_meilisearch.delay(chunk)
            
        self.stdout.write(self.style.SUCCESS('Successfully queued full re-sync!'))
