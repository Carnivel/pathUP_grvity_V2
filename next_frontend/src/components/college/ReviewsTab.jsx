"use client";
import React from 'react';
import { Star, ThumbsUp, MessageSquare } from 'lucide-react';

export default function ReviewsTab({ college }) {
    const reviews = [
        { name: 'Rahul Sharma', year: 'B.Tech 2023', text: 'Great faculty and excellent placement support. The campus life is vibrant with numerous clubs.', rating: 4.5, helpful: 24 },
        { name: 'Sneha Patel', year: 'MBA 2022', text: 'Good infrastructure but hostel food can be improved. Industry connections are solid though.', rating: 4.0, helpful: 15 },
        { name: 'Aman Singh', year: 'B.Sc 2024', text: 'Academics are very rigorous. Library has all the resources you need for research.', rating: 5.0, helpful: 42 },
    ];

    return (
        <div className="fade-in">
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1.5rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Star size={22} fill="#FCD34D" color="#F59E0B" /> Student Reviews
            </h2>

            {/* Rating Overview Box */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                <div style={{ minWidth: '150px', textAlign: 'center', borderRight: '1px solid #F1F5F9', paddingRight: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: '3rem', fontWeight: '800', color: '#0F172A', margin: '0 0 5px 0' }}>{college.rating || '4.0'}</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', color: '#FCD34D', gap: '2px', marginBottom: '5px' }}>
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < Math.floor(college.rating || 4) ? "#FCD34D" : "transparent"} color={i < Math.floor(college.rating || 4) ? "#FCD34D" : "#CBD5E1"} />)}
                    </div>
                    <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: '600' }}>Based on 124 reviews</span>
                </div>

                <div style={{ flex: 1, minWidth: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                    {[
                        { label: 'Academics', score: 4.5 },
                        { label: 'Placements', score: 4.2 },
                        { label: 'Infrastructure', score: 4.8 },
                        { label: 'Campus Life', score: 4.0 }
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>
                            <span style={{ width: '100px' }}>{item.label}</span>
                            <div style={{ flex: 1, height: '6px', background: '#F1F5F9', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', background: '#0F172A', width: `${(item.score / 5) * 100}%` }}></div>
                            </div>
                            <span style={{ width: '30px', textAlign: 'right', fontWeight: '800', color: '#0F172A' }}>{item.score}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Individual Reviews */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0F172A' }}>Recent Reviews</h3>
                    <button style={{ background: 'none', border: 'none', color: '#2563EB', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}>Write a Review</button>
                </div>
                
                {reviews.map((rev, i) => (
                    <div key={i} style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <div>
                                <h4 style={{ margin: '0 0 2px 0', fontSize: '1rem', fontWeight: '800', color: '#0F172A' }}>{rev.name}</h4>
                                <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: '600' }}>{rev.year}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#F0FDF4', color: '#16A34A', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '800' }}>
                                <Star size={12} fill="currentColor" /> {rev.rating}
                            </div>
                        </div>
                        <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6', margin: '0 0 1rem 0' }}>"{rev.text}"</p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', color: '#64748B', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer' }}>
                                <ThumbsUp size={14} /> Helpful ({rev.helpful})
                            </button>
                            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', color: '#64748B', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer' }}>
                                <MessageSquare size={14} /> Comment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <button style={{ width: '100%', padding: '12px', marginTop: '1.5rem', background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#0F172A', fontWeight: '700', borderRadius: '8px', cursor: 'pointer' }}>
                View All Reviews
            </button>
        </div>
    );
}
