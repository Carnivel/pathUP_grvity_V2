import React, { Suspense } from 'react';
import Link from 'next/link';
import PageTransition from '../../components/PageTransition';
import { Search, MapPin, Building2, Filter, Star, BookOpen, GraduationCap, ChevronDown, CheckSquare, Square } from 'lucide-react';
import { getColleges } from '../../lib/api';
import { collegeCategories, coursePrograms, states, feeRanges } from '../../data/collegesData';
import PopularSearches from '../components/colleges/PopularSearches';
import LoadMoreColleges from '../components/colleges/LoadMoreColleges';
import './CollegeFinder.css'; // Re-use the existing CSS 

export const metadata = {
    title: 'Explore Top Colleges | Rankings, Fees & Admissions',
    description: 'Discover and compare top colleges based on rankings, fees, courses offered, and placement records. Find the right college for you.',
};

// Next.js 15 Server Component
export default async function CollegesPage({ searchParams }) {
    // searchParams must be awaited in Next.js 15
    const params = await searchParams;
    const { name, state, city, stream, course, type, fee, sort } = params || {};

    const queryParams = new URLSearchParams();
    if (name) queryParams.set('name', name);
    if (state && state !== 'All States') queryParams.set('state', state);
    if (city) queryParams.set('city', city);
    if (stream && stream !== 'all') queryParams.set('stream', stream);
    if (course && course !== 'all') queryParams.set('course__degree', course);
    if (type && type !== 'All') queryParams.set('ownership_type', type);

    // Since DRF pagination is added, we set the initial limit to 30
    queryParams.set('limit', '30');
    queryParams.set('offset', '0');

    const activeSort = sort || 'rating';
    // Let backend handle sorting (if FilterSet allows `ordering`, otherwise DRF handles it automatically 
    // if ordering_backends are enabled, or you can implement it in the view's get_queryset)
    if (activeSort === 'rating') queryParams.set('ordering', '-rating');
    if (activeSort === 'feeLowHigh') {
        queryParams.set('ordering', 'offered_courses__tuition_fee');
        queryParams.set('offered_courses__tuition_fee__gt', '0'); // Ignore zero fee/empty courses for low-to-high
    }

    // Fetch from backend
    const apiData = await getColleges(queryParams.toString()) || {};
    // Extract results depending on whether the response is paginated
    const collegesList = apiData.results ? apiData.results : (Array.isArray(apiData) ? apiData : []);
    const totalCount = apiData.count || collegesList.length;
    

    return (
        <PageTransition>
            <div className="college-finder-page">
                {/* Header */}
                <section className="finder-header">
                    <div className="container">
                        <h1 className="text-gradient">Discover Top Colleges</h1>
                        <p className="subtitle">Find the best institutions tailored precisely to your ambitions.</p>
                    </div>
                </section>

                <PopularSearches />

                <div className="container">
                    <div className="finder-layout">
                        {/* LEFT SIDEBAR: Filters (Form-based for Server Component) */}
                        <aside className="filter-sidebar desktop-only">
                            <form action="/colleges" method="GET">
                                <div className="sidebar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                                    <h3 style={{ margin: 0 }}>Filters</h3>
                                    <Link href="/colleges" className="btn-clear-filters" style={{ textDecoration: 'none' }}>
                                        Clear All
                                    </Link>
                                    <button type="submit" className="btn-primary" style={{ padding: '5px 10px', fontSize: '12px' }}>Apply</button>
                                </div>

                                {/* Search */}
                                <div className="filter-group">
                                    <h3>Search</h3>
                                    <div className="search-input-wrapper">
                                        <Search className="icon" size={18} />
                                        <input
                                            type="text"
                                            name="name"
                                            defaultValue={name || ''}
                                            placeholder="Colleges, cities..."
                                        />
                                    </div>
                                </div>

                                {/* Stream / Category */}
                                <div className="filter-group">
                                    <h3>Course Stream</h3>
                                    <div className="custom-select-wrapper">
                                        <GraduationCap size={16} className="select-icon" />
                                        <select name="stream" defaultValue={stream || 'all'} className="filter-select">
                                            <option value="all">All Streams</option>
                                            {collegeCategories.map(cat => (
                                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={16} className="select-arrow" />
                                    </div>
                                </div>

                                {/* State / Location */}
                                <div className="filter-group">
                                    <h3>State</h3>
                                    <div className="custom-select-wrapper">
                                        <MapPin size={16} className="select-icon" />
                                        <select name="state" defaultValue={state || 'All States'} className="filter-select">
                                            <option value="All States">All States</option>
                                            {states.map(s => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={16} className="select-arrow" />
                                    </div>
                                </div>

                                {/* Course / Degree */}
                                <div className="filter-group">
                                    <h3>Course Level</h3>
                                    <div className="custom-select-wrapper">
                                        <Filter size={16} className="select-icon" />
                                        <select name="course" defaultValue={course || 'all'} className="filter-select">
                                            {coursePrograms.map(pg => (
                                                <option key={pg.id} value={pg.id}>{pg.label}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={16} className="select-arrow" />
                                    </div>
                                </div>

                                {/* Ownership Type */}
                                <div className="filter-group">
                                    <h3>Ownership</h3>
                                    <div className="custom-select-wrapper">
                                        <Building2 size={16} className="select-icon" />
                                        <select name="type" defaultValue={type || 'All'} className="filter-select">
                                            <option value="All">All Types</option>
                                            <option value="Private">Private</option>
                                            <option value="Public/Government">Public/Government</option>
                                        </select>
                                        <ChevronDown size={16} className="select-arrow" />
                                    </div>
                                </div>

                                {/* 1st Year Fees */}
                                <div className="filter-group">
                                    <h3>Annual Fees</h3>
                                    <div className="custom-select-wrapper">
                                        <Square size={16} className="select-icon" />
                                        <select name="fee" defaultValue={fee || 'all'} className="filter-select">
                                            {feeRanges.map(fr => (
                                                <option key={fr.id} value={fr.id}>{fr.label}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={16} className="select-arrow" />
                                    </div>
                                </div>
                            </form>
                        </aside>

                        {/* RIGHT MAIN CONTENT: Results */}
                        <main className="finder-results">
                            <div className="results-header">
                                <h3>Showing <span>{totalCount}</span> Colleges</h3>
                                <div className="sort-wrapper">
                                    <form action="/colleges" method="GET" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        {/* Hidden inputs to preserve existing filters on sort */}
                                        {name && <input type="hidden" name="name" value={name} />}
                                        {state && <input type="hidden" name="state" value={state} />}
                                        {city && <input type="hidden" name="city" value={city} />}
                                        {stream && <input type="hidden" name="stream" value={stream} />}
                                        {course && <input type="hidden" name="course" value={course} />}
                                        {type && <input type="hidden" name="type" value={type} />}
                                        {fee && <input type="hidden" name="fee" value={fee} />}
                                        
                                        <label>Sort by:</label>
                                        <select name="sort" className="sort-select" defaultValue={activeSort}>
                                            <option value="rating">Highest Rating</option>
                                            <option value="relevance">Relevance</option>
                                            <option value="feeLowHigh">Lowest Fee</option>
                                        </select>
                                        <button type="submit" className="btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>Sort</button>
                                    </form>
                                </div>
                            </div>

                            {collegesList.length === 0 ? (
                                <div className="no-results">
                                    <Building2 size={48} className="no-res-icon" />
                                    <h3>No Colleges Found</h3>
                                    <p>Try adjusting your filters or search term to discover more institutions.</p>
                                    <Link href="/colleges" className="btn-secondary" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '15px' }}>Clear All Filters</Link>
                                </div>
                            ) : (
                                <LoadMoreColleges 
                                    initialColleges={collegesList} 
                                    searchParamsString={queryParams.toString()} 
                                    totalCount={totalCount}
                                />
                            )}
                        </main>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
