from django.contrib import admin
from django.urls import path, reverse
from django.shortcuts import redirect, get_object_or_404
from django.utils.html import format_html
from .models import (
    University, Facility, Accreditation, EntranceExam, Stream, Specialization,
    Degree, Course, College, CollegeImage, CollegeCourse,
    Skill, Career, Job, Placement, StudentReview
)


# ─── Inlines ──────────────────────────────────────────────────────────────────

class CollegeImageInline(admin.TabularInline):
    model = CollegeImage
    extra = 1
    fields = ('image', 'caption', 'is_primary')

class CollegeCourseInline(admin.TabularInline):
    """Inline for managing Courses Offered by the College"""
    model = CollegeCourse
    extra = 1
    fields = ('course', 'tuition_fee', 'seat_intake', 'entrance_exam', 'placement_rate', 'average_salary')
    autocomplete_fields = ['course', 'entrance_exam']
    
    # Enables a clickable link leading to the dedicated change page for this record.
    show_change_link = True 
    # Removed 'classes = ['collapse']' so it's visible fully by default when tab is clicked.

class StudentReviewInline(admin.StackedInline):
    """Inline for managing Reviews related to the College"""
    model = StudentReview
    extra = 0
    fields = ('reviewer_role', 'rating_score', 'review_text', 'year_of_study_or_graduation')


# ─── College Admin ────────────────────────────────────────────────────────────

class CollegeAdmin(admin.ModelAdmin):
    # ─ List View Configuration ─
    list_display = (
        'name', 'city', 'state', 'ownership_type',
        'status', 'status_badge', 'toggle_button',
    )
    list_editable = ('city', 'status')
    list_filter = ('status', 'state', 'ownership_type')
    search_fields = ('name', 'city', 'state')
    autocomplete_fields = ['university', 'accreditations', 'facilities']
    list_per_page = 50
    list_select_related = ('university',)
    prepopulated_fields = {'slug': ('name',)}
    ordering = ('-status', 'name')  # Completed (published) first, then Draft

    # ─ Bulk Actions ─
    actions = ['bulk_unpublish', 'bulk_publish']

    @admin.action(description='⏸ Unpublish selected colleges (set to Draft)')
    def bulk_unpublish(self, request, queryset):
        count = queryset.update(status='draft')
        self.message_user(request, f'✅ {count} college(s) set to Draft (unpublished).')

    @admin.action(description='✅ Publish selected colleges (set to Completed)')
    def bulk_publish(self, request, queryset):
        count = queryset.update(status='completed')
        self.message_user(request, f'✅ {count} college(s) set to Completed (published).')

    # ─ Detail View / Tab Configuration ─
    # Jazzmin turns these fieldsets into tabs (if changeform_format is horizontal_tabs)
    fieldsets = (
        ('General Information', {
            'fields': (
                ('name', 'slug'),
                'logo',
                ('city', 'district', 'state', 'country'),
                ('established_year', 'university', 'ownership_type'),
                ('website_url', 'email', 'phone_number'),
                ('aicte_id', 'rating', 'status'),
            )
        }),
        ('Campus & Facilities', {
            'fields': ('facilities', 'accreditations'),
        }),
    )

    inlines = [
        CollegeCourseInline,  # Acts as the 'Courses Offered & Placements' tab
        CollegeImageInline,   # Acts as the 'Media' tab
        StudentReviewInline,  # Acts as the 'Reviews' tab
    ]

    # ─── Custom Columns ───────────────────────────────────────────────────

    @admin.display(description='Status', ordering='status')
    def status_badge(self, obj):
        """Render a colored badge for status: green = completed, red = draft."""
        if obj.status == 'completed':
            color, label = '#28a745', 'Completed'
        else:
            color, label = '#dc3545', 'Draft'
        return format_html(
            '<span style="background:{}; color:#fff; padding:3px 10px; '
            'border-radius:12px; font-size:11px; font-weight:600;">{}</span>',
            color, label,
        )

    @admin.display(description='Action')
    def toggle_button(self, obj):
        """Render a one-click Publish / Unpublish button."""
        url = reverse('admin:college-toggle-status', args=[obj.pk])
        if obj.status == 'draft':
            btn_color, btn_label = '#28a745', '✅ Publish'
        else:
            btn_color, btn_label = '#ffc107', '⏸ Unpublish'
        return format_html(
            '<a href="{}" style="background:{}; color:#fff; padding:4px 12px; '
            'border-radius:6px; text-decoration:none; font-size:12px; '
            'font-weight:600; white-space:nowrap;">{}</a>',
            url, btn_color, btn_label,
        )

    # ─── Custom URLs & Views ──────────────────────────────────────────────

    def get_urls(self):
        custom_urls = [
            path(
                '<int:college_id>/toggle-status/',
                self.admin_site.admin_view(self.toggle_status_view),
                name='college-toggle-status',
            ),
        ]
        return custom_urls + super().get_urls()

    def toggle_status_view(self, request, college_id):
        """Toggle status between draft and completed, then redirect back."""
        college = get_object_or_404(College, pk=college_id)
        college.status = 'draft' if college.status == 'completed' else 'completed'
        college.save(update_fields=['status'])
        self.message_user(
            request,
            f'"{college.name}" is now {college.get_status_display()}.',
        )
        return redirect(reverse('admin:colleges_college_changelist'))


