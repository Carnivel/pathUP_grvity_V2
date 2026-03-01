import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { BookOpen, Clock, DollarSign, GraduationCap, TrendingUp, ChevronRight, Search, Layers, CheckSquare, Square } from 'lucide-react';
import { streams, courses } from '../data/coursesData';
import CourseCompareModal from '../components/CourseCompareModal';
import './Courses.css';

const Courses = () => {
    const [activeStream, setActiveStream] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

    const filteredCourses = courses.filter(course => {
        const matchesStream = activeStream === 'all' || course.stream === activeStream;
        const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.degree.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStream && matchesSearch;
    });

    const trendingCourses = courses.filter(c => c.trending);

    const handleCourseSelect = (course, e) => {
        e.preventDefault();
        const isSelected = selectedCourses.some(c => c.id === course.id);

        if (isSelected) {
            setSelectedCourses(selectedCourses.filter(c => c.id !== course.id));
        } else if (selectedCourses.length < 3) {
            setSelectedCourses([...selectedCourses, course]);
        } else {
            alert("You can compare up to 3 courses at a time.");
        }
    };

    return (
        <>
            <PageTransition>
                <div className="courses-page">
                    {/* Hero */}
                    <section className="courses-hero">
                        <div className="container">
                            <div className="courses-hero-content">
                                <span className="badge"><Layers size={16} /> Browse Courses</span>
                                <h1 className="text-gradient">Explore Courses That Shape Careers</h1>
                                <p className="subtitle">
                                    Discover degree programs across every stream — compare fees, duration, and top-ranked colleges offering them.
                                </p>

                                <div className="courses-search-bar">
                                    <Search className="icon" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search courses by name or degree type..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Trending */}
                    <section className="trending-section">
                        <div className="container">
                            <div className="section-header">
                                <h2>🔥 Trending Courses</h2>
                            </div>
                            <div className="trending-row">
                                {trendingCourses.map(course => (
                                    <div key={course.id} className="trending-chip" style={{ '--accent': course.color }}>
                                        <TrendingUp size={16} color={course.color} />
                                        <span>{course.name}</span>
                                        <ChevronRight size={14} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Stream Tabs */}
                    <section className="courses-tabs-section">
                        <div className="container">
                            <div className="courses-tab-bar">
                                {streams.map(stream => (
                                    <button
                                        key={stream.id}
                                        className={`course-tab-btn ${activeStream === stream.id ? 'active' : ''}`}
                                        onClick={() => setActiveStream(stream.id)}
                                    >
                                        {stream.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Course Cards */}
                    <section className="courses-results">
                        <div className="container">
                            <div className="courses-results-header">
                                <h3>Showing {filteredCourses.length} Courses</h3>
                            </div>

                            <div className="courses-grid">
                                {filteredCourses.map(course => {
                                    const isSelected = selectedCourses.some(c => c.id === course.id);
                                    return (
                                        <div key={course.id} className={`course-card ${isSelected ? 'selected-for-compare' : ''}`} style={{ '--accent': course.color }}>
                                            <div className="course-card-top">
                                                <div className="course-icon-wrap" style={{ background: `${course.color}15`, color: course.color }}>
                                                    <GraduationCap size={24} />
                                                </div>
                                                <div className="course-card-actions">
                                                    <button
                                                        className={`btn-compare-toggle ${isSelected ? 'active' : ''}`}
                                                        onClick={(e) => handleCourseSelect(course, e)}
                                                        title="Add to compare"
                                                    >
                                                        {isSelected ? <CheckSquare size={20} color="var(--color-primary)" /> : <Square size={20} color="var(--color-text-secondary)" />}
                                                        <span className="compare-text">{isSelected ? 'Added' : 'Compare'}</span>
                                                    </button>

                                                    {course.trending && (
                                                        <span className="trending-badge">
                                                            <TrendingUp size={12} /> Trending
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <h3>{course.name}</h3>
                                            <p className="course-degree">{course.degree}</p>

                                            <div className="course-meta-grid">
                                                <div className="course-meta-item">
                                                    <Clock size={15} />
                                                    <div>
                                                        <span className="meta-label">Duration</span>
                                                        <strong>{course.duration}</strong>
                                                    </div>
                                                </div>
                                                <div className="course-meta-item">
                                                    <DollarSign size={15} />
                                                    <div>
                                                        <span className="meta-label">Avg Fees</span>
                                                        <strong>{course.avgFees}</strong>
                                                    </div>
                                                </div>
                                                <div className="course-meta-item">
                                                    <BookOpen size={15} />
                                                    <div>
                                                        <span className="meta-label">Top Colleges</span>
                                                        <strong>{course.topColleges}+</strong>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="course-highlights">
                                                {course.highlights.map(h => (
                                                    <span key={h} className="highlight-tag" style={{ borderColor: `${course.color}40`, color: course.color }}>
                                                        {h}
                                                    </span>
                                                ))}
                                            </div>

                                            <Link to={`/courses/${course.id}`} className="btn-explore" style={{ background: course.color, display: 'flex', textDecoration: 'none' }}>
                                                View Details <ChevronRight size={16} />
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </PageTransition>

            {/* Floating Compare Action Bar - Placed outside of PageTransition to avoid fixed position issues with CSS transform */}
            {selectedCourses.length > 0 && (
                <div className="compare-action-bar">
                    <div className="compare-info">
                        <div className="compare-count">{selectedCourses.length}</div>
                        <div className="compare-text-details">
                            <strong>Courses Selected</strong>
                            <span>Add up to 3 courses to compare them side-by-side.</span>
                        </div>
                    </div>
                    <div className="compare-actions">
                        <button className="btn-outline-red" onClick={() => setSelectedCourses([])}>
                            Clear
                        </button>
                        <button
                            className="btn-primary"
                            onClick={() => setIsCompareModalOpen(true)}
                            disabled={selectedCourses.length < 2}
                        >
                            Compare Now
                        </button>
                    </div>
                </div>
            )}

            {/* Compare Modal */}
            {isCompareModalOpen && (
                <CourseCompareModal
                    courses={selectedCourses}
                    onClose={() => setIsCompareModalOpen(false)}
                    onRemoveCourse={(id) => setSelectedCourses(selectedCourses.filter(c => c.id !== id))}
                />
            )}
        </>
    );
};

export default Courses;
