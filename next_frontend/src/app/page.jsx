"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PageTransition from '../components/PageTransition';
import { Search, MapPin, Star, TrendingUp, ArrowRight, Sparkles, Settings, HeartPulse, Briefcase, Scale, Palette, Monitor, BookOpen, Landmark, Calendar, Bell, ChevronRight, Users, Award } from 'lucide-react';
import './Home.css';

const Home = () => {
    const router = useRouter();
    const streams = [
        { id: 'engineering', label: 'Engineering', count: '3,200+ Colleges', icon: Settings },
        { id: 'medical', label: 'Medical / MBBS', count: '680+ Colleges', icon: HeartPulse },
        { id: 'management', label: 'MBA / Management', count: '1,800+ Colleges', icon: Briefcase },
        { id: 'law', label: 'Law', count: '1,100+ Colleges', icon: Scale },
        { id: 'design', label: 'Design & Arts', count: '540+ Colleges', icon: Palette },
        { id: 'computer', label: 'Computer Science', count: '2,400+ Colleges', icon: Monitor },
        { id: 'arts', label: 'Arts & Humanities', count: '2,900+ Colleges', icon: BookOpen },
        { id: 'commerce', label: 'Commerce & Finance', count: '2,100+ Colleges', icon: Landmark }
    ];

    const handleStreamClick = (streamId) => {
        router.push(`/colleges?stream=${streamId}`);
    };

    const articles = [
        {
            id: 1,
            type: 'Exam Update',
            title: 'JEE Main 2026 Registration Dates Announced Officially',
            date: 'Oct 15, 2025',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
            description: 'The National Testing Agency has released the official schedule for upcoming engineering entrance exams.'
        },
        {
            id: 2,
            type: 'Career Guide',
            title: 'Why Artificial Intelligence is the Most Sought-After Course',
            date: 'Oct 12, 2025',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
            description: 'A deep dive into the rising demand for AI and Data Science professionals globally and top colleges offering it.'
        }
    ];

    const notifications = [
        { id: 1, text: "CUET UG 2026 Application forms are now available online", date: "2 hours ago", isNew: true },
        { id: 2, text: "Top 10 Medical Colleges ranking updated for 2026 admissions", date: "1 day ago", isNew: false },
        { id: 3, text: "CAT 2025 Admit Card available for download from official site", date: "2 days ago", isNew: false },
        { id: 4, text: "State Government Scholarship deadlines extended for merit students", date: "3 days ago", isNew: false },
    ];

    return (
        <PageTransition>
            <div className="home-page">
                {/* Hero Section */}
                <section className="hero">
                    {/* Animated Background Shapes */}
                    <div className="bg-shape shape-1"></div>
                    <div className="bg-shape shape-2"></div>
                    <div className="bg-shape shape-3"></div>

                    <div className="container hero-container">
                        <div className="hero-content">
                            <div className="hero-tagline-highlight">
                                <Sparkles size={16} className="tagline-icon" />
                                <span>Kerala's Smartest College Discovery Platform</span>
                            </div>
                            <h1 className="hero-title">
                                Choose the Right Course. <br />
                                <span className="text-gradient">Choose the Right Future</span>
                            </h1>
                            <p className="hero-description">
                                Discover top-ranked colleges, compare courses, and get personalized admission guidance seamlessly.
                            </p>

                            <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
                                <Search className="search-icon" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search for colleges, exams, or courses..."
                                    className="search-input"
                                />
                                <button type="submit" className="btn-primary search-btn">Search</button>
                            </form>

                            <div className="hero-quick-actions">
                                <Link href="/colleges" className="btn-elegant-link">
                                    <Sparkles size={18} className="sparkle-icon" />
                                    <span>Explore Advanced College Finder</span>
                                    <ArrowRight size={18} className="arrow-icon" />
                                </Link>
                                <button className="btn-elegant-link secondary-elegant">
                                    <Calendar size={18} className="calendar-icon" />
                                    <span>Book a Free Session</span>
                                </button>
                            </div>

                            <div className="hero-stats">
                                <div className="stat">
                                    <h3>10,000+</h3>
                                    <p>Colleges</p>
                                </div>
                                <div className="stat">
                                    <h3>500+</h3>
                                    <p>Exams</p>
                                </div>
                                <div className="stat">
                                    <h3>1000+</h3>
                                    <p>Students</p>
                                </div>
                            </div>
                        </div>

                        <div className="hero-image-wrapper">
                            <div className="hero-shape"></div>
                            {/* Replace with actual image later, using a styled div as placeholder for elegant look */}
                            <div className="hero-glass-card top-card">
                                <div className="card-icon"><TrendingUp size={24} color="var(--color-secondary)" /></div>
                                <div>
                                    <strong>Smarter College Decisions</strong>
                                    <span>Top tier institutions</span>
                                </div>
                            </div>
                            <div className="hero-glass-card bottom-card">
                                <div className="card-icon"><Star size={24} color="var(--color-primary)" /></div>
                                <div>
                                    <strong>Student Reviews</strong>
                                    <span>Read real experiences</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ambassador CTA Banner */}
                <section className="ambassador-banner">
                    <div className="container">
                        <div className="ambassador-banner-card">
                            <div className="amb-banner-glow"></div>
                            <div className="amb-banner-content">
                                <div className="amb-banner-icon">
                                    <Users size={32} />
                                </div>
                                <div className="amb-banner-text">
                                    <h3>Become a PathUp <span className="text-gradient">School Ambassador</span></h3>
                                    <p>Help your schoolmates discover the right college & career path — earn referral rewards, gain leadership experience, and get officially certified.</p>
                                </div>
                                <Link href="/ambassador" className="amb-banner-btn">
                                    <Award size={18} /> Apply Now <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Browse by Stream Section */}
                <section className="browse-streams">
                    <div className="container">
                        <div className="section-header">
                            <div>
                                <span className="section-subtitle">EXPLORE BY FIELD</span>
                                <h2>Browse by Stream</h2>
                            </div>
                            <Link href="/colleges" className="btn-link">View All Streams <ArrowRight size={16} /></Link>
                        </div>

                        <div className="stream-grid">
                            {streams.map((stream) => (
                                <div
                                    key={stream.id}
                                    className="stream-card"
                                    onClick={() => handleStreamClick(stream.id)}
                                >
                                    <div className="stream-icon-wrapper">
                                        <stream.icon size={36} strokeWidth={1.5} />
                                    </div>
                                    <h3>{stream.label}</h3>
                                    <p>{stream.count}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* News & Articles Section */}
                <section className="news-section">
                    <div className="container">
                        <div className="section-header">
                            <div>
                                <span className="section-subtitle">STAY UPDATED</span>
                                <h2>News & Notifications</h2>
                            </div>
                            <button className="btn-link">View All News <ArrowRight size={16} /></button>
                        </div>

                        <div className="news-layout">
                            {/* Left: Featured Articles */}
                            <div className="articles-grid">
                                {articles.map((article) => (
                                    <div key={article.id} className="article-card">
                                        <div className="article-image">
                                            <Image src={article.image} alt={article.title} width={600} height={400} style={{ objectFit: 'cover' }} />
                                            <span className="article-badge">{article.type}</span>
                                        </div>
                                        <div className="article-content">
                                            <div className="article-meta">
                                                <Calendar size={14} /> <span>{article.date}</span>
                                            </div>
                                            <h3>{article.title}</h3>
                                            <p>{article.description}</p>
                                            <button className="read-more-btn">Read full story <ChevronRight size={16} /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right: Notification Board */}
                            <div className="notifications-board">
                                <div className="notifications-header">
                                    <h3><Bell size={20} className="bell-icon" /> Latest Alerts</h3>
                                </div>
                                <div className="notifications-list">
                                    {notifications.map((note) => (
                                        <div key={note.id} className="notification-item">
                                            <div className="note-indicator">
                                                {note.isNew && <span className="new-dot"></span>}
                                            </div>
                                            <div className="note-content">
                                                <p>{note.text}</p>
                                                <span className="note-time">{note.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="btn-view-all-alerts">View All Alerts</button>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Home;
