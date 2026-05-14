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
        // Return a safe fallback structure so Next.js build doesn't crash
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
