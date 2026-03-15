from django.contrib import admin
from .models import (
    University, Facility, Accreditation, EntranceExam, Stream, Specialization,
    Degree, Course, College, CollegeImage, CollegeCourse,
    Skill, Career, Job, Placement, StudentReview
)

class CollegeCourseAdmin(admin.ModelAdmin):
    list_display = ('college', 'course', 'tuition_fee', 'seat_intake')
    search_fields = ('college__name', 'course__degree__name', 'course__specialization__name')

class CourseAdmin(admin.ModelAdmin):
    list_display = ('degree', 'specialization', 'duration_years')
    list_filter = ('degree',)
    search_fields = ('specialization__name', 'degree__name')
    prepopulated_fields = {'slug': ('degree', 'specialization')}

class CollegeAdmin(admin.ModelAdmin):
    list_display = ('name', 'city', 'state', 'ownership_type')
    list_filter = ('state', 'ownership_type')
    search_fields = ('name', 'city', 'state')
    prepopulated_fields = {'slug': ('name',)}

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

admin.site.register(University)
admin.site.register(Facility)
admin.site.register(Accreditation)
admin.site.register(EntranceExam)
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
