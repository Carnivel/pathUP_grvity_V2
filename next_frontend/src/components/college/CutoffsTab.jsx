"use client";
import React, { useState } from 'react';
import { Target, TrendingUp } from 'lucide-react';

export default function CutoffsTab({ college }) {
    const [selectedExam, setSelectedExam] = useState('JEE Main');

    // Mock data for UI demonstration
    const exams = ['JEE Main', 'State CET', 'CAT'];
    
    const cutoffData = {
        'JEE Main': [
            { course: 'Computer Science', round1: '95.2', round2: '94.8', year: '2023' },
            { course: 'Electronics & Communication', round1: '89.5', round2: '88.1', year: '2023' },
            { course: 'Mechanical Engineering', round1: '82.0', round2: '80.5', year: '2023' },
            { course: 'Civil Engineering', round1: '78.5', round2: '76.0', year: '2023' },
        ],
        'State CET': [
            { course: 'Computer Science', round1: '124', round2: '118', year: '2023' },
            { course: 'Information Technology', round1: '115', round2: '110', year: '2023' },
        ],
        'CAT': [
            { course: 'MBA General', round1: '85', round2: '80', year: '2023' },
            { course: 'MBA Finance', round1: '82', round2: '78', year: '2023' },
        ]
    };

    return (
        <div className="fade-in">
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1.5rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={22} color="#8B5CF6" /> Entrance Exam Cutoffs
            </h2>
            
            <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Check the previous year cutoffs to understand your chances of admission. Cutoffs vary based on category, seat availability, and exam difficulty.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {exams.map(exam => (
                    <button 
                        key={exam}
                        onClick={() => setSelectedExam(exam)}
                        style={{
                            padding: '8px 16px',
                            background: selectedExam === exam ? '#0F172A' : '#F8FAFC',
                            color: selectedExam === exam ? 'white' : '#475569',
                            border: selectedExam === exam ? '1px solid #0F172A' : '1px solid #E2E8F0',
                            borderRadius: '30px',
                            fontWeight: '700',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {exam}
                    </button>
                ))}
            </div>

            <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                <div style={{ padding: '1.25rem 1.5rem', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '800', color: '#0F172A' }}>{selectedExam} Cutoffs (General Category)</h3>
                    <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <TrendingUp size={14} /> Percentile/Score
                    </span>
                </div>
                
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ background: '#ffffff', borderBottom: '2px solid #F1F5F9' }}>
                                <th style={{ padding: '1rem 1.5rem', color: '#64748B', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Course</th>
                                <th style={{ padding: '1rem 1.5rem', color: '#64748B', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Round 1</th>
                                <th style={{ padding: '1rem 1.5rem', color: '#64748B', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Round 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cutoffData[selectedExam].map((row, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                    <td style={{ padding: '1rem 1.5rem', color: '#0F172A', fontWeight: '600', fontSize: '0.95rem' }}>{row.course}</td>
                                    <td style={{ padding: '1rem 1.5rem', color: '#0F172A', fontWeight: '700', fontSize: '0.95rem' }}>{row.round1}</td>
                                    <td style={{ padding: '1rem 1.5rem', color: '#475569', fontWeight: '500', fontSize: '0.95rem' }}>{row.round2}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <p style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '1.5rem', fontStyle: 'italic' }}>* Note: Cutoffs are indicative based on 2023 data. Official cutoffs for 2024 will be updated post counseling.</p>
        </div>
    );
}
