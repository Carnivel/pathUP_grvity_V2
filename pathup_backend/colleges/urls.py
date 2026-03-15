from django.urls import path
from .views import (
    CollegeListAPIView, 
    CollegeDetailAPIView, 
    CollegeSearchAPIView, 
    SystemHealthAPIView,
    TrendingCollegesAPIView
)
from .seo_views import (
    SEOCitySummaryListAPIView, SEOCitySummaryDetailAPIView,
    SEOStateSummaryListAPIView, SEOStateSummaryDetailAPIView,
    SEOCourseSummaryListAPIView, SEOCourseSummaryDetailAPIView,
    TopCollegesAPIView,
    SitemapIndexAPIView, SitemapAPIView, RobotsAPIView
)

urlpatterns = [
    # Search & Health
    path('api/colleges/', CollegeListAPIView.as_view(), name='college-list'),
    path('api/health/', SystemHealthAPIView.as_view(), name='system-health'),
    path('api/colleges/search/', CollegeSearchAPIView.as_view(), name='college-search'),
    
    # SEO & Data Insights (Phase 5)
    path('api/seo/cities/', SEOCitySummaryListAPIView.as_view(), name='seo-city-list'),
    path('api/seo/cities/<str:city>/', SEOCitySummaryDetailAPIView.as_view(), name='seo-city-detail'),
    path('api/seo/states/', SEOStateSummaryListAPIView.as_view(), name='seo-state-list'),
    path('api/seo/states/<str:state>/', SEOStateSummaryDetailAPIView.as_view(), name='seo-state-detail'),
    path('api/seo/courses/', SEOCourseSummaryListAPIView.as_view(), name='seo-course-list'),
    path('api/seo/courses/<slug:slug>/', SEOCourseSummaryDetailAPIView.as_view(), name='seo-course-detail'),
    path('api/seo/top-colleges/', TopCollegesAPIView.as_view(), name='seo-top-colleges'),
    path('api/seo/top-colleges/<str:location>/', TopCollegesAPIView.as_view(), name='seo-top-colleges-location'),

    path('api/sitemap/index/', SitemapIndexAPIView.as_view(), name='sitemap-index'),
    path('api/sitemap/', SitemapAPIView.as_view(), name='sitemap'),
    path('api/robots/', RobotsAPIView.as_view(), name='robots'),
    
    # Detail Views
    path('api/colleges/trending/', TrendingCollegesAPIView.as_view(), name='college-trending'),
    path('api/colleges/<slug:slug>/', CollegeDetailAPIView.as_view(), name='college-detail'),
]
