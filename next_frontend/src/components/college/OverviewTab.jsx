"use client";
import React from 'react';
import CollegeVideoSection from './CollegeVideoSection';

export default function OverviewTab({ college }) {
    return (
        <div className="fade-in">
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1rem', color: '#0F172A' }}>About {college.name}</h2>
            
            <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '1rem', marginBottom: '2rem' }}>
                {college.description || `${college.name} is a premier ${college.ownership_type?.toLowerCase() || 'educational'} institution situated in the vibrant city of ${college.city}, ${college.state}. With a legacy of excellence since ${college.established_year || 'its inception'}, the college is dedicated to fostering innovation, critical thinking, and leadership among its students. Spread across a modern campus, it offers deeply integrated courses aligned with industry requirements.`}
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1rem', color: '#0F172A', marginTop: '2rem' }}>College Highlights</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', background: '#F8FAFC', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div>
                    <p style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '4px', fontWeight: '700', textTransform: 'uppercase' }}>Established</p>
                    <p style={{ fontWeight: '800', color: '#0F172A', fontSize: '1.1rem' }}>{college.established_year || 'N/A'}</p>
                </div>
                <div>
                    <p style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '4px', fontWeight: '700', textTransform: 'uppercase' }}>Institution Type</p>
                    <p style={{ fontWeight: '800', color: '#0F172A', fontSize: '1.1rem' }}>{college.ownership_type || 'Private'}</p>
                </div>
                <div>
                    <p style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '4px', fontWeight: '700', textTransform: 'uppercase' }}>Campus Size</p>
                    <p style={{ fontWeight: '800', color: '#0F172A', fontSize: '1.1rem' }}>120 Acres</p>
                </div>
                <div>
                    <p style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '4px', fontWeight: '700', textTransform: 'uppercase' }}>Acceptance Rate</p>
                    <p style={{ fontWeight: '800', color: '#0F172A', fontSize: '1.1rem' }}>Competitive</p>
                </div>
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1rem', color: '#0F172A', marginTop: '2rem' }}>Rankings & Accreditations</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {college.aicte_id && (
                    <div style={{ padding: '0.75rem 1.25rem', background: 'white', border: '1px solid #E2E8F0', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontWeight: '800', color: '#10B981', fontSize: '1.2rem' }}>A++</span>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: '700', color: '#0F172A', fontSize: '0.85rem' }}>NAAC Grade</span>
                            <span style={{ color: '#64748B', fontSize: '0.75rem' }}>Accredited</span>
                        </div>
                    </div>
                )}
                <div style={{ padding: '0.75rem 1.25rem', background: 'white', border: '1px solid #E2E8F0', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontWeight: '800', color: '#F59E0B', fontSize: '1.2rem' }}>#45</span>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: '700', color: '#0F172A', fontSize: '0.85rem' }}>NIRF Ranking</span>
                        <span style={{ color: '#64748B', fontSize: '0.75rem' }}>Engineering 2023</span>
                    </div>
                </div>
            </div>
            
            <CollegeVideoSection videos={college?.videos} />
        </div>
    );
}
