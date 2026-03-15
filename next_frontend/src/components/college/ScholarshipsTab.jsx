"use client";
import React, { useState } from 'react';
import { Award, IndianRupee, CheckCircle, ExternalLink } from 'lucide-react';

export default function ScholarshipsTab({ college }) {
    const scholarships = [
        {
            name: 'Merit-Based Scholarship',
            amount: 'Up to ₹1,00,000/year',
            eligibility: 'Students scoring 90%+ in qualifying exam or top 10% in entrance exam.',
            type: 'Merit',
            color: '#10B981'
        },
        {
            name: 'SC/ST/OBC Scholarship',
            amount: 'Full Tuition Fee Waiver',
            eligibility: 'Students belonging to SC/ST/OBC category with valid caste certificate.',
            type: 'Category',
            color: '#8B5CF6'
        },
        {
            name: 'Sports Scholarship',
            amount: 'Up to ₹50,000/year',
            eligibility: 'National/State level sports achievements with supporting certificates.',
            type: 'Sports',
            color: '#F59E0B'
        },
        {
            name: 'Central Govt. Scholarship (NSP)',
            amount: 'Varies by scheme',
            eligibility: 'Family income below ₹8 LPA. Apply via National Scholarship Portal.',
            type: 'Government',
            color: '#3B82F6'
        },
    ];

    return (
        <div className="fade-in">
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={22} color="#F59E0B" /> Scholarships & Financial Aid
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                {college.name} offers various scholarships to support students from diverse backgrounds. Below are the key financial aid options available.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {scholarships.map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', background: '#ffffff', borderRadius: '10px', border: '1px solid #E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.02)', transition: 'box-shadow 0.2s', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: s.color }}></div>
                        <div style={{ paddingLeft: '12px', flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '800', color: '#0F172A' }}>{s.name}</h3>
                                <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '3px 10px', borderRadius: '20px', background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}30` }}>{s.type}</span>
                            </div>
                            <p style={{ margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: '800', color: s.color }}>{s.amount}</p>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748B', lineHeight: '1.5' }}>
                                <strong style={{ color: '#475569' }}>Eligibility:</strong> {s.eligibility}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1.25rem', background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '10px' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#92400E', fontWeight: '600', lineHeight: '1.6' }}>
                    💡 <strong>Pro Tip:</strong> Apply for government scholarships via the <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#B45309', fontWeight: '700' }}>National Scholarship Portal (NSP)</a> before the deadline. Many students miss out simply because they don't apply on time.
                </p>
            </div>
        </div>
    );
}
