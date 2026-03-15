"use client";
import React from 'react';
import { BookOpen, Users, Download } from 'lucide-react';

export default function CoursesAndFeesTab({ courses }) {
    if (!courses || courses.length === 0) {
        return (
            <div className="fade-in" style={{ textAlign: 'center', padding: '4rem 2rem', background: '#F8FAFC', borderRadius: '12px', border: '1px dashed #CBD5E1' }}>
                <BookOpen size={48} color="#94A3B8" style={{ marginBottom: '1rem' }} />
                <p style={{ color: '#0F172A', fontWeight: '700', fontSize: '1.2rem', margin: '0 0 8px 0' }}>No Course Data Available</p>
                <p style={{ color: '#64748B', fontSize: '0.95rem', margin: 0 }}>Detailed course information is currently being updated by the institution.</p>
            </div>
        );
    }

    return (
        <div className="fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Programs Offered <span style={{ background: '#E2E8F0', color: '#475569', padding: '2px 8px', borderRadius: '12px', fontSize: '0.85rem' }}>{courses.length}</span>
                </h2>
                <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'white', border: '1px solid #CBD5E1', padding: '6px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#0F172A', cursor: 'pointer' }}>
                    <Download size={14} /> Download Fee Structure
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {courses.map((cc, index) => (
                    <div key={index} className="compact-course-card" style={{
                        padding: '1.5rem',
                        background: '#ffffff',
                        borderRadius: '12px',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                        transition: 'all 0.2s ease',
                    }}>
                        <div className="course-card-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
                            <div style={{ flex: '1 1 300px' }}>
                                <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                                    <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#0F172A', background: '#F1F5F9', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
                                        {cc.course.degree.name}
                                    </span>
                                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748B', border: '1px solid #E2E8F0', padding: '3px 10px', borderRadius: '6px' }}>
                                        {cc.course.specialization.stream?.name || 'General'}
                                    </span>
                                </div>
                                
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A', margin: '0 0 8px 0', lineHeight: '1.4' }}>
                                    {cc.course.degree.name} {cc.course.specialization.name}
                                </h3>
                                
                                <div style={{ display: 'flex', gap: '1.5rem', color: '#475569', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '500' }}><BookOpen size={16} color="#94A3B8" /> {cc.course_duration ? `${cc.course_duration} Years` : 'N/A'}</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '500' }}><Users size={16} color="#94A3B8" /> {cc.seat_intake || 'N/A'} Seats</span>
                                </div>

                                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '1rem', display: 'flex', gap: '1rem' }}>
                                    <button style={{ color: '#2563EB', background: 'transparent', border: 'none', padding: 0, fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}>Eligibility Criteria</button>
                                    <span style={{ color: '#CBD5E1' }}>•</span>
                                    <button style={{ color: '#2563EB', background: 'transparent', border: 'none', padding: 0, fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}>Syllabus</button>
                                </div>
                            </div>
                            
                            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', background: '#F8FAFC', padding: '1.5rem', borderRadius: '12px', minWidth: '180px' }}>
                                <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>1st Year Fees</p>
                                <p style={{ margin: '4px 0 12px 0', fontSize: '1.5rem', fontWeight: '800', color: '#0F172A' }}>₹ {cc.tuition_fee ? cc.tuition_fee.toLocaleString('en-IN') : '--'}</p>
                                <button style={{ width: '100%', padding: '8px 0', background: 'white', border: '1px solid #0F172A', color: '#0F172A', fontWeight: '700', borderRadius: '6px', fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.background = '#0F172A'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#0F172A'; }}>
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .compact-course-card:hover { border-color: #CBD5E1 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.05) !important; }
                @media (max-width: 768px) {
                    .course-card-inner { flex-direction: column; gap: 1rem !important; }
                    .course-card-inner > div:last-child { width: 100%; align-items: flex-start !important; text-align: left !important; padding: 1rem !important; }
                    .course-card-inner > div:last-child button { margin-top: 0.5rem; }
                }
            `}</style>
        </div>
    );
}
