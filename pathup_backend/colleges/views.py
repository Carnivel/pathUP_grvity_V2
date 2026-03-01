from rest_framework import generics
from django_filters import rest_framework as filters
from .models import College
from .serializers import CollegeSerializer

class CollegeFilter(filters.FilterSet):
    # Enable filtering by "contains" for names and locations rather than exact match
    name = filters.CharFilter(lookup_expr='icontains')
    location = filters.CharFilter(lookup_expr='icontains')
    
    # Nested filtering: Find colleges offering a specific course specialization
    course__specialization = filters.CharFilter(field_name='offered_courses__course__specialization', lookup_expr='icontains')
    course__name = filters.CharFilter(field_name='offered_courses__course__name', lookup_expr='icontains')
    course__stream = filters.CharFilter(field_name='offered_courses__course__stream', lookup_expr='icontains')
    
    # Financial filtering: Find colleges where the tuition fee is LESS THAN OR EQUAL to a specific amount
    max_tuition_fee = filters.NumberFilter(field_name='offered_courses__tuition_fee', lookup_expr='lte')

    class Meta:
        model = College
        fields = ['name', 'location', 'has_hostel', 'is_government_or_private', 
                  'course__specialization', 'course__name', 'course__stream', 'max_tuition_fee']


class CollegeListAPIView(generics.ListAPIView):
    queryset = College.objects.all().distinct() # Distinct prevents duplicates when joining Course table
    serializer_class = CollegeSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = CollegeFilter

class CollegeDetailAPIView(generics.RetrieveAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer
    lookup_field = 'slug'
