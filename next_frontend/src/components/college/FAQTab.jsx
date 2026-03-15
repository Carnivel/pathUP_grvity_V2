"use client";
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQTab({ college }) {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: `What are the top courses offered at ${college.name}?`,
            a: `${college.name} offers a wide range of undergraduate and postgraduate courses across engineering, management, science, and arts disciplines. The most popular courses include B.Tech in Computer Science, MBA, and B.Sc programs. Please refer to the "Courses & Fees" tab for a detailed listing.`
        },
        {
            q: `What is the admission process?`,
            a: `Admission is based on merit and entrance exam scores. Students need to register online, fill out the application form, upload required documents, and pay the application fee. Check the "Admissions" tab for detailed steps and important dates.`
        },
        {
            q: `Does the college provide hostel accommodation?`,
            a: `Yes, the college provides separate hostel facilities for boys and girls with modern amenities including Wi-Fi, mess, laundry, and recreational areas. Hostel allotment is on a first-come, first-served basis at the time of admission.`
        },
        {
            q: `What are the placement statistics?`,
            a: `The college has a dedicated placement cell that facilitates campus recruitment. Top recruiters include companies like TCS, Infosys, Wipro, and Cognizant. Refer to the "Placements" tab for detailed salary packages and recruiter information.`
        },
        {
            q: `Are scholarships available for economically weaker sections?`,
            a: `Yes, the college offers various scholarships including merit-based, category-based (SC/ST/OBC), and government scholarships through the National Scholarship Portal. Students can also apply for institution-specific financial aid programs.`
        },
        {
            q: `What is the fee structure?`,
            a: `Fee structures vary by course and program. Please visit the "Courses & Fees" tab for detailed information on tuition fees, hostel fees, and other charges for each program offered.`
        },
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="fade-in">
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HelpCircle size={22} color="#3B82F6" /> Frequently Asked Questions
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                Find answers to the most common questions about {college.name}.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {faqs.map((faq, i) => (
                    <div key={i} style={{ 
                        background: openIndex === i ? '#ffffff' : '#F8FAFC',
                        border: openIndex === i ? '1px solid #CBD5E1' : '1px solid #E2E8F0',
                        borderRadius: '10px', 
                        overflow: 'hidden',
                        transition: 'all 0.2s ease'
                    }}>
                        <button 
                            onClick={() => toggle(i)}
                            style={{ 
                                width: '100%', 
                                padding: '1.25rem 1.5rem', 
                                background: 'none', 
                                border: 'none', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                cursor: 'pointer',
                                textAlign: 'left',
                                gap: '1rem'
                            }}
                        >
                            <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0F172A', lineHeight: '1.4' }}>{faq.q}</span>
                            {openIndex === i ? 
                                <ChevronUp size={20} color="#64748B" style={{ flexShrink: 0 }} /> : 
                                <ChevronDown size={20} color="#64748B" style={{ flexShrink: 0 }} />
                            }
                        </button>
                        {openIndex === i && (
                            <div style={{ padding: '0 1.5rem 1.25rem 1.5rem' }}>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', lineHeight: '1.7' }}>{faq.a}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '8px' }}>Still have questions?</p>
                <button style={{ padding: '10px 24px', background: '#0F172A', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}>
                    Contact Admissions Office
                </button>
            </div>
        </div>
    );
}
