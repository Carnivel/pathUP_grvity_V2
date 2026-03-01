from django.contrib import admin
from .models import College, Course, CollegeCourse

class CollegeCourseAdmin(admin.ModelAdmin):
    list_display = ('college', 'course', 'tuition_fee', 'total_seats_available')
    list_filter = ('college', 'course__stream')

class CourseAdmin(admin.ModelAdmin):
    list_display = ('name', 'specialization', 'stream', 'degree_level')
    list_filter = ('stream', 'degree_level')

class CollegeAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'is_government_or_private')
    list_filter = ('location', 'is_government_or_private')

admin.site.register(College, CollegeAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(CollegeCourse, CollegeCourseAdmin)