# ─── Other Model Admins ──────────────────────────────────────────────────────

class CollegeCourseAdmin(admin.ModelAdmin):
    list_display = ('college', 'course', 'tuition_fee', 'seat_intake')
    search_fields = ('college__name', 'course__degree__name', 'course__specialization__name')

class CourseAdmin(admin.ModelAdmin):
    list_display = ('degree', 'specialization', 'duration_years')
    list_filter = ('degree',)
    search_fields = ('specialization__name', 'degree__name')
    prepopulated_fields = {'slug': ('degree', 'specialization')}

class CareerAdmin(admin.ModelAdmin):
    list_display = ('career_name', 'industry_sector')
    search_fields = ('career_name', 'industry_sector')
    prepopulated_fields = {'slug': ('career_name',)}

class SkillAdmin(admin.ModelAdmin):
    list_display = ('skill_name',)
    search_fields = ('skill_name',)

class JobAdmin(admin.ModelAdmin):
    list_display = ('job_title', 'associated_career')
    search_fields = ('job_title', 'associated_career__career_name')

class PlacementAdmin(admin.ModelAdmin):
    list_display = ('college_course', 'average_salary', 'placement_percentage')
    search_fields = ('college_course__college__name', 'college_course__course__specialization__name')

class StudentReviewAdmin(admin.ModelAdmin):
    list_display = ('college_reference', 'reviewer_role', 'rating_score')
    list_filter = ('reviewer_role',)
    search_fields = ('college_reference__name', 'review_text')


class UniversityAdmin(admin.ModelAdmin):
    search_fields = ('name',)

class FacilityAdmin(admin.ModelAdmin):
    search_fields = ('name',)

class AccreditationAdmin(admin.ModelAdmin):
    search_fields = ('body_name', 'grade')

class EntranceExamAdmin(admin.ModelAdmin):
    search_fields = ('name',)

# ─── Register All Models ─────────────────────────────────────────────────────

admin.site.register(University, UniversityAdmin)
admin.site.register(Facility, FacilityAdmin)
admin.site.register(Accreditation, AccreditationAdmin)
admin.site.register(EntranceExam, EntranceExamAdmin)
admin.site.register(Stream)
admin.site.register(Specialization)
admin.site.register(Degree)
admin.site.register(Course, CourseAdmin)
admin.site.register(College, CollegeAdmin)
admin.site.register(CollegeImage)
admin.site.register(CollegeCourse, CollegeCourseAdmin)
admin.site.register(Skill, SkillAdmin)
admin.site.register(Career, CareerAdmin)
admin.site.register(Job, JobAdmin)
admin.site.register(Placement, PlacementAdmin)
admin.site.register(StudentReview, StudentReviewAdmin)
