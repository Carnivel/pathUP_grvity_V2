from rest_framework import serializers
from .models import College, Course, CollegeCourse

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class CollegeCourseSerializer(serializers.ModelSerializer):
    course_name = serializers.CharField(source='course.name', read_only=True)
    specialization = serializers.CharField(source='course.specialization', read_only=True)
    degree_level = serializers.CharField(source='course.degree_level', read_only=True)
    stream = serializers.CharField(source='course.stream', read_only=True)
    duration_years = serializers.IntegerField(source='course.duration_years', read_only=True)

    class Meta:
        model = CollegeCourse
        fields = ['course_name', 'specialization', 'degree_level', 'stream', 'duration_years', 
                  'total_seats_available', 'entrance_exam_required', 'tuition_fee', 'hostel_fee']

class CollegeSerializer(serializers.ModelSerializer):
    courses = CollegeCourseSerializer(source='offered_courses', many=True, read_only=True)

    class Meta:
        model = College
        fields = '__all__'
