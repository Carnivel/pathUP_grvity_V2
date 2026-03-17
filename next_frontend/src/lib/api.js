/**
 * Centralized API utility for executing fetch requests against the Django backend.
 * Provides default headers, explicit error handling (preventing soft-404s), 
 * and Incremental Static Regeneration (ISR) caching logic.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_BASE_URL) {
    throw new Error("Critical Build Setup Error: NEXT_PUBLIC_API_URL is not defined in the environment.");
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

    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
        if (response.status === 404) {
            return null;
        }
        // Explicitly throw a hard error so Next.js build will fail or notFound() will trigger
        // preventing the generation of incomplete or soft-404 pages.
        throw new Error(`Failed to fetch API from ${url} (Status: ${response.status})`);
    }

    return response.json();
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
