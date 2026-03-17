import time
import requests
import meilisearch
from django.conf import settings
from .models import College

def get_meilisearch_client():
    return meilisearch.Client(settings.MEILISEARCH_URL, settings.MEILISEARCH_MASTER_KEY)

def wait_for_meilisearch(client, max_retries=5, delay=2):
    """
    Safely ping the Meilisearch server during initialization with exponential backoff.
    """
    for attempt in range(max_retries):
        try:
            if client.is_healthy():
                return True
        except requests.exceptions.ConnectionError:
            pass
        time.sleep(delay * (2 ** attempt))
    return False

def initialize_index(index_name='colleges'):
    """
    Safely creates and configures the index if it doesn't already exist.
    """
    client = get_meilisearch_client()
    if not wait_for_meilisearch(client):
        print("Warning: Meilisearch is not available.")
        return None

    try:
        index = client.get_index(index_name)
    except meilisearch.errors.MeilisearchApiError as e:
        if e.code == 'index_not_found':
            # Create if missing
            client.create_index(index_name, {'primaryKey': 'id'})
            index = client.get_index(index_name)
            
            index.update_settings({
                'searchableAttributes': [
                    'name',
                    'university_name',
                    'city',
                    'state',
                    'course_names'
                ],
                'filterableAttributes': [
                    'city',
                    'state',
                    'course_names',
                    'ownership_type'
                ],
                'sortableAttributes': ['ranking_score'],
                'rankingRules': [
                    'words',
                    'typo',
                    'proximity',
                    'attribute',
                    'sort',
                    'exactness'
                ]
            })
        else:
            raise e
            
    return index

def format_college_for_search(college):
    """
    Flattens the complex MySQL relationships into a lean, fast JSON document for Meilisearch.
    Excludes massive text fields (like descriptions/reviews) to save RAM.
    """
    # Grab courses efficiently utilizing prefetch_related strings if already loaded, 
    # but handle gracefully if called on a raw object.
    course_names = set()
    for cc in college.offered_courses.all():
        if cc.course and cc.course.degree:
            course_names.add(cc.course.degree.name)
        if cc.course and cc.course.specialization:
            course_names.add(cc.course.specialization.name)
            
    # Naive ranking score for sorting. In reality this could be powered by analytics.
    ranking_score = float(college.rating or 0) * 10
    if college.reviews.count() > 50:
        ranking_score += 10 # Boost highly reviewed colleges

    return {
        'id': college.id,
        'name': college.name,
        'city': college.city,
        'state': college.state,
        'ownership_type': college.ownership_type,
        'university_name': college.university.name if college.university else '',
        'course_names': list(course_names),
        'ranking_score': int(ranking_score)
    }
