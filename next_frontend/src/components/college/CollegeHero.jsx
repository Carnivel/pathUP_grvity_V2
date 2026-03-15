"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MapPin, Star, Building, CheckCircle, ArrowLeft, Image as ImageIcon, Heart } from 'lucide-react';

export default function CollegeHero({ college }) {
    const router = useRouter();

    // Fallback images if college doesn't provide them
    const galleryImages = college.gallery || [
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80'
    ];

    return (
        <div className="college-hero-section" style={{ background: '#0F172A', color: 'white', position: 'relative' }}>
            {/* Gallery Grid Header */}
            <div className="hero-gallery-grid" style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr',
                gridTemplateRows: '200px 200px',
                gap: '8px',
                padding: '8px',
                height: '400px',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'relative', gridRow: '1 / 3' }}>
                    <img src={galleryImages[0]} alt={`${college.name} campus main`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px 0 0 12px' }} />
                    <button 
                        onClick={() => router.back()}
                        style={{
                            position: 'absolute', top: '20px', left: '20px',
                            display: 'flex', alignItems: 'center', gap: '8px', 
                            background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.2)', color: 'white',
                            padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem',
                            fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s ease',
                            zIndex: 10
                        }}
                    >
                        <ArrowLeft size={16} /> Back
                    </button>
                </div>
                <div style={{ position: 'relative' }}>
                    <img src={galleryImages[1]} alt={`${college.name} building`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'relative' }}>
                    <img src={galleryImages[2]} alt={`${college.name} students`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0 12px 0 0' }} />
                </div>
                <div style={{ position: 'relative', gridColumn: '2 / 4' }}>
                    <img src={galleryImages[3]} alt={`${college.name} library`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0 0 12px 0' }} />
                    <button style={{
                        position: 'absolute', bottom: '20px', right: '20px',
                        display: 'flex', alignItems: 'center', gap: '8px',
                        background: 'white', color: '#0F172A', border: 'none',
                        padding: '10px 20px', borderRadius: '8px', fontSize: '0.9rem',
                        fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                        <ImageIcon size={18} /> View All {galleryImages.length} Photos
                    </button>
                </div>
            </div>

            {/* Info Container */}
            <div className="container" style={{ position: 'relative', zIndex: 10, padding: '2.5rem 1.5rem 4rem 1.5rem', marginTop: '-40px' }}>
                <div style={{ 
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem',
                    background: 'linear-gradient(to top, #0F172A 70%, transparent 100%)',
                    borderRadius: '16px'
                }}>
                    <div style={{ flex: '1 1 600px' }}>
                        <div className="hero-top-meta" style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <span style={{ padding: '6px 12px', background: '#2D313A', color: '#E2E8F0', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.5px' }}>
                                {college.ownership_type?.toUpperCase() || 'INSTITUTION'}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 12px', background: 'rgba(245, 158, 11, 0.15)', color: '#FCD34D', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '800' }}>
                                <Star size={14} fill="currentColor" /> {college.rating || '4.0'} / 5 Rating
                            </span>
                            {college.aicte_id && (
                                <span style={{ padding: '6px 12px', border: '1px solid #334155', color: '#94A3B8', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700' }}>
                                    NAAC A++ Accredited
                                </span>
                            )}
                        </div>

                        <h1 className="editorial-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800', marginBottom: '0.5rem', lineHeight: '1.1', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
                            {college.name}
                        </h1>

                        {college.university?.name && (
                            <h2 className="editorial-subtitle" style={{ fontSize: '1.1rem', color: '#94A3B8', marginBottom: '1.5rem', fontWeight: '500' }}>
                                Affiliated to <span style={{ color: '#E2E8F0' }}>{college.university.name}</span>
                            </h2>
                        )}

                        <div className="hero-bottom-meta" style={{ display: 'flex', gap: '1.5rem', color: '#CBD5E1', flexWrap: 'wrap', fontWeight: '500', fontSize: '0.95rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <MapPin size={18} color="#94A3B8" /> {college.city}, {college.state}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Building size={18} color="#94A3B8" /> Est. {college.established_year || 'N/A'}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981' }}>
                                <CheckCircle size={18} /> AICTE Approved
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 900px) {
                    .hero-gallery-grid {
                        grid-template-columns: 1fr !important;
                        grid-template-rows: 300px !important;
                        height: 300px !important;
                        gap: 0 !important;
                    }
                    .hero-gallery-grid > div:not(:first-child) {
                        display: none;
                    }
                    .hero-gallery-grid img {
                        border-radius: 0 !important;
                    }
                }
            `}</style>
        </div>
    );
}
