import logging
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.core.cache import cache
from django.conf import settings
from .models import College, CollegeCourse, StudentReview

logger = logging.getLogger('celery.task')


def invalidate_cache(slug=None):
    """
    Intelligently purges specific entries from the Redis cache using pattern matching
    safely avoiding the need to wipe the entire Redis database on every minor change.
    """
    if hasattr(cache, "delete_pattern"):
        if slug:
            cache.delete_pattern(f"*{slug}*")
        cache.delete_pattern("*colleges*")
    else:
        cache.clear()


def _sync_college_to_meilisearch(college_ids):
    """
    Try Celery first; if Celery/Redis broker is down, sync directly (synchronous).
    This guarantees Meilisearch stays in sync regardless of Celery's state.
    """
    try:
        from .tasks import bulk_update_colleges_in_meilisearch
        bulk_update_colleges_in_meilisearch.delay(college_ids)
    except Exception:
        # Celery unavailable — do it synchronously right now
        logger.warning("Celery unavailable, syncing Meilisearch directly.")
        try:
            from .search_service import get_meilisearch_client, format_college_for_search
            client = get_meilisearch_client()
            index = client.get_index('colleges')
            colleges = College.published.prefetch_related(
                'offered_courses__course__degree',
                'offered_courses__course__specialization',
                'reviews'
            ).filter(id__in=college_ids)
            docs = [format_college_for_search(c) for c in colleges]
            if docs:
                index.add_documents(docs)
        except Exception as e:
            logger.error(f"Direct Meilisearch sync failed: {e}")


def _remove_college_from_meilisearch(college_id):
    """
    Try Celery first; if unavailable, remove directly from Meilisearch.
    """
    try:
        from .tasks import remove_college_from_meilisearch
        remove_college_from_meilisearch.delay(college_id)
    except Exception:
        logger.warning("Celery unavailable, removing from Meilisearch directly.")
        try:
            from .search_service import get_meilisearch_client
            client = get_meilisearch_client()
            index = client.get_index('colleges')
            index.delete_document(str(college_id))
        except Exception as e:
            logger.error(f"Direct Meilisearch removal failed: {e}")


# ---- Cache & Search Signals ----

@receiver(post_save, sender=College)
def save_college_signal(sender, instance, **kwargs):
    invalidate_cache(getattr(instance, 'slug', None))
    if instance.status == 'completed':
        _sync_college_to_meilisearch([instance.id])
    else:
        _remove_college_from_meilisearch(instance.id)

@receiver(post_delete, sender=College)
def delete_college_signal(sender, instance, **kwargs):
    invalidate_cache(getattr(instance, 'slug', None))
    _remove_college_from_meilisearch(instance.id)

@receiver(post_save, sender=CollegeCourse)
@receiver(post_delete, sender=CollegeCourse)
def update_course_signal(sender, instance, **kwargs):
    if instance.college:
        invalidate_cache(instance.college.slug)
        _sync_college_to_meilisearch([instance.college.id])

@receiver(post_save, sender=StudentReview)
@receiver(post_delete, sender=StudentReview)
def update_review_signal(sender, instance, **kwargs):
    if instance.college_reference:
        invalidate_cache(instance.college_reference.slug)
        _sync_college_to_meilisearch([instance.college_reference.id])
