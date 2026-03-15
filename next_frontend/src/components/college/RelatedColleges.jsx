"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, MapPin, ArrowRight } from 'lucide-react';

export default function RelatedColleges({ currentCollege }) {
    const [related, setRelated] = useState([]);

    useEffect(() => {
        async function fetchRelated() {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const response = await fetch(`${apiUrl}/colleges/?state=${encodeURIComponent(currentCollege.state || '')}`);
                if (!response.ok) return;
                const data = await response.json();
                const colleges = data?.results || data || [];
                const filtered = colleges
                    .filter(c => c.slug !== currentCollege.slug)
                    .slice(0, 4);
                setRelated(filtered);
            } catch (err) {
                console.error('Failed to fetch related colleges:', err);
            }
        }
        if (currentCollege?.state) {
            fetchRelated();
        }
    }, [currentCollege]);

    if (related.length === 0) return null;

    return (
        <div style={{ marginTop: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', margin: 0 }}>
                    Similar Colleges in {currentCollege.state}
                </h2>
                <Link href="/colleges" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#3B82F6', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>
                    View All <ArrowRight size={14} />
                </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                {related.map((col, i) => (
                    <Link key={i} href={`/colleges/${col.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ 
                            background: 'white', 
                            borderRadius: '12px', 
                            border: '1px solid #E2E8F0', 
                            padding: '1.25rem', 
                            transition: 'all 0.2s ease',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.02)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                                <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '800', color: '#0F172A', lineHeight: '1.3', flex: 1, paddingRight: '8px' }}>
                                    {col.name}
                                </h3>
                                {col.overall_rating && (
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#ECFDF5', color: '#059669', padding: '3px 8px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '800', flexShrink: 0 }}>
                                        <Star size={12} fill="#059669" /> {col.overall_rating}
                                    </span>
                                )}
                            </div>
                            <p style={{ margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '4px', color: '#64748B', fontSize: '0.85rem' }}>
                                <MapPin size={14} /> {col.city}, {col.state}
                            </p>
                            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: '700', background: '#F1F5F9', color: '#475569', padding: '3px 8px', borderRadius: '4px' }}>
                                    {col.ownership_type || 'Private'}
                                </span>
                                {col.courses && (
                                    <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#94A3B8' }}>
                                        {col.courses.length} Courses
                                    </span>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
