from django.urls import path
from .views import CollegeListAPIView, CollegeDetailAPIView

urlpatterns = [
    path('api/colleges/', CollegeListAPIView.as_view(), name='college-list'),
    path('api/colleges/<slug:slug>/', CollegeDetailAPIView.as_view(), name='college-detail'),
]
