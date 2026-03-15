"use client";
import React from 'react';
import { BookOpen, Building, Users, Briefcase, CheckCircle, Coffee, Monitor, HeartPulse, ShieldCheck, Bus } from 'lucide-react';

export default function CampusLifeTab({ college }) {
    const facilities = [
        { name: 'Central Library', desc: 'Over 50,000+ books & digital resources', icon: <BookOpen size={24} /> },
        { name: 'Hostel Facilities', desc: 'Separate blocks for Boys & Girls', icon: <Building size={24} /> },
        { name: 'Sports Complex', desc: 'Indoor & outdoor stadiums', icon: <Users size={24} /> },
        { name: 'Cafeteria', desc: 'Hygienic multi-cuisine food court', icon: <Coffee size={24} /> },
        { name: 'Computer Labs', desc: 'High-speed internet & latest tech', icon: <Monitor size={24} /> },
        { name: 'Medical Center', desc: '24/7 emergency care & ambulance', icon: <HeartPulse size={24} /> },
        { name: 'Wi-Fi Campus', desc: 'High-speed connectivity 24/7', icon: <CheckCircle size={24} /> },
        { name: 'Transport', desc: 'Bus grid covering the entire city', icon: <Bus size={24} /> },
        { name: 'Security', desc: 'CCTV & round-the-clock guards', icon: <ShieldCheck size={24} /> },
    ];

    return (
        <div className="fade-in">
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1.5rem', color: '#0F172A' }}>
                Facilities & Infrastructure
            </h2>
            
            <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '2rem' }}>
                The {college.name} campus provides a vibrant, safe, and academically enriching environment. Equipped with state-of-the-art infrastructure, it ensures students have access to the best resources for their holistic development.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                {facilities.map((fac, i) => (
                    <div key={i} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '1rem', 
                        padding: '1.25rem', 
                        background: '#ffffff', 
                        borderRadius: '12px', 
                        border: '1px solid #E2E8F0', 
                        boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
                        transition: 'box-shadow 0.2s ease, border-color 0.2s ease'
                    }} className="facility-card">
                        <div style={{ padding: '10px', background: '#F8FAFC', color: '#0F172A', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                            {fac.icon}
                        </div>
                        <div>
                            <span style={{ display: 'block', fontWeight: '800', color: '#0F172A', fontSize: '1rem', marginBottom: '4px' }}>{fac.name}</span>
                            <span style={{ display: 'block', color: '#64748B', fontSize: '0.85rem', lineHeight: '1.4' }}>{fac.desc}</span>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .facility-card:hover {
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05) !important;
                    border-color: #CBD5E1 !important;
                }
            `}</style>
        </div>
    );
}
