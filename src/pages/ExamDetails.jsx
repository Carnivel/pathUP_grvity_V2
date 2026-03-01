import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, FileText, Users, Award, Clock, BookOpen, AlertCircle, CheckCircle } from 'lucide-react';
import { examsData } from '../data/examsData';
import PageTransition from '../components/PageTransition';
import './ExamDetails.css';

const ExamDetails = () => {
    const { id } = useParams();
    const [exam, setExam] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundExam = examsData.find(e => e.id === parseInt(id));
        setExam(foundExam);
    }, [id]);

    if (!exam) {
        return (
            <div className="exam-not-found">
                <h2>Exam Not Found</h2>
                <Link to="/exams" className="btn-primary">Browse All Exams</Link>
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="exam-details-page premium-template">
                {/* Premium Dark Hero Section */}
                <section className="exam-hero premium-hero" style={{ '--exam-color': exam.color }}>
                    <div className="container">
                        <Link to="/exams" className="back-link premium-back">
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
                                    {exam.importantDates.map((item, index) => (
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
                                    {exam.syllabus.map((topic, index) => (
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
    );
};

export default ExamDetails;
