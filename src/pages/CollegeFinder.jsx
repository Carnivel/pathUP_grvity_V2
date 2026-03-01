import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Search, MapPin, Filter, Star, BookOpen, GraduationCap, Building2, TrendingUp, CheckSquare, Square, ChevronDown, X } from 'lucide-react';
import { collegeCategories, states, citiesByState, feeRanges } from '../data/collegesData';
import CompareModal from '../components/CompareModal';
import './CollegeFinder.css';

const CollegeFinder = () => {
    const location = useLocation();

    // Filter States
    const [searchTerm, setSearchTerm] = useState('');
    const [activeStream, setActiveStream] = useState(location.state?.activeStream || 'all');

    // Update stream filter if navigating from another page via router state
    useEffect(() => {
        if (location.state?.activeStream) {
            setActiveStream(location.state.activeStream);
        }
    }, [location.state]);
    const [activeType, setActiveType] = useState('All');
    const [selectedState, setSelectedState] = useState('All States');
    const [selectedCity, setSelectedCity] = useState('All Cities');
    const [selectedFee, setSelectedFee] = useState('all');
    const [sortBy, setSortBy] = useState('relevance');

    // Data State from Django Backend
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Universities from Django API when filters change
    useEffect(() => {
        const fetchColleges = async () => {
            setLoading(true);
            try {
                // Build the query string based on active filters
                let query = new URLSearchParams();

                if (searchTerm) query.append('name', searchTerm);
                if (selectedState !== 'All States') query.append('location', selectedState);
                if (selectedCity !== 'All Cities') query.append('location', selectedCity);
                if (activeStream !== 'all') query.append('course__stream', activeStream);
                if (activeType !== 'All') query.append('is_government_or_private', activeType);

                // Fetch from Django API
                const response = await fetch(`http://127.0.0.1:8000/api/colleges/?${query.toString()}`);
                const data = await response.json();

                setColleges(data);
            } catch (error) {
                console.error("Error fetching colleges:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchColleges();
    }, [searchTerm, selectedState, selectedCity, activeStream, activeType]);

    // Pagination State
    const [visibleCount, setVisibleCount] = useState(30);

    // Compare State
    const [compareList, setCompareList] = useState([]);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

    // Mobile Filter Toggle
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    // Handle State change
    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity('All Cities'); // Reset city when state changes
    };

    // Toggle Compare List
    const toggleCompare = (college) => {
        setCompareList(prev => {
            const isSelected = prev.find(c => c.id === college.id);
            if (isSelected) {
                return prev.filter(c => c.id !== college.id);
            } else {
                if (prev.length >= 6) {
                    alert('You can compare up to 6 colleges maximum.');
                    return prev;
                }
                return [...prev, college];
            }
        });
    };

    const handleRemoveFromCompare = (id) => {
        setCompareList(prev => prev.filter(c => c.id !== id));
        // Auto-close if we remove down to 1 or 0 colleges while comparing
        if (compareList.length <= 2) {
            setIsCompareModalOpen(false);
        }
    };

    // Clear All Filters
    const clearFilters = () => {
        setSearchTerm('');
        setActiveStream('all');
        setActiveType('All');
        setSelectedState('All States');
        setSelectedCity('All Cities');
        setSelectedFee('all');
        setVisibleCount(30); // Reset pagination on clear
    };

    // Note: Filtering is now handled directly by the Django backend API,
    // so we just sort the results returned by the server.
    const sortedColleges = [...colleges].sort((a, b) => {
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
        // Basic fee sort using the first course's tuition fee
        if (sortBy === 'feeLowHigh') {
            const feeA = a.courses && a.courses.length > 0 ? a.courses[0].tuition_fee : 0;
            const feeB = b.courses && b.courses.length > 0 ? b.courses[0].tuition_fee : 0;
            return feeA - feeB;
        }
        return 0; // relevance / original order
    });

    return (
        <PageTransition>
            <div className="college-finder-page">
                {/* Header (Simplified) */}
                <section className="finder-header">
                    <div className="container">
                        <h1 className="text-gradient">Discover Top Colleges</h1>
                        <p className="subtitle">Find the best institutions tailored precisely to your ambitions.</p>
                        <button className="mobile-filter-btn" onClick={() => setShowMobileFilters(true)}>
                            <Filter size={18} /> Show Filters
                        </button>
                    </div>
                </section>

                <div className="container">
                    <div className="finder-layout">

                        {/* Mobile Overlay */}
                        {showMobileFilters && (
                            <div className="mobile-filter-overlay" onClick={() => setShowMobileFilters(false)}></div>
                        )}

                        {/* LEFT SIDEBAR: Filters */}
                        <aside className={`filter-sidebar ${showMobileFilters ? 'show' : ''}`}>
                            {/* Mobile Header */}
                            <div className="sidebar-header mobile-only">
                                <h3>Filters</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <button className="btn-clear-filters mobile" onClick={clearFilters}>
                                        Clear All
                                    </button>
                                    <button className="btn-close-filter" onClick={() => setShowMobileFilters(false)}>
                                        <X size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Desktop Header */}
                            <div className="sidebar-header desktop-only" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                                <h3 style={{ margin: 0 }}>Filters</h3>
                                <button className="btn-clear-filters" onClick={clearFilters}>
                                    Clear All
                                </button>
                            </div>

                            {/* Search */}
                            <div className="filter-group">
                                <h3>Search</h3>
                                <div className="search-input-wrapper">
                                    <Search className="icon" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Colleges, cities..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Stream / Category */}
                            <div className="filter-group">
                                <h3>Course Stream</h3>
                                <div className="filter-options">
                                    {collegeCategories.map(cat => (
                                        <label key={cat.id} className="radio-label">
                                            <input
                                                type="radio"
                                                name="stream"
                                                checked={activeStream === cat.id}
                                                onChange={() => setActiveStream(cat.id)}
                                            />
                                            <span className="radio-text">{cat.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Institution Type */}
                            <div className="filter-group">
                                <h3>Institution Type</h3>
                                <div className="filter-options">
                                    {['All', 'Public', 'Private'].map(type => (
                                        <label key={type} className="radio-label">
                                            <input
                                                type="radio"
                                                name="type"
                                                checked={activeType === type}
                                                onChange={() => setActiveType(type)}
                                            />
                                            <span className="radio-text">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* State / Location */}
                            <div className="filter-group">
                                <h3>State</h3>
                                <div className="custom-select-wrapper">
                                    <MapPin size={16} className="select-icon" />
                                    <select
                                        value={selectedState}
                                        onChange={handleStateChange}
                                        className="filter-select"
                                    >
                                        {states.map(state => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={16} className="select-arrow" />
                                </div>
                            </div>

                            {/* Conditional City Filter */}
                            {selectedState !== 'All States' && citiesByState[selectedState] && (
                                <div className="filter-group">
                                    <h3>City</h3>
                                    <div className="custom-select-wrapper">
                                        <MapPin size={16} className="select-icon" />
                                        <select
                                            value={selectedCity}
                                            onChange={(e) => setSelectedCity(e.target.value)}
                                            className="filter-select"
                                        >
                                            <option value="All Cities">All Cities</option>
                                            {citiesByState[selectedState].map(city => (
                                                <option key={city} value={city}>{city}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={16} className="select-arrow" />
                                    </div>
                                </div>
                            )}

                            {/* Annual Fee */}
                            <div className="filter-group">
                                <h3>Annual Fee</h3>
                                <div className="filter-options">
                                    {feeRanges.map(fee => (
                                        <label key={fee.id} className="radio-label">
                                            <input
                                                type="radio"
                                                name="fee"
                                                checked={selectedFee === fee.id}
                                                onChange={() => setSelectedFee(fee.id)}
                                            />
                                            <span className="radio-text">{fee.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* RIGHT MAIN CONTENT: Results */}
                        <main className="finder-results">
                            <div className="results-header">
                                <h3>Showing <span>{sortedColleges.length}</span> Colleges</h3>
                                <div className="sort-wrapper">
                                    <label>Sort by:</label>
                                    <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                        <option value="relevance">Relevance</option>
                                        <option value="rating">Highest Rating</option>
                                        <option value="feeLowHigh">Lowest Fee</option>
                                    </select>
                                </div>
                            </div>

                            {loading ? (
                                <div className="loading-state" style={{ textAlign: 'center', padding: '50px' }}>
                                    <h3>Loading Colleges...</h3>
                                </div>
                            ) : sortedColleges.length === 0 ? (
                                <div className="no-results">
                                    <Building2 size={48} className="no-res-icon" />
                                    <h3>No Colleges Found</h3>
                                    <p>Try adjusting your filters or search term to discover more institutions.</p>
                                    <button className="btn-secondary" onClick={clearFilters}>Clear All Filters</button>
                                </div>
                            ) : (
                                <>
                                    <div className="college-grid">
                                        {sortedColleges.slice(0, visibleCount).map(college => (
                                            <div key={college.id} className="college-card">
                                                <div className="card-image-wrap">
                                                    <div className="placeholder-logo">
                                                        <Building2 size={32} color="var(--color-primary)" />
                                                    </div>
                                                    <div className="type-badge standalone">{college.is_government_or_private}</div>
                                                </div>

                                                <div className="card-content">
                                                    <div className="card-title-row">
                                                        <h2>{college.name}</h2>
                                                        <span className="rating-badge"><Star size={14} fill="currentColor" /> {college.rating || 'N/A'}</span>
                                                    </div>

                                                    <div className="college-meta">
                                                        <span><MapPin size={16} /> {college.location}</span>
                                                        <span><BookOpen size={16} /> {college.courses ? college.courses.length : 0} Courses</span>
                                                    </div>

                                                    <div className="course-tags">
                                                        {/* Map first 3 courses' specializations as tags */}
                                                        {college.courses && college.courses.slice(0, 3).map((course, idx) => (
                                                            <span key={idx} className="tag">{course.specialization}</span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="card-footer">
                                                    <div className="fee-info">
                                                        <span className="label">1st Year Fees</span>
                                                        <strong>₹ {college.courses && college.courses.length > 0 ? college.courses[0].tuition_fee : 'N/A'}</strong>
                                                    </div>
                                                    <div className="card-actions">
                                                        <button className="btn-primary">Apply</button>
                                                        <button
                                                            className={`btn-compare-toggle ${compareList.find(c => c.id === college.id) ? 'active' : ''}`}
                                                            onClick={() => toggleCompare(college)}
                                                        >
                                                            {compareList.find(c => c.id === college.id) ? 'Added' : '+ Compare'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>                            {/* Load More Button */}
                                    {sortedColleges.length > visibleCount && (
                                        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
                                            <button
                                                className="btn-primary"
                                                onClick={() => setVisibleCount(prev => prev + 30)}
                                            >
                                                Load More Colleges
                                            </button>
                                        </div>
                                    )}

                                    {/* Floating Compare Drawer */}
                                    {compareList.length > 0 && (
                                        <div className="compare-drawer">
                                            <div className="compare-drawer-content">
                                                <div className="compare-drawer-info">
                                                    <span className="compare-count">{compareList.length} / 6</span>
                                                    <span className="compare-text">Colleges selected for comparison</span>
                                                </div>
                                                <div className="compare-drawer-actions">
                                                    <button
                                                        className="btn-clear-compare"
                                                        onClick={() => setCompareList([])}
                                                    >
                                                        Clear
                                                    </button>
                                                    <button
                                                        className="btn-primary btn-compare-action"
                                                        disabled={compareList.length < 2}
                                                        onClick={() => setIsCompareModalOpen(true)}
                                                    >
                                                        Compare Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </main>
                    </div>
                </div>

                {isCompareModalOpen && (
                    <CompareModal
                        colleges={compareList}
                        onClose={() => setIsCompareModalOpen(false)}
                        onRemoveCollege={handleRemoveFromCompare}
                    />
                )}
            </div>
        </PageTransition >
    );
};

export default CollegeFinder;
