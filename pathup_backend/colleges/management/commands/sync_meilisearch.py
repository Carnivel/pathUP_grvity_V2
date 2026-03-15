import time
from datetime import datetime
from django.core.management.base import BaseCommand
from colleges.models import College
from colleges.search_service import format_college_for_search, get_meilisearch_client, initialize_index

class Command(BaseCommand):
    help = 'Safely synchronizes all Colleges to Meilisearch using zero-downtime versioned index swapping.'

    def handle(self, *args, **kwargs):
        client = get_meilisearch_client()
        
        # 1. Generate versioned index name (e.g. colleges_20231024_1530)
        version_suffix = datetime.now().strftime('%Y%m%d_%H%M%S')
        temp_index_name = f'colleges_v_{version_suffix}'
        self.stdout.write(f'Creating temporary versioned index: {temp_index_name}')
        
        # 2. Safely initialize configuration on the temporary index
        temp_index = initialize_index(temp_index_name)
        if not temp_index:
            self.stdout.write(self.style.ERROR('Meilisearch connection failed. Aborting.'))
            return

        # 3. Batch process documents from MySQL
        batch_size = 1000
        queryset = College.objects.prefetch_related(
            'offered_courses__course__degree',
            'offered_courses__course__specialization',
            'reviews'
        ).all()
        
        total_colleges = queryset.count()
        self.stdout.write(f'Found {total_colleges} colleges to synchronize.')
        
        documents = []
        processed = 0
        
        # Using iterator() prevents loading the entire MySQL table into RAM
        for college in queryset.iterator(chunk_size=batch_size):
            documents.append(format_college_for_search(college))
            
            if len(documents) >= batch_size:
                task = temp_index.add_documents(documents)
                client.wait_for_task(task.task_uid)
                processed += len(documents)
                self.stdout.write(f'  ... Uploaded {processed}/{total_colleges}')
                documents = []
                
        # Push any remaining documents
        if documents:
            task = temp_index.add_documents(documents)
            client.wait_for_task(task.task_uid)
            processed += len(documents)
            self.stdout.write(f'  ... Uploaded {processed}/{total_colleges}')

        # 4. Atomic Swap (Zero Downtime)
        self.stdout.write(f'All documents uploaded. Swapping temporary index into production role...')
        task = client.swap_indexes([{'indexes': ['colleges', temp_index_name]}])
        client.wait_for_task(task.task_uid)
        
        # 5. Cleanup Old Indexes
        self.stdout.write(f'Swap complete. Cleaning up stale indexes...')
        all_indexes = client.get_indexes()
        # Keep the active one ('colleges'), the current alias backing it ('colleges_v_...'), and delete any older versions
        for idx in all_indexes['results']:
            if idx.uid.startswith('colleges_v_') and idx.uid != temp_index_name:
                self.stdout.write(f'  Deleting old index: {idx.uid}')
                client.delete_index(idx.uid)

        self.stdout.write(self.style.SUCCESS('Successfully rebuilt Meilisearch index with zero downtime.'))
