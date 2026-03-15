import json
from django.conf import settings

SCHEMA_ORG_BASE = "https://schema.org"
MAIN_WEBSITE_URL = "https://pathup.in" # TODO: Make dynamic via settings

def generate_college_jsonld(college):
    """
    Generates an EducationalOrganization JSON-LD block for a single college.
    """
    data = {
        "@context": SCHEMA_ORG_BASE,
        "@type": "EducationalOrganization",
        "name": college.name,
        "url": f"{MAIN_WEBSITE_URL}/colleges/{college.slug}",
    }
    
    # Address
    address = {"@type": "PostalAddress"}
    if college.city: address["addressLocality"] = college.city
    if college.state: address["addressRegion"] = college.state
    address["addressCountry"] = college.country or "IN"
    data["address"] = address

    # Rating
    if college.rating and getattr(college, 'review_count', 0) > 0:
        data["aggregateRating"] = {
            "@type": "AggregateRating",
            "ratingValue": round(float(college.rating), 1),
            "reviewCount": college.review_count,
            "bestRating": 5.0,
            "worstRating": 1.0
        }

    # SameAs (Website)
    if college.website_url:
        data["sameAs"] = [college.website_url]

    return data

def generate_item_list_jsonld(items, list_url, list_name):
    """
    Generates an ItemList JSON-LD block (e.g., Top Colleges in Pune).
    """
    elements = []
    for idx, item in enumerate(items):
        elements.append({
            "@type": "ListItem",
            "position": idx + 1,
            "item": {
                "@type": "EducationalOrganization",
                "name": item.name,
                "url": f"{MAIN_WEBSITE_URL}/colleges/{item.slug}"
            }
        })

    return {
        "@context": SCHEMA_ORG_BASE,
        "@type": "ItemList",
        "url": list_url,
        "name": list_name,
        "itemListElement": elements
    }

def generate_course_jsonld(course, offering_colleges=None):
    """
    Generates a Course JSON-LD block. 
    Can optionally include providers if Top Colleges for this course are known.
    """
    course_name = f"{course.degree.name} in {course.specialization.name}"
    
    data = {
        "@context": SCHEMA_ORG_BASE,
        "@type": "Course",
        "name": course_name,
        "description": f"Learn about {course_name} including syllabus, eligibility, and top colleges.",
        "provider": {
            "@type": "Organization",
            "name": "PathUp",
            "sameAs": MAIN_WEBSITE_URL
        }
    }
    
    return data
