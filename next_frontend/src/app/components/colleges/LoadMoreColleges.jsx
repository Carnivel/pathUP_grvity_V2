'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, Star, MapPin, BookOpen } from 'lucide-react';
import { getColleges } from '../../../lib/api';

export default function LoadMoreColleges({ initialColleges, searchParamsString, totalCount }) {
    const [colleges, setColleges] = useState(initialColleges);
    const [offset, setOffset] = useState(30);
    const [isLoading, setIsLoading] = useState(false);

    // If DRF doesn't return count, or total is unknown, just assume we can load more until an empty array returns.
    // We expect the backend to return { count, next, previous, results }.
    const hasMore = totalCount !== undefined ? colleges.length < totalCount : colleges.length >= offset;

    const handleLoadMore = async () => {
        setIsLoading(true);
        try {
            // Append limit and offset to the existing query params
            const currentParams = new URLSearchParams(searchParamsString);
            currentParams.set('limit', '30');
            currentParams.set('offset', offset.toString());

            const data = await getColleges(currentParams.toString());
            
            // DRF paginated response
            const newColleges = data.results ? data.results : data;
            
            if (newColleges && newColleges.length > 0) {
                setColleges(prev => [...prev, ...newColleges]);
                setOffset(prev => prev + 30);
            }
        } catch (error) {
            console.error("Failed to load more colleges", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="college-grid">
                {colleges.map((college) => (
                    <div key={college.id} className="college-card">
                        <Link href={`/colleges/${college.slug || college.id}`} className="card-link-overlay" aria-label={`View details for ${college.name}`}></Link>
                        
                        <div className="card-image-wrap">
                            <div className="placeholder-logo">
                                <Building2 size={32} strokeWidth={1.5} color="var(--color-primary)" />
                            </div>
                            <div className="type-badge standalone">{college.ownership_type || 'Institution'}</div>
                        </div>

                        <div className="card-content">
                            <div className="card-title-row">
                                <h2 className="college-name">{college.name}</h2>
                                <span className="rating-badge">
                                    <Star size={14} fill="currentColor" strokeWidth={0} /> 
                                    {college.rating || 'N/A'}
                                </span>
                            </div>

                            <div className="college-meta">
                                <span><MapPin size={15} strokeWidth={2} /> {college.location || college.city || 'Location Not Available'}</span>
                                <span><BookOpen size={15} strokeWidth={2} /> {college.course_count || 0} Courses</span>
                            </div>
                        </div>

                        <div className="card-divider"></div>

                        <div className="card-footer">
                            <div className="fee-info">
                                <span className="label">Starting Fee</span>
                                <strong className="fee-amount">
                                    {college.min_fee
                                        ? `₹ ${parseInt(college.min_fee).toLocaleString('en-IN')}`
                                        : 'Fee N/A'}
                                </strong>
                            </div>
                            <div className="card-actions">
                                <Link 
                                    href={`/colleges/${college.slug || college.id}`}
                                    className="btn-apply-primary"
                                    style={{ position: 'relative', zIndex: 10, textDecoration: 'none' }}
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {hasMore ? (
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button 
                        onClick={handleLoadMore} 
                        disabled={isLoading}
                        className="btn-secondary"
                        style={{ padding: '10px 30px', fontWeight: 'bold' }}
                    >
                        {isLoading ? 'Loading...' : 'Load More Colleges'}
                    </button>
                </div>
            ) : colleges.length > 0 && (
                <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--color-text-light)' }}>
                    <p>You&apos;ve reached the end of the list.</p>
                </div>
            )}
        </>
    );
}
