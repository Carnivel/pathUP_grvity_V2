import { fetchAPI } from './api';

/**
 * Enhanced Course Discovery API functions
 * These functions support SEO pre-rendering, state filtering, and pagination.
 */

export async function getStatesByCourse(courseSlug) {
    // Ideally maps to backend: /courses/${courseSlug}/states/
    try {
        const data = await fetchAPI(`/courses/${courseSlug}/states/`);
        return data || [];
    } catch (e) {
        console.warn(`Fallback: Could not fetch states for course ${courseSlug}`, e);
        // Fallback mock data for development
        return [
            { slug: 'maharashtra', name: 'Maharashtra' },
            { slug: 'karnataka', name: 'Karnataka' },
            { slug: 'delhi', name: 'Delhi' },
            { slug: 'tamil-nadu', name: 'Tamil Nadu' }
        ];
    }
}

export async function getCollegesByCourseAndState(courseSlug, stateSlug, queryParams = "") {
    // Maps to backend: /courses/${courseSlug}/states/${stateSlug}/colleges/?${queryParams}
    try {
        const paramStr = queryParams ? `?${queryParams}` : '';
        const data = await fetchAPI(`/courses/${courseSlug}/states/${stateSlug}/colleges/${paramStr}`);
        return data || { results: [], count: 0 };
    } catch (e) {
        console.warn(`Fallback: Could not fetch colleges for ${courseSlug} in ${stateSlug}`, e);
        return { results: [], count: 0 };
    }
}

export async function getAllCollegesPaginated(queryParams = "") {
    try {
        const paramStr = queryParams ? `?${queryParams}` : '';
        const data = await fetchAPI(`/colleges/${paramStr}`);
        return data || { results: [], count: 0 };
    } catch (e) {
        console.warn(`Fallback: Could not fetch paginated colleges`, e);
        return { results: [], count: 0 };
    }
}

export async function getTopCourseStateCombinations() {
    // Used for generateStaticParams to pre-render top SEO pages
    try {
        const data = await fetchAPI(`/seo/top-course-states/`);
        return data || [];
    } catch (e) {
        return [
            { course: '1', state: 'maharashtra' }, // Using course ID 1 (B.Tech CS) for mock
            { course: '1', state: 'karnataka' },
            { course: '11', state: 'delhi' } // MBBS
        ];
    }
}

export async function getRelatedCourses(stream) {
    try {
        // Fetch courses by stream for internal linking
        const data = await fetchAPI(`/courses/?stream=${stream}&limit=5`);
        return data.results || [];
    } catch (e) {
        return [];
    }
}
