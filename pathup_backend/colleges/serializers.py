from rest_framework import serializers
from .models import (
    College, Course, CollegeCourse, 
    University, Facility, Accreditation, EntranceExam, Stream, Specialization, Degree,
    Skill, Career, Job, Placement, StudentReview
)

class StreamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stream
        fields = '__all__'

class SpecializationSerializer(serializers.ModelSerializer):
    stream = StreamSerializer(read_only=True)
    class Meta:
        model = Specialization
        fields = '__all__'

class DegreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Degree
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    degree = DegreeSerializer(read_only=True)
    specialization = SpecializationSerializer(read_only=True)
    class Meta:
        model = Course
        fields = '__all__'

class CollegeCourseSerializer(serializers.ModelSerializer):
    course = CourseSerializer(read_only=True)
    
    class Meta:
        model = CollegeCourse
        fields = '__all__'

class CollegeListSerializer(serializers.ModelSerializer):
    """Ultra-lightweight serializer for list pages — reads annotations, zero relation traversals."""
    university_name = serializers.CharField(source='university.name', read_only=True, default=None)
    course_count = serializers.IntegerField(read_only=True, default=0)
    min_fee = serializers.DecimalField(max_digits=12, decimal_places=2, read_only=True, default=None)
    
    class Meta:
        model = College
        fields = [
            'id', 'name', 'slug', 'city', 'state', 'district',
            'ownership_type', 'rating', 'established_year',
            'university_name', 'course_count', 'min_fee', 'website_url'
        ]

class CollegeSerializer(serializers.ModelSerializer):
    """Full serializer for detail pages — includes nested course data."""
    courses = CollegeCourseSerializer(source='offered_courses', many=True, read_only=True)

    class Meta:
        model = College
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class CareerSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    courses = CourseSerializer(many=True, read_only=True)
    
    class Meta:
        model = Career
        fields = '__all__'

class JobSerializer(serializers.ModelSerializer):
    associated_career = CareerSerializer(read_only=True)
    
    class Meta:
        model = Job
        fields = '__all__'

class PlacementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Placement
        fields = '__all__'

class StudentReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentReview
        fields = '__all__'
