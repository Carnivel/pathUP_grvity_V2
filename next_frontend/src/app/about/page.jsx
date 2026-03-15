import React from 'react';
import Link from 'next/link';
import PageTransition from '../../components/PageTransition';
import {
    Target, Users, BookOpen, GraduationCap, TrendingUp, Shield,
    Heart, Zap, Globe, Award, ChevronRight, Lightbulb, Compass,
    BarChart3, Sparkles, ArrowRight, Mail, MapPin, Phone
} from 'lucide-react';
import './About.css';

export const metadata = {
    title: 'About PathUp – Your Trusted Career & Education Guide',
    description: 'Learn about PathUp\'s mission to empower students with AI-driven career guidance, course comparisons, and college finder tools across India.',
};

const About = () => {
    const stats = [
        { value: '78+', label: 'Courses Listed', icon: <BookOpen size={24} /> },
        { value: '500+', label: 'Colleges Covered', icon: <GraduationCap size={24} /> },
        { value: '60+', label: 'Career Paths', icon: <Compass size={24} /> },
        { value: '10K+', label: 'Students Guided', icon: <Users size={24} /> },
    ];

    const values = [
        {
            icon: <Target size={32} />,
            title: 'Student-First Approach',
            description: 'Every feature we build is designed with students in mind — from career path exploration to finding the right college and course.',
            color: '#4F46E5'
        },
        {
            icon: <Lightbulb size={32} />,
            title: 'Data-Driven Guidance',
            description: 'We use real salary data, industry trends, and demand analysis to provide actionable insights — not guesswork.',
            color: '#06B6D4'
        },
        {
            icon: <Shield size={32} />,
            title: 'Trusted & Transparent',
            description: 'No hidden agendas. Our recommendations are based on merit, student fit, and verified data from official sources.',
            color: '#059669'
        },
        {
            icon: <Globe size={32} />,
            title: 'Accessible to All',
            description: 'Whether you\'re from a city or a village, PathUp is free and accessible. We believe every student deserves quality career guidance.',
            color: '#D97706'
        },
    ];

    const features = [
        {
            icon: <Compass size={28} />,
            title: 'Career Path Explorer',
            description: 'Discover 60+ career paths across Tech, Medical, Commerce, Arts, Law, and Design with salary insights and roadmaps.',
            link: '/careers'
        },
        {
            icon: <BookOpen size={28} />,
            title: 'Course Comparison',
            description: 'Compare 78+ courses side-by-side — fees, duration, top colleges, and career outcomes to make informed decisions.',
            link: '/courses'
        },
        {
            icon: <GraduationCap size={28} />,
            title: 'College Finder',
            description: 'Search and filter 500+ colleges across India by stream, state, city, fees, and ratings. Compare up to 6 at once.',
            link: '/colleges'
        },
        {
            icon: <BarChart3 size={28} />,
            title: 'Exam Tracker',
            description: 'Stay updated on entrance exams — dates, eligibility, fees, and registration details all in one place.',
            link: '/exams'
        },
    ];

    const timeline = [
        { year: '2024', title: 'The Idea', description: 'PathUp was born from a simple question — why is finding the right career path so hard for Indian students?' },
        { year: '2024', title: 'Research & Data', description: 'We spent months researching careers, courses, colleges, and salary data to build a reliable knowledge base.' },
        { year: '2025', title: 'Platform Launch', description: 'PathUp launched with career explorer, course comparison, and college finder — designed for every student in India.' },
        { year: '2025+', title: 'Growing Together', description: 'AI-powered recommendations, mentorship connections, and scholarship tracking are next on our roadmap.' },
    ];

    return (
        <PageTransition>
            <div className="about-page">
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="container">
                        <div className="about-hero-content">
                            <span className="badge"><Sparkles size={16} /> About Us</span>
                            <h1>Empowering Students to<br /><span className="text-gradient">Choose the Right Path</span></h1>
                            <p className="hero-subtitle">
                                PathUp is India's student-first career guidance platform — helping you explore careers,
                                compare courses, find the best colleges, and make confident decisions about your future.
                            </p>
                            <div className="hero-actions">
                                <Link href="/careers" className="btn-primary-about">
                                    Explore Careers <ArrowRight size={18} />
                                </Link>
                                <Link href="/colleges" className="btn-outline-about">
                                    Find Colleges <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="about-stats">
                    <div className="container">
                        <div className="stats-grid">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="stat-card">
                                    <div className="stat-icon">{stat.icon}</div>
                                    <h3 className="stat-value">{stat.value}</h3>
                                    <p className="stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="about-mission">
                    <div className="container">
                        <div className="mission-grid">
                            <div className="mission-text">
                                <span className="section-badge"><Heart size={16} /> Our Mission</span>
                                <h2>Making Career Guidance<br />Accessible & Actionable</h2>
                                <p>
                                    In India, millions of students struggle to choose the right career — not because they lack talent,
                                    but because they lack guidance. PathUp bridges this gap with real data, curated career paths,
                                    and tools that make complex decisions simple.
                                </p>
                                <p>
                                    We believe that every student — regardless of their background, location, or financial situation —
                                    deserves access to quality career guidance and educational resources.
                                </p>
                            </div>
                            <div className="mission-visual">
                                <div className="mission-card card-1">
                                    <Zap size={24} />
                                    <span>Smart Career Matching</span>
                                </div>
                                <div className="mission-card card-2">
                                    <TrendingUp size={24} />
                                    <span>Real Salary Insights</span>
                                </div>
                                <div className="mission-card card-3">
                                    <Award size={24} />
                                    <span>Verified College Data</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="about-values">
                    <div className="container">
                        <div className="section-header-center">
                            <span className="section-badge"><Shield size={16} /> Our Values</span>
                            <h2>What We Stand For</h2>
                            <p>The principles that guide every decision we make at PathUp.</p>
                        </div>
                        <div className="values-grid">
                            {values.map((value, idx) => (
                                <div key={idx} className="value-card" style={{ '--accent': value.color }}>
                                    <div className="value-icon" style={{ background: `${value.color}15`, color: value.color }}>
                                        {value.icon}
                                    </div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features / What We Offer Section */}
                <section className="about-features">
                    <div className="container">
                        <div className="section-header-center">
                            <span className="section-badge"><Compass size={16} /> What We Offer</span>
                            <h2>Tools Built for Students</h2>
                            <p>Everything you need to plan your academic and career journey — all in one place.</p>
                        </div>
                        <div className="features-grid">
                            {features.map((feature, idx) => (
                                <Link key={idx} href={feature.link} className="feature-card">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                    <span className="feature-link">
                                        Explore <ChevronRight size={16} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Journey / Timeline Section */}
                <section className="about-journey">
                    <div className="container">
                        <div className="section-header-center">
                            <span className="section-badge"><TrendingUp size={16} /> Our Journey</span>
                            <h2>How PathUp Came to Be</h2>
                            <p>From an idea to a platform used by thousands.</p>
                        </div>
                        <div className="journey-timeline">
                            {timeline.map((item, idx) => (
                                <div key={idx} className="journey-item">
                                    <div className="journey-marker">
                                        <span className="journey-year">{item.year}</span>
                                    </div>
                                    <div className="journey-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="about-cta">
                    <div className="container">
                        <div className="cta-card">
                            <div className="cta-content">
                                <h2>Ready to Find Your Path?</h2>
                                <p>Start exploring careers, courses, and colleges today. PathUp is completely free for students.</p>
                                <div className="cta-actions">
                                    <Link href="/careers" className="btn-primary-about">
                                        Explore Career Paths <ArrowRight size={18} />
                                    </Link>
                                    <Link href="/courses" className="btn-outline-about">
                                        Browse Courses <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Info Section */}
                <section className="about-contact">
                    <div className="container">
                        <div className="section-header-center">
                            <h2>Get in Touch</h2>
                            <p>Have questions or feedback? We'd love to hear from you.</p>
                        </div>
                        <div className="contact-grid">
                            <div className="contact-item">
                                <Mail size={24} />
                                <h4>Email Us</h4>
                                <p>support@pathup.in</p>
                            </div>
                            <div className="contact-item">
                                <MapPin size={24} />
                                <h4>Based In</h4>
                                <p>Kerala, India</p>
                            </div>
                            <div className="contact-item">
                                <Phone size={24} />
                                <h4>Call Us</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default About;
