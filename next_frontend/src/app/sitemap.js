import { getColleges } from '../lib/api';
import { courses } from '../data/coursesData';
import { careers } from '../data/careersData';
import { examsData } from '../data/examsData';

// Force dynamic rendering — sitemap depends on live API data
export const dynamic = 'force-dynamic';

export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'));

    // Fetch dynamic college slugs — gracefully handle API failures
    let collegeEntries = [];
    try {
        const response = await getColleges();
        if (response && response.results && response.results.length > 0) {
            collegeEntries = response.results
                .filter(c => c.slug)
                .map((c) => ({
                    url: `${baseUrl}/colleges/${c.slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'weekly',
                    priority: 0.8,
                }));
        }
    } catch (error) {
        console.warn('[Sitemap] Could not fetch colleges from API, skipping dynamic entries:', error.message);
    }

    // Map Static Collections (can be migrated to DB queries later without changing sitemap logic)
    const courseEntries = courses.map((course) => ({
        url: `${baseUrl}/courses/${course.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    const careerEntries = careers.map((career) => ({
        url: `${baseUrl}/careers/${career.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    const examEntries = examsData.map((exam) => ({
        url: `${baseUrl}/exams/${exam.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // Static Routing Tables
    const staticRoutes = [
        '',
        '/colleges',
        '/courses',
        '/careers',
        '/exams',
        '/scholarships',
        '/about',
        '/admissions'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.9,
    }));

    return [
        ...staticRoutes,
        ...collegeEntries,
        ...courseEntries,
        ...careerEntries,
        ...examEntries,
    ];
}
