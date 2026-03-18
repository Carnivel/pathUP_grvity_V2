"use client";
import React, { useState } from 'react';

// Helper to extract video ID 
const extractVideoId = (url) => {
    if (!url) return null;
    try {
        const parsedUrl = new URL(url);
        if (parsedUrl.hostname === 'youtu.be') return parsedUrl.pathname.slice(1);
        if (parsedUrl.searchParams.has('v')) return parsedUrl.searchParams.get('v');
        if (parsedUrl.pathname.includes('/embed/')) return parsedUrl.pathname.split('/embed/')[1];
        if (parsedUrl.pathname.includes('/shorts/')) return parsedUrl.pathname.split('/shorts/')[1];
        return null;
    } catch (e) {
        return null;
    }
};

const LiteYouTubeEmbed = ({ video }) => {
    const videoId = extractVideoId(video.video_url);
    const [isPlaying, setIsPlaying] = useState(false);
    const [thumbnailQuality, setThumbnailQuality] = useState('maxresdefault'); // Start with high res
    const [isHovered, setIsHovered] = useState(false);

    if (!videoId) return null; // Invalid URL, don't render

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`;

    const playVideo = () => setIsPlaying(true);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            playVideo();
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div 
                className="yt-lite-container"
                onClick={playVideo}
                onKeyDown={handleKeyDown}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                tabIndex={0}
                role="button"
                aria-label={`Play video: ${video.title || 'Campus Video'}`}
                style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: '#0F172A',
                    boxShadow: isHovered ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                    transition: 'all 0.3s ease'
                }}
            >
                {isPlaying ? (
                    <iframe
                        src={embedUrl}
                        title={video.title || 'YouTube video player'}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    />
                ) : (
                    <>
                        {/* Thumbnail */}
                        <img 
                            src={thumbnailUrl} 
                            alt={video.title || 'Video thumbnail'}
                            onError={() => {
                                if (thumbnailQuality === 'maxresdefault') setThumbnailQuality('hqdefault'); // Fallback
                            }}
                            loading="lazy"
                            style={{
                                width: '100%', height: '100%', objectFit: 'cover',
                                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                            }}
                        />
                        
                        {/* Gradient Overlay for better play button contrast */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: isHovered ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.3)',
                            transition: 'background 0.3s ease'
                        }} />

                        {/* Play Button (Glassmorphism + Glow) */}
                        <div style={{
                            position: 'absolute',
                            top: '50%', left: '50%',
                            transform: `translate(-50%, -50%) scale(${isHovered ? 1.1 : 1})`,
                            width: '64px', height: '64px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.25)',
                            backdropFilter: 'blur(8px)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: isHovered ? '0 0 20px rgba(255,255,255,0.4)' : '0 4px 15px rgba(0,0,0,0.2)',
                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            zIndex: 2
                        }}>
                            <div style={{
                                width: 0, height: 0,
                                borderTop: '10px solid transparent',
                                borderBottom: '10px solid transparent',
                                borderLeft: '16px solid white',
                                marginLeft: '4px' // Optical centering
                            }} />
                        </div>
                    </>
                )}
            </div>
            {/* Optional Title Display */}
            {video.title && (
                <h4 style={{ 
                    margin: 0, 
                    fontSize: '0.95rem', 
                    fontWeight: '600', 
                    color: '#1E293B',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: '1.4'
                }}>
                    {video.title}
                </h4>
            )}
        </div>
    );
};

export default function CollegeVideoSection({ videos }) {
    if (!videos || videos.length === 0) return null;

    return (
        <div style={{ marginTop: '3rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', margin: 0 }}>
                    Campus Videos
                </h2>
            </div>
            <div className="video-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.5rem'
            }}>
                {videos.map((video, index) => (
                    <LiteYouTubeEmbed key={video.id || index} video={video} />
                ))}
            </div>
        </div>
    );
}
