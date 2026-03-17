"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ImageIcon, Sparkles, ZoomIn } from 'lucide-react';

export default function GalleryTab({ college }) {
    const images = college?.images || [];
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = useCallback(() => setLightboxOpen(false), []);

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKey = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [lightboxOpen, closeLightbox, goNext, goPrev]);

    // Empty state
    if (!images.length) {
        return (
            <div className="fade-in" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <div style={{
                    width: '80px', height: '80px', margin: '0 auto 1.5rem',
                    background: 'linear-gradient(135deg, #F1F5F9, #E2E8F0)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <ImageIcon size={36} style={{ color: '#94A3B8' }} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.5rem' }}>
                    No Photos Available Yet
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto', lineHeight: '1.6' }}>
                    Campus photos for {college.name} will be added soon. Check back later for a visual tour of the campus.
                </p>
            </div>
        );
    }

    // Sort: primary first
    const sortedImages = [...images].sort((a, b) => (b.is_primary ? 1 : 0) - (a.is_primary ? 1 : 0));

    return (
        <div className="fade-in">
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', margin: 0 }}>
                    Campus Gallery
                </h2>
                <span style={{
                    fontSize: '0.8rem', fontWeight: '600', color: '#64748B',
                    background: '#F1F5F9', padding: '0.35rem 0.85rem', borderRadius: '20px', border: '1px solid #E2E8F0'
                }}>
                    {images.length} {images.length === 1 ? 'Photo' : 'Photos'}
                </span>
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '1rem'
            }}>
                {sortedImages.map((img, i) => (
                    <div
                        key={img.id || i}
                        className="gallery-card"
                        onClick={() => openLightbox(i)}
                        style={{
                            position: 'relative',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            background: '#F1F5F9',
                            border: '1px solid #E2E8F0',
                            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                            aspectRatio: '4 / 3'
                        }}
                    >
                        <img
                            src={img.image}
                            alt={img.caption || `${college.name} campus photo ${i + 1}`}
                            loading="lazy"
                            style={{
                                width: '100%', height: '100%', objectFit: 'cover',
                                display: 'block', transition: 'transform 0.35s ease'
                            }}
                        />

                        {/* Zoom Overlay */}
                        <div className="gallery-overlay" style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)',
                            opacity: 0, transition: 'opacity 0.25s ease',
                            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                            padding: '1rem'
                        }}>
                            <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: '600', maxWidth: '70%', lineHeight: '1.3' }}>
                                {img.caption || ''}
                            </span>
                            <ZoomIn size={20} style={{ color: 'white', flexShrink: 0 }} />
                        </div>

                        {/* Primary Badge */}
                        {img.is_primary && (
                            <div style={{
                                position: 'absolute', top: '10px', left: '10px',
                                background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(8px)',
                                color: 'white', fontSize: '0.7rem', fontWeight: '700',
                                padding: '4px 10px', borderRadius: '20px',
                                display: 'flex', alignItems: 'center', gap: '4px',
                                textTransform: 'uppercase', letterSpacing: '0.5px'
                            }}>
                                <Sparkles size={11} /> Featured
                            </div>
                        )}

                        {/* Caption bar below image */}
                        {img.caption && (
                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, right: 0,
                                padding: '0.6rem 0.85rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                color: 'white', fontSize: '0.8rem', fontWeight: '600',
                                lineHeight: '1.3', pointerEvents: 'none'
                            }}>
                                {img.caption}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* ===== LIGHTBOX MODAL ===== */}
            {lightboxOpen && (
                <div
                    className="lightbox-backdrop"
                    onClick={closeLightbox}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 10000,
                        background: 'rgba(0, 0, 0, 0.92)', backdropFilter: 'blur(10px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        animation: 'lbFadeIn 0.2s ease'
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        style={{
                            position: 'absolute', top: '20px', right: '20px',
                            background: 'rgba(255,255,255,0.1)', border: 'none',
                            color: 'white', cursor: 'pointer', borderRadius: '50%',
                            width: '44px', height: '44px', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            transition: 'background 0.2s ease', zIndex: 10001
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        aria-label="Close lightbox"
                    >
                        <X size={22} />
                    </button>

                    {/* Counter */}
                    <div style={{
                        position: 'absolute', top: '24px', left: '50%', transform: 'translateX(-50%)',
                        color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: '600'
                    }}>
                        {currentIndex + 1} / {sortedImages.length}
                    </div>

                    {/* Prev */}
                    {sortedImages.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            style={{
                                position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                                background: 'rgba(255,255,255,0.1)', border: 'none',
                                color: 'white', cursor: 'pointer', borderRadius: '50%',
                                width: '48px', height: '48px', display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                transition: 'background 0.2s ease', zIndex: 10001
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={26} />
                        </button>
                    )}

                    {/* Main Image */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: '90vw', maxHeight: '80vh',
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            animation: 'lbSlideIn 0.25s ease'
                        }}
                    >
                        <img
                            src={sortedImages[currentIndex]?.image}
                            alt={sortedImages[currentIndex]?.caption || `Photo ${currentIndex + 1}`}
                            style={{
                                maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain',
                                borderRadius: '8px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
                            }}
                        />
                        {sortedImages[currentIndex]?.caption && (
                            <p style={{
                                color: 'rgba(255,255,255,0.85)', marginTop: '1rem',
                                fontSize: '0.95rem', fontWeight: '500', textAlign: 'center',
                                maxWidth: '600px', lineHeight: '1.5'
                            }}>
                                {sortedImages[currentIndex].caption}
                            </p>
                        )}
                    </div>

                    {/* Next */}
                    {sortedImages.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            style={{
                                position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                                background: 'rgba(255,255,255,0.1)', border: 'none',
                                color: 'white', cursor: 'pointer', borderRadius: '50%',
                                width: '48px', height: '48px', display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                transition: 'background 0.2s ease', zIndex: 10001
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                            aria-label="Next image"
                        >
                            <ChevronRight size={26} />
                        </button>
                    )}
                </div>
            )}

            {/* Styles */}
            <style jsx>{`
                .gallery-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
                }
                .gallery-card:hover img {
                    transform: scale(1.05);
                }
                .gallery-card:hover .gallery-overlay {
                    opacity: 1 !important;
                }
                @keyframes lbFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes lbSlideIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                @media (max-width: 768px) {
                    .gallery-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 0.75rem !important;
                    }
                }
                @media (max-width: 480px) {
                    .gallery-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
}
