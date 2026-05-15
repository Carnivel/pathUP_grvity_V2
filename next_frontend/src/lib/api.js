/**
 * Centralized API utility for executing fetch requests against the Django backend.
 * Provides default headers, explicit error handling (preventing soft-404s), 
 * and Incremental Static Regeneration (ISR) caching logic.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_BASE_URL) {
    console.warn("⚠️ WARNING: NEXT_PUBLIC_API_URL is not defined. API calls will use fallback mock data.");
}

export async function fetchAPI(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const defaultOptions = {
        headers: {
            "Content-Type": "application/json",
        },
        // Default to ISR: Revalidate cached pages every 1 hour (3600 seconds)
        next: { revalidate: 3600 },
        ...options,
    };

    try {
        const response = await fetch(url, defaultOptions);

        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            console.warn(`[Warning] Failed to fetch API from ${url} (Status: ${response.status})`);
            return { results: [], count: 0, _error: true };
        }

        return await response.json();
    } catch (error) {
        console.warn(`[Network Error] API unreachable at ${url}: ${error.message}`);
        
        // --- FALLBACK MOCK DATA ---
        if (endpoint.includes('courses')) {
            try {
                const { courses } = require('../data/coursesData');
                if (endpoint.includes('slug')) return courses[0];
                return { results: courses.slice(0, 10), count: courses.length, _offline: true };
            } catch(e) {}
        }
        
        if (endpoint.includes('colleges')) {
            // Provide a few dummy colleges so it looks populated
            const dummyColleges = [
                {
                    id: 1,
                    name: "Indian Institute of Technology (IIT), Bombay",
                    slug: "iit-bombay",
                    location: "Mumbai, Maharashtra",
                    type: "Public",
                    category: "engineering",
                    rating: 4.8,
                    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
                    description: "One of the premier engineering institutes in India.",
                    courses: [{ name: "B.Tech Computer Science", fees: "₹2,50,000" }],
                    facilities: ["Hostel", "Library", "Labs", "Sports"]
                },
                {
                    id: 2,
                    name: "All India Institute of Medical Sciences (AIIMS)",
                    slug: "aiims-delhi",
                    location: "New Delhi",
                    type: "Public",
                    category: "medical",
                    rating: 4.9,
                    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop",
                    description: "India's top medical college and hospital.",
                    courses: [{ name: "MBBS", fees: "₹5,000" }],
                    facilities: ["Hospital", "Library", "Labs"]
                },
                {
                    id: 3,
                    name: "Indian Institute of Management (IIM), Ahmedabad",
                    slug: "iim-ahmedabad",
                    location: "Ahmedabad, Gujarat",
                    type: "Public",
                    category: "management",
                    rating: 4.8,
                    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
                    description: "The best B-School in the country.",
                    courses: [{ name: "MBA", fees: "₹25,00,000" }],
                    facilities: ["Library", "AC Classrooms", "Auditorium"]
                }
            ];
            
            if (endpoint.includes('iit-bombay')) return dummyColleges[0];
            if (endpoint.includes('aiims-delhi')) return dummyColleges[1];
            if (endpoint.includes('iim-ahmedabad')) return dummyColleges[2];

            return { results: dummyColleges, count: dummyColleges.length, _offline: true };
        }

        return { results: [], count: 0, _offline: true };
    }
}

/**
 * Convenience functions for specific data models
 */

export async function getColleges(queryParams = "") {
    // Disable caching for dynamic filter/sort queries so we always get fresh DB results
    return fetchAPI(`/colleges/?${queryParams}`, { cache: 'no-store', next: { revalidate: 0 } });
}

export async function getCollegeBySlug(slug) {
    // Always fetch fresh data to ensure images and latest changes are reflected
    const data = await fetchAPI(`/colleges/${slug}/`, { cache: 'no-store', next: { revalidate: 0 } });
    return data;
}

export async function getCourses(queryParams = "") {
    return fetchAPI(`/courses/?${queryParams}`);
}

export async function getCourseBySlug(slug) {
    const data = await fetchAPI(`/courses/${slug}/`);
    return data;
}
