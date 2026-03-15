import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, FileText, Users, Award, Clock, BookOpen, AlertCircle, CheckCircle } from 'lucide-react';
import { examsData } from '../../../data/examsData';
import PageTransition from '../../../components/PageTransition';
import './ExamDetails.css';

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
    return examsData.map((exam) => ({
        slug: exam.id.toString(),
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
        throw new Error("NEXT_PUBLIC_SITE_URL is required but undefined");
    }
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const exam = examsData.find(e => e.id.toString() === slug);

    if (!exam) return { title: 'Exam Not Found' };

    return {
        title: `${exam.name} - Registration & Dates`,
        description: exam.about?.substring(0, 160) || 'Find complete details, syllabus and dates for this exam.',
        alternates: {
            canonical: `${baseUrl}/exams/${slug}`,
        },
        openGraph: {
            title: exam.name,
            description: exam.about?.substring(0, 160),
            url: `${baseUrl}/exams/${slug}`,
        }
    };
}

const ExamDetails = async ({ params }) => {
    const { slug } = await params;
    const exam = examsData.find(e => e.id.toString() === slug);

    if (!exam) {
        notFound();
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!siteUrl) {
        throw new Error("NEXT_PUBLIC_SITE_URL is strictly required to generate absolute JSON-LD URLs.");
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: exam.name,
        description: exam.about,
        startDate: exam.date, // In production, ensure ISO 8601 formatting
        organizer: {
            '@type': 'Organization',
            name: exam.conductedBy,
        },
        url: `${siteUrl}/exams/${slug}`
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PageTransition>
                <div className="exam-details-page premium-template">
                    {/* Premium Dark Hero Section */}
                    <section className="exam-hero premium-hero" style={{ '--exam-color': exam.color }}>
                        <div className="container">
                            <Link href="/exams" className="back-link premium-back" style={{ textDecoration: 'none' }}>
                                <ArrowLeft size={16} /> Back to Exams
                            </Link>

                            <div className="exam-hero-content">
                                <div className="exam-badges">
                                    <span className="category-badge glass-badge">{exam.category.toUpperCase()}</span>
                                    <span className="level-badge solid-badge"><Award size={14} /> {exam.level}</span>
                                </div>

                                <h1 className="exam-title text-glow">{exam.name}</h1>
                                <p className="exam-conducted-by">Conducted by: <span className="highlight-text">{exam.conductedBy}</span></p>

                                <div className="exam-quick-stats glass-stats">
                                    <div className="stat-item glass-item">
                                        <div className="icon-wrapper" style={{ color: exam.color }}>
                                            <Calendar size={22} />
                                        </div>
                                        <div>
                                            <span>Exam Date</span>
                                            <strong>{exam.date}</strong>
                                        </div>
                                    </div>
                                    <div className="stat-item glass-item">
                                        <div className="icon-wrapper" style={{ color: exam.color }}>
                                            <FileText size={22} />
                                        </div>
                                        <div>
                                            <span>Mode</span>
                                            <strong>{exam.mode}</strong>
                                        </div>
                                    </div>
                                    <div className="stat-item glass-item">
                                        <div className="icon-wrapper" style={{ color: exam.color }}>
                                            <Users size={22} />
                                        </div>
                                        <div>
                                            <span>Registrations</span>
                                            <strong>{exam.registrations}</strong>
                                        </div>
                                    </div>
                                    <div className="stat-item glass-item">
                                        <div className="icon-wrapper" style={{ color: exam.color }}>
                                            <Clock size={22} />
                                        </div>
                                        <div>
                                            <span>Application Fee</span>
                                            <strong>{exam.fees}</strong>
                                        </div>
                                    </div>
                                </div>

                                <div className="exam-hero-actions">
                                    <button className="btn-primary glow-btn" style={{ background: exam.color, boxShadow: `0 8px 25px ${exam.color}50` }}>Register Now</button>
                                    <button className="btn-outline glass-btn">Download Brochure</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
                        <div className="exam-details-layout premium-layout">
                            {/* Main Content */}
                            <div className="exam-main-content">
                                <section className="detail-card premium-card">
                                    <div className="card-header">
                                        <div className="header-icon" style={{ background: `${exam.color}15`, color: exam.color }}>
                                            <AlertCircle size={24} />
                                        </div>
                                        <h2>About {exam.name}</h2>
                                    </div>
                                    <p className="about-text">{exam.about}</p>
                                </section>

                                <section className="detail-card premium-card">
                                    <div className="card-header">
                                        <div className="header-icon" style={{ background: `${exam.color}15`, color: exam.color }}>
                                            <Calendar size={24} />
                                        </div>
                                        <h2>Important Dates</h2>
                                    </div>
                                    <div className="premium-dates-grid">
                                        {exam.importantDates?.map((item, index) => (
                                            <div key={index} className="date-box" style={{ '--border-hover': exam.color }}>
                                                <div className="date-icon">
                                                    <Calendar size={20} color={exam.color} />
                                                </div>
                                                <div className="date-info">
                                                    <span className="date-label">{item.event}</span>
                                                    <span className="date-value">{item.date}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="detail-card premium-card">
                                    <div className="card-header">
                                        <div className="header-icon" style={{ background: `${exam.color}15`, color: exam.color }}>
                                            <BookOpen size={24} />
                                        </div>
                                        <h2>Syllabus & Structure</h2>
                                    </div>
                                    <div className="premium-syllabus-list">
                                        {exam.syllabus?.map((topic, index) => (
                                            <div key={index} className="syllabus-row">
                                                <div className="syllabus-check" style={{ color: exam.color }}>
                                                    <CheckCircle size={22} />
                                                </div>
                                                <p>{topic}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Sidebar */}
                            <div className="exam-sidebar premium-sidebar">
                                <div className="sidebar-widget eligibility-widget" style={{ borderColor: `${exam.color}30` }}>
                                    <div className="widget-bg-icon">
                                        <Users size={120} color={exam.color} />
                                    </div>
                                    <h3>Eligibility Criteria</h3>
                                    <div className="eligibility-box">
                                        <span className="req-label">Minimum Requirement:</span>
                                        <span className="req-value">{exam.eligibility}</span>
                                    </div>
                                    <div className="info-alert" style={{ background: `${exam.color}10`, borderLeftColor: exam.color }}>
                                        <AlertCircle size={18} color={exam.color} style={{ minWidth: '18px' }} />
                                        <p>Please check the official website for detailed and reserved category eligibility.</p>
                                    </div>
                                </div>

                                <div className="sidebar-widget help-widget" style={{ background: `linear-gradient(135deg, ${exam.color}, #1E3A8A)` }}>
                                    <div className="help-content">
                                        <h3>Need Guidance?</h3>
                                        <p>Get personalized tips, mock test strategies, and expert counseling for {exam.name}.</p>
                                        <button className="btn-light">Talk to an Expert</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageTransition>
        </>
    );
};

export default ExamDetails;
