"use client";
import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function PlacementsTab({ college }) {
    return (
        <div className="fade-in">
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1.5rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrendingUp size={22} color="#10B981" /> Placement Highlights
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '1.5rem', borderRadius: '12px', color: '#0F172A' }}>
                    <p style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '8px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Highest Package</p>
                    <h3 style={{ fontSize: '2rem', fontWeight: '800', margin: 0, color: '#10B981' }}>₹ 15 LPA*</h3>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '1.5rem', borderRadius: '12px', color: '#0F172A' }}>
                    <p style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '8px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Average Package</p>
                    <h3 style={{ fontSize: '2rem', fontWeight: '800', margin: 0, color: '#3B82F6' }}>₹ 4.5 LPA*</h3>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '1.5rem', borderRadius: '12px', color: '#0F172A' }}>
                    <p style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '8px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Placement Rate</p>
                    <h3 style={{ fontSize: '2rem', fontWeight: '800', margin: 0, color: '#8B5CF6' }}>85%+</h3>
                </div>
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1.25rem', color: '#0F172A' }}>Top Recruiters</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                {['TCS', 'Infosys', 'Wipro', 'Cognizant', 'IBM', 'Accenture', 'Capgemini', 'Tech Mahindra'].map((company, i) => (
                    <div key={i} style={{ 
                        padding: '1.25rem', 
                        background: '#ffffff', 
                        borderRadius: '12px', 
                        border: '1px solid #E2E8F0', 
                        fontSize: '0.9rem', 
                        fontWeight: '800', 
                        color: '#475569',
                        textAlign: 'center',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '60px'
                    }}>
                        {company}
                    </div>
                ))}
            </div>
            
            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#166534', margin: '0 0 8px 0' }}>Placement Cell Support</h4>
                <p style={{ fontSize: '0.9rem', color: '#15803D', margin: 0, lineHeight: '1.6' }}>
                    The dedicated training and placement cell organizes regular workshops, mock interviews, and industry-interaction sessions to prepare students for top corporate roles.
                </p>
            </div>

            <p style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '1.5rem', fontStyle: 'italic' }}>* Note: Placement statistics are indicative and based on general historical data. Official data pending update.</p>
        </div>
    );
}
