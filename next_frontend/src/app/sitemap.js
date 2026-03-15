import { getColleges } from '../lib/api';
import { courses } from '../data/coursesData';
import { careers } from '../data/careersData';
import { examsData } from '../data/examsData';

export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_SITE_URL is required to dynamically generate a valid sitemap.xml");
    }

    // Fetch dynamic real college slugs
    const response = await getColleges();
    if (!response || !response.results) throw new Error("Invalid API response format");
    const colleges = response.results;
    if (colleges.length === 0) throw new Error("API returned empty records");

    const collegeSlugs = colleges.map(c => {
        if (!c.slug) throw new Error(`Missing slug for college in sitemap generation (ID: ${c.id})`);
        return c.slug;
    });

    // Map Dynamic DB Collections
    const collegeEntries = collegeSlugs.map((slug) => ({
        url: `${baseUrl}/colleges/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

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
