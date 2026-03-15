import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageTransition from '../../../../components/PageTransition';
import { ArrowLeft, MapPin, Building, GraduationCap, ChevronRight, Briefcase } from 'lucide-react';
import { getCollegesByCourseAndState, getTopCourseStateCombinations, getRelatedCourses, getStatesByCourse } from '../../../../lib/courseApi';
import { courses } from '../../../../data/coursesData';
import './CourseState.css';

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
    const combinations = await getTopCourseStateCombinations();
    return combinations.map((combo) => ({
        slug: combo.course.toString(),
        state: combo.state.toString(),
    }));
}

export async function generateMetadata({ params }) {
    const { slug, state } = await params;

    const course = courses.find((c) => c.id.toString() === slug);
    if (!course) return { title: 'Not Found' };

    const formattedState = state.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    const title = `Top Colleges for ${course.name} in ${formattedState} | Rankings & Fees`;
    const description = `Discover the best colleges offering ${course.name} in ${formattedState}. Compare fees, placement records, and the admission process.`;

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    return {
        title,
        description,
        alternates: {
            canonical: `${siteUrl}/courses/${slug}/${state}`,
        },
        openGraph: {
            title,
            description,
            url: `${siteUrl}/courses/${slug}/${state}`,
            type: 'website',
        }
    };
}

export default async function CourseStatePage({ params, searchParams }) {
    const { slug, state } = await params;
    const { page } = await searchParams || {};

    const course = courses.find((c) => c.id.toString() === slug);
    if (!course) {
        notFound();
    }

    const formattedState = state.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const queryParams = new URLSearchParams();
    if (page) queryParams.set('page', page);

    const collegesData = await getCollegesByCourseAndState(slug, state, queryParams.toString());
    const collegesList = collegesData.results || [];

    // Internal linking fetches
    const relatedCourses = await getRelatedCourses(course.stream || 'engineering');
    const availableStates = await getStatesByCourse(slug);

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `Top Colleges for ${course.name} in ${formattedState}`,
        itemListElement: collegesList.map((college, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            url: `${siteUrl}/colleges/${college.slug || college.id}`,
            name: college.name || `College ${college.id}`
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PageTransition>
                <div className="course-state-page">
                    <div className="course-state-header" style={{ '--course-color': course.color }}>
                        <div className="container">
                            <Link href={`/courses/${slug}`} className="back-btn" style={{ textDecoration: 'none' }}>
                                <ArrowLeft size={20} /> Back to {course.name}
                            </Link>

                            <div className="header-content">
                                <h1>Top Colleges for {course.name} in {formattedState}</h1>
                                <p>Compare <strong>{collegesData.count || collegesList.length}</strong> top-ranked colleges in {formattedState} based on 2024 Ranking, Fees, and Placements.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container cs-container">
                        <div className="cs-main">
                            {/* Colleges List */}
                            <div className="colleges-feed">
                                {collegesList.length === 0 ? (
                                    <div className="empty-state">
                                        <h3>No Colleges Found</h3>
                                        <p>We couldn't find any verified colleges offering {course.name} in {formattedState} at the moment.</p>
                                    </div>
                                ) : (
                                    collegesList.map((college) => (
                                        <div key={college.id} className="cs-college-card">
                                            <div className="cs-card-header">
                                                <div className="cs-logo-placeholder">
                                                    <Building size={24} color="#94a3b8" />
                                                </div>
                                                <div className="cs-card-title">
                                                    <h2>{college.name || `University of ${formattedState}`}</h2>
                                                    <span className="cs-location"><MapPin size={14} /> {college.city || formattedState}</span>
                                                </div>
                                            </div>
                                            <div className="cs-card-metrics">
                                                <div className="metric">
                                                    <span className="m-label">First Year Fee</span>
                                                    <span className="m-val">{college.firstYearFee || '₹1,20,000'}</span>
                                                </div>
                                                <div className="metric">
                                                    <span className="m-label">Avg Package</span>
                                                    <span className="m-val">{college.avgPackage || '₹6.5 LPA'}</span>
                                                </div>
                                            </div>
                                            <div className="cs-card-actions">
                                                <Link href={`/colleges/${college.slug || college.id}`} className="cs-btn cs-btn-view">
                                                    View Details
                                                </Link>
                                                <button className="cs-btn cs-btn-apply" style={{ background: course.color, color: 'white' }}>
                                                    Apply Now
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}

                                {/* Pagination Controls logic would go here */}
                            </div>
                        </div>

                        <div className="cs-sidebar">
                            <div className="cs-sidebar-card">
                                <h3>Other States for {course.name}</h3>
                                <div className="cs-links-list">
                                    {availableStates.filter(s => s.slug !== state).slice(0, 5).map(s => (
                                        <Link key={s.slug} href={`/courses/${slug}/${s.slug}`}>
                                            📍 Top Colleges in {s.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="cs-sidebar-card">
                                <h3>Related Courses in {formattedState}</h3>
                                <div className="cs-links-list">
                                    {relatedCourses.filter(rc => rc.id.toString() !== slug).slice(0, 5).map(rc => (
                                        <Link key={rc.id} href={`/courses/${rc.id}/${state}`}>
                                            🎓 Top Colleges for {rc.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageTransition>
        </>
    );
}
