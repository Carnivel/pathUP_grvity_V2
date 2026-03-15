"use client";
import React, { useState } from 'react';
import PageTransition from '../../components/PageTransition';
import { Award, Calendar, DollarSign, Users, Filter, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';
import './Scholarships.css';

const categories = [
    { id: 'all', label: 'All Scholarships' },
    { id: 'merit', label: 'Merit-Based' },
    { id: 'need', label: 'Need-Based' },
    { id: 'government', label: 'Government' },
    { id: 'private', label: 'Private' },
];

const scholarships = [
    {
        id: 1, name: 'INSPIRE Scholarship', provider: 'Dept. of Science & Technology, Govt. of India',
        amount: '₹80,000/year', deadline: 'October 2026', eligibility: 'Top 1% in Class 12 Board Exam',
        category: 'government', beneficiaries: '10,000+', color: '#4F46E5',
        description: 'Innovation in Science Pursuit for Inspired Research — for students pursuing B.Sc, M.Sc, or integrated courses in natural and basic sciences.',
    },
    {
        id: 2, name: 'Central Sector Scheme', provider: 'Ministry of Education, Govt. of India',
        amount: '₹20,000 - 30,000/year', deadline: 'November 2026', eligibility: 'Top 20th percentile, family income < ₹8 LPA',
        category: 'government', beneficiaries: '82,000+', color: '#06B6D4',
        description: 'Available for graduates pursuing regular courses at NAAC accredited institutions. Covers tuition and living expenses.',
    },
    {
        id: 3, name: 'Kishore Vaigyanik Protsahan Yojana', provider: 'Indian Institute of Science (IISc)',
        amount: '₹5,000 - 7,000/month', deadline: 'August 2026', eligibility: 'Students in Class 11 to 1st year B.Sc',
        category: 'merit', beneficiaries: '2,000+', color: '#059669',
        description: 'Encourages students to pursue research careers in science with a generous monthly fellowship and contingency grant.',
    },
    {
        id: 4, name: 'Reliance Foundation Scholarship', provider: 'Reliance Foundation',
        amount: 'Up to ₹4,00,000/year', deadline: 'September 2026', eligibility: 'UG students in STEM, Arts, or Humanities',
        category: 'private', beneficiaries: '5,000+', color: '#F43F5E',
        description: 'Multi-disciplinary scholarship for meritorious undergraduate students from economically weaker backgrounds.',
    },
    {
        id: 5, name: 'Tata Trusts Scholarship', provider: 'Tata Trusts',
        amount: 'Up to ₹1,50,000/year', deadline: 'December 2026', eligibility: 'Professional degree students, family income < ₹6 LPA',
        category: 'need', beneficiaries: '3,500+', color: '#D97706',
        description: 'Need-based scholarship for students pursuing medicine, engineering, law, and other professional programs.',
    },
    {
        id: 6, name: 'Aditya Birla Scholarship', provider: 'Aditya Birla Group',
        amount: 'Up to ₹1,80,000/year', deadline: 'August 2026', eligibility: 'Students admitted to IITs, IIMs, BITS, XLRI, Law Schools',
        category: 'merit', beneficiaries: '50', color: '#8B5CF6',
        description: 'Prestigious merit scholarship for top-performing students admitted to premier institutions in India.',
    },
    {
        id: 7, name: 'Post-Matric Scholarship (SC/ST)', provider: 'Ministry of Social Justice',
        amount: 'Full tuition + maintenance', deadline: 'January 2027', eligibility: 'SC/ST students, family income < ₹2.5 LPA',
        category: 'government', beneficiaries: '50L+', color: '#4F46E5',
        description: 'Government scheme covering full tuition fees and a maintenance allowance for SC/ST students in post-matric education.',
    },
    {
        id: 8, name: 'Narotam Sekhsaria Scholarship', provider: 'Narotam Sekhsaria Foundation',
        amount: 'Up to ₹20,00,000', deadline: 'March 2027', eligibility: 'Indian students admitted to top global universities',
        category: 'private', beneficiaries: '100+', color: '#F43F5E',
        description: 'Interest-free loan scholarship for Indian students pursuing higher education abroad at top-ranked universities.',
    },
];

const Scholarships = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filtered = activeCategory === 'all'
        ? scholarships
        : scholarships.filter(s => s.category === activeCategory);

    return (
        <PageTransition>
            <div className="scholarships-page">
                {/* Hero */}
                <section className="scholarships-hero">
                    <div className="container">
                        <div className="scholarships-hero-content">
                            <span className="badge"><Sparkles size={16} /> Scholarships</span>
                            <h1 className="text-gradient">Fund Your Dreams, Not Your Debt</h1>
                            <p className="subtitle">
                                Discover scholarships from government bodies and private organizations to support your education journey.
                            </p>
                        </div>

                        <div className="scholarship-quick-stats">
                            <div className="quick-stat">
                                <Award size={22} color="var(--color-primary)" />
                                <div><strong>200+</strong><span>Scholarships</span></div>
                            </div>
                            <div className="quick-stat">
                                <DollarSign size={22} color="var(--color-secondary)" />
                                <div><strong>₹500 Cr+</strong><span>Total Value</span></div>
                            </div>
                            <div className="quick-stat">
                                <Users size={22} color="var(--color-accent)" />
                                <div><strong>10L+</strong><span>Beneficiaries</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Category Tabs */}
                <section className="scholarship-tabs-section">
                    <div className="container">
                        <div className="scholarship-tab-bar">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`scholarship-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cards */}
                <section className="scholarship-results">
                    <div className="container">
                        <div className="scholarship-results-header">
                            <h3>Showing {filtered.length} Scholarships</h3>
                        </div>

                        <div className="scholarship-grid">
                            {filtered.map(s => (
                                <div key={s.id} className="scholarship-card" style={{ '--accent': s.color }}>
                                    <div className="scholarship-card-top">
                                        <div className="sch-provider-badge" style={{ background: `${s.color}12`, color: s.color }}>
                                            {s.category === 'government' ? '🏛️ Government' :
                                                s.category === 'merit' ? '🏆 Merit-Based' :
                                                    s.category === 'need' ? '🤝 Need-Based' : '🏢 Private'}
                                        </div>
                                        <span className="sch-beneficiaries">
                                            <Users size={13} /> {s.beneficiaries}
                                        </span>
                                    </div>

                                    <h3>{s.name}</h3>
                                    <p className="sch-provider">{s.provider}</p>
                                    <p className="sch-desc">{s.description}</p>

                                    <div className="sch-details">
                                        <div className="sch-detail-item">
                                            <DollarSign size={15} />
                                            <div>
                                                <span className="sch-detail-label">Amount</span>
                                                <strong>{s.amount}</strong>
                                            </div>
                                        </div>
                                        <div className="sch-detail-item">
                                            <Calendar size={15} />
                                            <div>
                                                <span className="sch-detail-label">Deadline</span>
                                                <strong>{s.deadline}</strong>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sch-eligibility">
                                        <span className="sch-elig-label">Eligibility</span>
                                        <p>{s.eligibility}</p>
                                    </div>

                                    <div className="sch-card-actions">
                                        <button className="btn-primary" style={{ background: s.color }}>
                                            Apply Now <ExternalLink size={14} />
                                        </button>
                                        <button className="btn-outline" style={{ color: s.color, borderColor: s.color }}>
                                            Details <ChevronRight size={14} />
                                        </button>
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

export default Scholarships;
