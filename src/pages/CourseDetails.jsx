import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { ArrowLeft, BookOpen, Clock, DollarSign, GraduationCap, MapPin, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';
import { courses } from '../data/coursesData';
import './CourseDetails.css';

const CourseDetails = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        // Find course by ID (param is string, so convert to Number)
        window.scrollTo(0, 0);
        const foundCourse = courses.find((c) => c.id === parseInt(courseId));
        if (foundCourse) {
            setCourse(foundCourse);
        } else {
            // Redirect back to courses if not found
            navigate('/courses');
        }
    }, [courseId, navigate]);

    if (!course) return null;

    return (
        <PageTransition>
            <div className="course-details-page">
                {/* Header Banner */}
                <div className="course-header" style={{ '--course-color': course.color }}>
                    <div className="container">
                        <button className="back-btn" onClick={() => navigate('/courses')}>
                            <ArrowLeft size={20} /> Back to Courses
                        </button>

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
                            <Link to="/colleges" className="btn-primary full-width" style={{ background: course.color }}>
                                Explore Colleges <ChevronRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default CourseDetails;
