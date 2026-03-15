"use client";
import React from 'react';
import { ExternalLink, Download } from 'lucide-react';

export default function CollegeActionStrip({ college }) {
    return (
        <div className="action-strip" style={{
            background: 'white',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            border: '1px solid #F1F5F9'
        }}>
            <div className="action-stats" style={{ display: 'flex', gap: '2rem', overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: '4px' }}>
                <div>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748B', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Programs</p>
                    <h3 style={{ margin: '4px 0 0 0', fontSize: '1.4rem', color: '#0F172A', fontWeight: '800' }}>{college.courses?.length || 0}</h3>
                </div>
                <div style={{ width: '1px', background: '#E2E8F0' }}></div>
                <div>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748B', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Highest Salary</p>
                    <h3 style={{ margin: '4px 0 0 0', fontSize: '1.4rem', color: '#10B981', fontWeight: '800' }}>₹ 15 LPA*</h3>
                </div>
                <div className="hide-mobile" style={{ width: '1px', background: '#E2E8F0' }}></div>
                <div className="hide-mobile">
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748B', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Application Due</p>
                    <h3 style={{ margin: '4px 0 0 0', fontSize: '1.4rem', color: '#0F172A', fontWeight: '800' }}>Aug 15</h3>
                </div>
            </div>

            <div className="action-buttons" style={{ display: 'flex', gap: '0.75rem' }}>
                <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'white', color: '#0F172A', border: '1px solid #CBD5E1', padding: '10px 16px', fontSize: '0.95rem', fontWeight: '700', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <Download size={16} /> <span className="hide-mobile">Brochure</span>
                </button>
                <button className="btn-primary" style={{ padding: '10px 28px', fontSize: '0.95rem', fontWeight: '700', borderRadius: '8px', background: '#0F172A', color: 'white', border: 'none', cursor: 'pointer', transition: 'background 0.2s', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.2)' }}>
                    Apply Now
                </button>
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .action-strip {
                        flex-direction: column;
                        align-items: stretch !important;
                        padding: 1rem !important;
                        gap: 1rem;
                    }
                    .action-stats {
                        justify-content: space-between;
                        gap: 1rem !important;
                    }
                    .action-buttons {
                        width: 100%;
                    }
                    .action-buttons button, .action-buttons a {
                        flex: 1;
                        justify-content: center;
                    }
                    .hide-mobile {
                        display: none !important;
                    }
                }
                .btn-secondary:hover { background: #F8FAFC !important; border-color: #94A3B8 !important; }
                .btn-primary:hover { background: #1E293B !important; }
            `}</style>
        </div>
    );
}
