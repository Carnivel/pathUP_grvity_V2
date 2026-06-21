"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Building2, Filter, GraduationCap, ChevronDown, Square, X, SlidersHorizontal } from 'lucide-react';
import { collegeCategories, coursePrograms, states, feeRanges } from '../../../data/collegesData';

export default function FilterSidebar({ 
    name, state, city, stream, course, type, fee 
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Filter Toggle Button */}
            <div className="mobile-filter-btn-container">
                <button 
                    onClick={() => setIsOpen(true)}
                    className="mobile-filter-btn" 
                >
                    <SlidersHorizontal size={18} />
                    <span>Filter Colleges</span>
                </button>
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div className="mobile-filter-overlay" onClick={() => setIsOpen(false)}></div>
            )}

            <aside className={`filter-sidebar ${isOpen ? 'show' : ''}`}>
                <form action="/colleges" method="GET">
                    <div className="sidebar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                        <h3 style={{ margin: 0 }}>Filters</h3>
                        
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <Link href="/colleges" className="btn-clear-filters" style={{ textDecoration: 'none' }}>
                                Clear All
                            </Link>
                            <button type="submit" className="btn-primary" style={{ padding: '5px 10px', fontSize: '12px' }}>Apply</button>
                            
                            {/* Close button for mobile */}
                            <button 
                                type="button"
                                className="btn-close-filter mobile-close-btn"
                                onClick={() => setIsOpen(false)}
                                style={{ marginLeft: '5px' }}
                            >
                                <X size={18} />
                            </button>
                        </div>
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
        </>
    );
}
