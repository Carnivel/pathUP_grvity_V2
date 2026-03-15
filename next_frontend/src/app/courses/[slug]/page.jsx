import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageTransition from '../../../components/PageTransition';
import { ArrowLeft, BookOpen, Clock, DollarSign, GraduationCap, MapPin, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';
import { courses } from '../../../data/coursesData';
import { getStatesByCourse, getRelatedCourses } from '../../../lib/courseApi';
import './CourseDetails.css';

// ISR Validation - Revalidate every 1 hour
export const revalidate = 3600;

// Enable strict 404 for missing paths or allow dynamic fallback
export const dynamicParams = true;

// Pre-build dynamic routes for Static Site Generation (SSG)
export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.id.toString(),
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
        throw new Error("NEXT_PUBLIC_SITE_URL is required but undefined");
    }
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const course = courses.find((c) => c.id.toString() === slug);

    if (!course) {
        return { title: 'Course Not Found' };
    }

    return {
        title: `${course.name} - Degree & Curriculum`,
        description: course.about?.substring(0, 160) || 'Discover top courses, durations, and career prospects.',
        alternates: {
            canonical: `${baseUrl}/courses/${slug}`,
        },
        openGraph: {
            title: course.name,
            description: course.about?.substring(0, 160),
            url: `${baseUrl}/courses/${slug}`,
            type: 'article',
        }
    };
}

const CourseDetails = async ({ params }) => {
    const { slug } = await params;
    const course = courses.find((c) => c.id.toString() === slug);

    // Strict 404 handling utilizing next/navigation
    if (!course) {
        notFound();
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!siteUrl) {
        throw new Error("NEXT_PUBLIC_SITE_URL is strictly required to generate absolute JSON-LD URLs.");
    }

    // JSON-LD Schema explicitly requested for rich results
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: course.name,
        description: course.about,
        provider: {
            '@type': 'Organization',
            name: 'PathUp',
            sameAs: siteUrl,
        },
        url: `${siteUrl}/courses/${slug}`,
        timeRequired: course.duration,
        hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'full-time',
        }
    };

    const availableStates = await getStatesByCourse(slug);
    // Use the course stream or a default if missing
    const relatedCourses = await getRelatedCourses(course.stream || 'engineering');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PageTransition>
                <div className="course-details-page">
                    {/* Header Banner */}
                    <div className="course-header" style={{ '--course-color': course.color }}>
                        <div className="container">
                            <Link href="/courses" className="back-btn" style={{ textDecoration: 'none' }}>
                                <ArrowLeft size={20} /> Back to Courses
                            </Link>

                            <div className="header-content">
                                <div className="header-icon-wrap" style={{ color: course.color }}>
                                    <GraduationCap size={40} />
                                </div>
                                <div className="header-text">
                                    <span className="degree-type">{course.degree}</span>
                                    <h1>{course.name}</h1>

                                    <div className="header-meta">
                                        <div className="meta-item">
                                            <Clock size={16} /> {course.duration}
                                        </div>
                                        <div className="meta-item">
                                            <DollarSign size={16} /> {course.avgFees}
                                        </div>
                                        <div className="meta-item">
                                            <MapPin size={16} /> {course.topColleges}+ Top Colleges
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="container details-container">
                        <div className="details-main">
                            {/* About Section */}
                            <section className="detail-section">
                                <h2>About the Course</h2>
                                <p className="about-text">{course.about}</p>
                            </section>

                            {/* Eligibility Section */}
                            <section className="detail-section">
                                <h2>Eligibility Criteria</h2>
                                <ul className="eligibility-list">
                                    {course.eligibility.map((criteria, index) => (
                                        <li key={index}>
                                            <CheckCircle2 color={course.color} size={20} />
                                            <span>{criteria}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Roadmap Section */}
                            <section className="detail-section roadmap-section">
                                <h2>Academic Roadmap (A to Z)</h2>
                                <div className="roadmap-timeline">
                                    {course.roadmap.map((step, index) => (
                                        <div key={index} className="timeline-item" style={{ '--course-color': course.color }}>
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <span className="timeline-year">{step.year}</span>
                                                <h3>{step.title}</h3>
                                                <p>{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Available in States Section */}
                            {availableStates && availableStates.length > 0 && (
                                <section className="detail-section">
                                    <h2>Available in States</h2>
                                    <p>Explore top colleges offering {course.name} in these states:</p>
                                    <div className="states-grid">
                                        {availableStates.map(state => (
                                            <Link key={state.slug} href={`/courses/${slug}/${state.slug}`} className="state-card" style={{ '--course-color': course.color }}>
                                                <MapPin size={20} color={course.color} />
                                                <span>{state.name}</span>
                                                <ChevronRight size={16} />
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* Sidebar container */}
                        <div className="details-sidebar">
                            <div className="career-card" style={{ borderColor: course.color }}>
                                <div className="career-header">
                                    <Briefcase size={24} color={course.color} />
                                    <h3>Top Career Roles</h3>
                                </div>
                                <div className="career-list">
                                    {course.careers.map((career, index) => (
                                        <div key={index} className="career-item">
                                            <h4>{career.role}</h4>
                                            <div className="career-stats">
                                                <span className="salary">{career.salary}</span>
                                                <span className={`demand badge-${career.demand.toLowerCase().replace(' ', '-')}`}>
                                                    {career.demand} Demand
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="action-card">
                                <h3>Ready to get started?</h3>
                                <p>Find the best colleges offering this course and apply today.</p>
                                <Link href="/colleges" className="btn-primary full-width" style={{ background: course.color, display: 'flex', textDecoration: 'none' }}>
                                    Explore Colleges <ChevronRight size={18} />
                                </Link>
                            </div>

                            {/* Explore Other Courses */}
                            {relatedCourses && relatedCourses.length > 0 && (
                                <div className="related-courses-card">
                                    <h3>Explore Other Courses</h3>
                                    <div className="related-list">
                                        {relatedCourses.filter(rc => rc.id.toString() !== slug).slice(0, 4).map(rc => (
                                            <Link key={rc.id} href={`/courses/${rc.id}`} className="related-item">
                                                <span className="related-name">{rc.name}</span>
                                                <ChevronRight size={14} />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </PageTransition>
        </>
    );
};

export default CourseDetails;
