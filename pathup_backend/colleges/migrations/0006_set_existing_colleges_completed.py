"""
Data migration: Set all existing colleges to status='completed'
so the public API continues to work without interruption.
"""
from django.db import migrations


def set_existing_completed(apps, schema_editor):
    College = apps.get_model('colleges', 'College')
    College.objects.filter(status='draft').update(status='completed')


def reverse_to_draft(apps, schema_editor):
    # Reverse is a no-op; we don't want to accidentally hide all colleges
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('colleges', '0005_add_status_field'),
    ]

    operations = [
        migrations.RunPython(set_existing_completed, reverse_to_draft),
    ]
