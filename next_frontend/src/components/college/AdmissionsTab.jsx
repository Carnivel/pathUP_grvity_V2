"use client";
import React from 'react';
import { Calendar, CheckCircle, FileText, ArrowRight } from 'lucide-react';

export default function AdmissionsTab({ college }) {
    return (
        <div className="fade-in">
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1.5rem', color: '#0F172A' }}>
                Admission Process 2024
            </h2>
            
            <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Admission to {college.name} is primarily based on merit and entrance exam scores. The institution accepts national and state-level entrance exams for various undergraduate and postgraduate programs.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {/* Important Dates */}
                <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0F172A', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={18} color="#2563EB" /> Important Dates
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #E2E8F0', paddingBottom: '0.5rem' }}>
                            <span style={{ color: '#475569', fontSize: '0.9rem', fontWeight: '500' }}>Application Start</span>
                            <span style={{ color: '#0F172A', fontSize: '0.9rem', fontWeight: '700' }}>May 01, 2024</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #E2E8F0', paddingBottom: '0.5rem' }}>
                            <span style={{ color: '#475569', fontSize: '0.9rem', fontWeight: '500' }}>Last Date to Apply</span>
                            <span style={{ color: '#E11D48', fontSize: '0.9rem', fontWeight: '800' }}>June 30, 2024</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ color: '#475569', fontSize: '0.9rem', fontWeight: '500' }}>Merit List Announcement</span>
                            <span style={{ color: '#0F172A', fontSize: '0.9rem', fontWeight: '700' }}>July 15, 2024</span>
                        </div>
                    </div>
                </div>

                {/* Eligibility Highlights */}
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0F172A', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle size={18} color="#10B981" /> Eligibility Highlights
                    </h3>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#475569', lineHeight: '1.5' }}>
                            <span style={{ color: '#10B981', marginTop: '2px' }}>•</span> 
                            Minimum 60% aggregate in 10+2 (PCM/PCB) for UG courses.
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#475569', lineHeight: '1.5' }}>
                            <span style={{ color: '#10B981', marginTop: '2px' }}>•</span> 
                            Valid score in JEE Main / State CET for Engineering.
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#475569', lineHeight: '1.5' }}>
                            <span style={{ color: '#10B981', marginTop: '2px' }}>•</span> 
                            Valid CAT / MAT / XAT score for MBA programs.
                        </li>
                    </ul>
                </div>
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1rem', color: '#0F172A' }}>How to Apply?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                    <div style={{ background: '#0F172A', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem', flexShrink: 0 }}>1</div>
                    <span style={{ color: '#475569', fontSize: '0.95rem', fontWeight: '500' }}>Register online on the official admission portal.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                    <div style={{ background: '#0F172A', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem', flexShrink: 0 }}>2</div>
                    <span style={{ color: '#475569', fontSize: '0.95rem', fontWeight: '500' }}>Fill out the detailed application form and upload required documents.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                    <div style={{ background: '#0F172A', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem', flexShrink: 0 }}>3</div>
                    <span style={{ color: '#475569', fontSize: '0.95rem', fontWeight: '500' }}>Pay the application fee via online payment gateways.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                    <div style={{ background: '#0F172A', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem', flexShrink: 0 }}>4</div>
                    <span style={{ color: '#475569', fontSize: '0.95rem', fontWeight: '500' }}>Submit the form and download the acknowledgment receipt.</span>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#0F172A', color: 'white', border: 'none', borderRadius: '8px', fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = '#1E293B'} onMouseOut={(e) => e.currentTarget.style.background = '#0F172A'}>
                    Apply Now <ArrowRight size={16} />
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'white', color: '#0F172A', border: '1px solid #CBD5E1', borderRadius: '8px', fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = '#F8FAFC'} onMouseOut={(e) => e.currentTarget.style.background = 'white'}>
                    <FileText size={16} /> Download Brochure
                </button>
            </div>
        </div>
    );
}
