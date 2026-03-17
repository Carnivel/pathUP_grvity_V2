from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.core.cache import cache
from django.conf import settings
from .models import College, CollegeCourse, StudentReview
from .tasks import bulk_update_colleges_in_meilisearch, remove_college_from_meilisearch
from django.core.cache import cache
from .models import College, CollegeCourse, StudentReview
from django.conf import settings

def invalidate_cache(slug=None):
    """
    Intelligently purges specific entries from the Redis cache using pattern matching
    safely avoiding the need to wipe the entire Redis database on every minor change.
    """
    if hasattr(cache, "delete_pattern"):
        # Delete detail view keys related to this specific college 
        if slug:
            cache.delete_pattern(f"*{settings.CACHES['default'].get('KEY_PREFIX', '')}*{slug}*")
        
        # Clear the general colleges list endpoints since they might contain outdated info
        cache.delete_pattern(f"*{settings.CACHES['default'].get('KEY_PREFIX', '')}*colleges*")
    else:
        # Fallback for DummyCache or LocMemCache
        cache.clear()

# ---- Cache & Search Signals ----

@receiver(post_save, sender=College)
def save_college_signal(sender, instance, **kwargs):
    # Invalidate Redis cache regardless of status
    invalidate_cache(getattr(instance, 'slug', None))
    # Only sync to Meilisearch if published; remove if draft
    if instance.status == 'completed':
        bulk_update_colleges_in_meilisearch.delay([instance.id])
    else:
        remove_college_from_meilisearch.delay(instance.id)

@receiver(post_delete, sender=College)
def delete_college_signal(sender, instance, **kwargs):
    invalidate_cache(getattr(instance, 'slug', None))
    # Remove from Meilisearch
    remove_college_from_meilisearch.delay(instance.id)

@receiver(post_save, sender=CollegeCourse)
@receiver(post_delete, sender=CollegeCourse)
def update_course_signal(sender, instance, **kwargs):
    if instance.college:
        invalidate_cache(instance.college.slug)
        bulk_update_colleges_in_meilisearch.delay([instance.college.id])

@receiver(post_save, sender=StudentReview)
@receiver(post_delete, sender=StudentReview)
def update_review_signal(sender, instance, **kwargs):
    if instance.college_reference:
        invalidate_cache(instance.college_reference.slug)
        bulk_update_colleges_in_meilisearch.delay([instance.college_reference.id])
