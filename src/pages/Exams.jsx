import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Search, Calendar, Clock, Award, Users, FileText, ChevronRight, Filter, BookOpen } from 'lucide-react';
import './Exams.css';

import { examCategories, examsData as exams } from '../data/examsData';

const Exams = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredExams = exams.filter(exam => {
        const matchesCategory = activeCategory === 'all' || exam.category === activeCategory;
        const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            exam.conductedBy.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <PageTransition>
            <div className="exams-page">
                {/* Hero */}
                <section className="exams-hero">
                    <div className="container">
                        <div className="exams-hero-content">
                            <span className="badge"><BookOpen size={16} /> Entrance Exams</span>
                            <h1 className="text-gradient">Find Your Exam, Ace Your Future</h1>
                            <p className="subtitle">
                                Explore upcoming entrance exams, registration details, and eligibility criteria — all in one place.
                            </p>

                            <div className="exams-search-bar">
                                <Search className="icon" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search exams by name or conducting body..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="btn-primary">
                                    <Filter size={16} /> Search
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Category Tabs */}
                <section className="exams-tabs-section">
                    <div className="container">
                        <div className="exams-tab-bar">
                            {examCategories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`exam-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Exam Cards */}
                <section className="exams-results">
                    <div className="container">
                        <div className="exams-results-header">
                            <h3>Showing {filteredExams.length} Exams</h3>
                        </div>

                        <div className="exams-grid">
                            {filteredExams.map(exam => (
                                <div key={exam.id} className="exam-card" style={{ '--accent': exam.color }}>
                                    <div className="exam-card-top">
                                        <div className="exam-level-badge" style={{ background: `${exam.color}15`, color: exam.color }}>
                                            <Award size={14} /> {exam.level}
                                        </div>
                                        <span className="exam-mode">{exam.mode}</span>
                                    </div>

                                    <h3 className="exam-name">{exam.name}</h3>
                                    <p className="exam-body">{exam.conductedBy}</p>

                                    <div className="exam-details-grid">
                                        <div className="exam-detail">
                                            <Calendar size={16} />
                                            <div>
                                                <span className="detail-label">Exam Date</span>
                                                <strong>{exam.date}</strong>
                                            </div>
                                        </div>
                                        <div className="exam-detail">
                                            <Users size={16} />
                                            <div>
                                                <span className="detail-label">Registrations</span>
                                                <strong>{exam.registrations}</strong>
                                            </div>
                                        </div>
                                        <div className="exam-detail">
                                            <FileText size={16} />
                                            <div>
                                                <span className="detail-label">Eligibility</span>
                                                <strong>{exam.eligibility}</strong>
                                            </div>
                                        </div>
                                        <div className="exam-detail">
                                            <Clock size={16} />
                                            <div>
                                                <span className="detail-label">Fee Range</span>
                                                <strong>{exam.fees}</strong>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="exam-card-actions">
                                        <button className="btn-primary" style={{ background: exam.color }}>Register Now</button>
                                        <Link to={`/exams/${exam.id}`} className="btn-outline" style={{ color: exam.color, borderColor: exam.color, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                            Details <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Exams;
