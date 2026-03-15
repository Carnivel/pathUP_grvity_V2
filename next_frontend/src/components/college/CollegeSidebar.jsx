"use client";
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Link as LinkIcon, Send } from 'lucide-react';

export default function CollegeSidebar({ college }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleLeadSubmit = (e) => {
        e.preventDefault();
        alert(`Lead submitted for ${name}! PathUp counselors will contact you soon.`);
        setName('');
        setPhone('');
    };

    return (
        <div className="content-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'sticky', top: '20px' }}>
            
            {/* Quick Enquiry / Lead Gen Widget */}
            <div style={{ background: '#ffffff', borderRadius: '12px', padding: '1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)' }}></div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '8px', color: '#0F172A' }}>Interested in {college.short_name || 'this college'}?</h3>
                <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1.5rem', lineHeight: '1.5' }}>Get free counseling from our education experts to secure your admission.</p>
                
                <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem', outline: 'none' }} 
                    />
                    <div style={{ display: 'flex' }}>
                        <span style={{ padding: '10px 14px', background: '#F1F5F9', border: '1px solid #CBD5E1', borderRight: 'none', borderRadius: '6px 0 0 6px', fontSize: '0.9rem', color: '#475569' }}>+91</span>
                        <input 
                            type="tel" 
                            placeholder="Mobile Number" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            pattern="[0-9]{10}"
                            style={{ flex: 1, width: '100%', padding: '10px 14px', borderRadius: '0 6px 6px 0', border: '1px solid #CBD5E1', fontSize: '0.9rem', outline: 'none' }} 
                        />
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '12px', background: '#0F172A', color: 'white', border: 'none', borderRadius: '6px', fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = '#1E293B'} onMouseOut={(e) => e.currentTarget.style.background = '#0F172A'}>
                        Get Free Call Back <Send size={14} />
                    </button>
                </form>
            </div>

            {/* MAP WIDGET */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', border: '1px solid #F1F5F9', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '1rem', color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} color="#64748B" /> Campus Location
                </h3>
                <div style={{ width: '100%', height: '160px', background: '#F8FAFC', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', overflow: 'hidden', position: 'relative', border: '1px solid #E2E8F0' }}>
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" alt="Map View" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                    <div style={{ position: 'absolute', background: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', color: '#0F172A', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>View on Google Maps</div>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>
                    <strong style={{ color: '#0F172A' }}>{college.name}</strong><br />
                    {college.city}, {college.district},<br />
                    {college.state}
                </p>
            </div>

            {/* CONTACT & LINKS WIDGET */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', border: '1px solid #F1F5F9', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '1.25rem', color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contact Info & Links</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#475569' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <Phone size={18} color="#94A3B8" style={{ marginTop: '2px' }} />
                        <div>
                            <p style={{ margin: '0 0 2px 0', fontSize: '0.75rem', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase' }}>Admissions Helpline</p>
                            <p style={{ margin: 0, fontWeight: '700', color: '#0F172A' }}>{college.phone_number || '+91 800-000-0000'}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <Mail size={18} color="#94A3B8" style={{ marginTop: '2px' }} />
                        <div>
                            <p style={{ margin: '0 0 2px 0', fontSize: '0.75rem', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase' }}>Email</p>
                            <p style={{ margin: 0, fontWeight: '600', color: '#2563EB', wordBreak: 'break-all', cursor: 'pointer' }}>{college.email || `admissions@${college.slug}.edu.in`}</p>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px dashed #E2E8F0', margin: '0.5rem 0' }}></div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <LinkIcon size={18} color="#94A3B8" />
                        <a href={college.website_url || '#'} target="_blank" rel="noopener noreferrer" style={{ color: '#0F172A', fontWeight: '700', textDecoration: 'none' }}>
                            Official Website ↗
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
