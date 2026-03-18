import { notFound } from 'next/navigation';
import { getColleges, getCollegeBySlug } from '../../../lib/api';
import CollegeDetailClient from './CollegeDetailClient';
import PageTransition from '../../../components/PageTransition';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
    const { slug } = await params;

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
        throw new Error("NEXT_PUBLIC_SITE_URL is required but undefined");
    }
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const college = await getCollegeBySlug(slug);

    if (!college) return { title: 'College Not Found' };

    return {
        title: `${college.name} - Admission, Fees & Courses`,
        description: college.description?.substring(0, 160) || `Learn more about ${college.name} admission process and courses.`,
        alternates: { canonical: `${baseUrl}/colleges/${slug}` },
        openGraph: {
            title: college.name,
            description: college.description?.substring(0, 160),
            url: `${baseUrl}/colleges/${slug}`,
        }
    };
}

const CollegeDetails = async ({ params }) => {
    const { slug } = await params;

    const college = await getCollegeBySlug(slug);

    if (!college) {
        notFound();
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!siteUrl) {
        throw new Error("NEXT_PUBLIC_SITE_URL is strictly required to generate absolute JSON-LD URLs.");
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollegeOrUniversity',
        name: college.name,
        description: college.description,
        address: {
            '@type': 'PostalAddress',
            addressLocality: college.city || 'Unknown',
            addressRegion: college.state || 'Unknown',
            addressCountry: 'IN'
        },
        url: `${siteUrl}/colleges/${slug}`
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <PageTransition>
                <CollegeDetailClient college={college} />
            </PageTransition>
        </>
    );
};

export default CollegeDetails;
