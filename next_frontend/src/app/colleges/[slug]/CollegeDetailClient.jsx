"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Building, Users, BookOpen, TrendingUp, CheckCircle, GraduationCap, MapPin, Briefcase, Star, FileText, Target, Award, HelpCircle } from 'lucide-react';
import CollegeHero from '../../../components/college/CollegeHero';
import CollegeActionStrip from '../../../components/college/CollegeActionStrip';
import OverviewTab from '../../../components/college/OverviewTab';
import CoursesAndFeesTab from '../../../components/college/CoursesAndFeesTab';
import PlacementsTab from '../../../components/college/PlacementsTab';
import CampusLifeTab from '../../../components/college/CampusLifeTab';
import ReviewsTab from '../../../components/college/ReviewsTab';
import AdmissionsTab from '../../../components/college/AdmissionsTab';
import CutoffsTab from '../../../components/college/CutoffsTab';
import ScholarshipsTab from '../../../components/college/ScholarshipsTab';
import FAQTab from '../../../components/college/FAQTab';
import CollegeSidebar from '../../../components/college/CollegeSidebar';
import RelatedColleges from '../../../components/college/RelatedColleges';

export default function CollegeDetailClient({ college }) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Overview', icon: <Building size={16} /> },
        { id: 'courses', label: 'Courses & Fees', icon: <BookOpen size={16} /> },
        { id: 'admissions', label: 'Admissions', icon: <FileText size={16} /> },
        { id: 'cutoffs', label: 'Cutoffs', icon: <Target size={16} /> },
        { id: 'placements', label: 'Placements', icon: <TrendingUp size={16} /> },
        { id: 'scholarships', label: 'Scholarships', icon: <Award size={16} /> },
        { id: 'campus', label: 'Campus Life', icon: <Users size={16} /> },
        { id: 'reviews', label: 'Reviews', icon: <Star size={16} /> },
        { id: 'faq', label: 'FAQ', icon: <HelpCircle size={16} /> }
    ];

    return (
        <div className="custom-college-page" style={{ paddingBottom: '4rem', background: '#FAFAFB', minHeight: '100vh', fontFamily: 'var(--font-sans, system-ui, sans-serif)' }}>
            <CollegeHero college={college} />

            <div className="container" style={{ position: 'relative', zIndex: 20 }}>
                <CollegeActionStrip college={college} />

                {/* MAIN CONTENT GRID */}
                <div className="content-grid" style={{ display: 'grid', gap: '2rem', alignItems: 'start' }}>

                    {/* LEFT COLUMN - TABS & CONTENT */}
                    <div className="content-main" style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #F1F5F9', overflow: 'hidden' }}>

                        {/* Sticky Tab Navigation */}
                        <div className="tab-nav-scroll" style={{ 
                            display: 'flex', overflowX: 'auto', padding: '1rem', borderBottom: '1px solid #F1F5F9', gap: '0.5rem', 
                            scrollbarWidth: 'none', position: 'sticky', top: '0', background: 'white', zIndex: 100 
                        }}>
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        whiteSpace: 'nowrap',
                                        padding: '0.6rem 1.2rem',
                                        background: activeTab === tab.id ? '#0F172A' : '#F8FAFC',
                                        border: activeTab === tab.id ? '1px solid #0F172A' : '1px solid #E2E8F0',
                                        color: activeTab === tab.id ? 'white' : '#475569',
                                        fontSize: '0.85rem',
                                        fontWeight: activeTab === tab.id ? '700' : '600',
                                        borderRadius: '30px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        transition: 'all 0.2s ease',
                                        boxShadow: activeTab === tab.id ? '0 4px 12px rgba(15, 23, 42, 0.15)' : 'none'
                                    }}
                                >
                                    {tab.icon} {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* TAB CONTENT RENDERER */}
                        <div style={{ padding: '2rem 1.5rem', minHeight: '500px' }}>
                            {activeTab === 'overview' && <OverviewTab college={college} />}
                            {activeTab === 'courses' && <CoursesAndFeesTab courses={college.courses} />}
                            {activeTab === 'admissions' && <AdmissionsTab college={college} />}
                            {activeTab === 'cutoffs' && <CutoffsTab college={college} />}
                            {activeTab === 'placements' && <PlacementsTab college={college} />}
                            {activeTab === 'scholarships' && <ScholarshipsTab college={college} />}
                            {activeTab === 'campus' && <CampusLifeTab college={college} />}
                            {activeTab === 'reviews' && <ReviewsTab college={college} />}
                            {activeTab === 'faq' && <FAQTab college={college} />}
                        </div>
                    </div>

                    {/* RIGHT COLUMN - SIDEBAR WIDGETS */}
                    <CollegeSidebar college={college} />

                </div>

                {/* RELATED COLLEGES SECTION */}
                <RelatedColleges currentCollege={college} />
            </div>

            {/* Global Responsive & Hover Styles Injection */}
            <style jsx global>{`
                /* Responsive Grid Overrides */
                .content-grid {
                    grid-template-columns: 1fr 300px;
                }
                
                @media (max-width: 992px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                    }
                    .editorial-hero {
                        padding: 6rem 1rem 6rem 1rem !important;
                    }
                    .action-strip {
                        flex-direction: column;
                        align-items: stretch !important;
                        padding: 1rem !important;
                        gap: 1rem;
                    }
                    .action-stats {
                        justify-content: space-between;
                    }
                    .action-buttons {
                        width: 100%;
                    }
                    .action-buttons button, .action-buttons a {
                        flex: 1;
                        justify-content: center;
                    }
                    .hide-mobile {
                        display: none;
                    }
                    .course-card-inner {
                        flex-direction: column;
                    }
                    .course-card-inner > div:last-child {
                        text-align: left !important;
                        align-items: flex-start !important;
                        margin-top: 0.5rem;
                        background: #F8FAFC;
                        padding: 0.5rem;
                        border-radius: 6px;
                        width: 100%;
                        flex-direction: row !important;
                        justify-content: space-between !important;
                    }
                    .tab-nav-scroll::-webkit-scrollbar {
                        display: none;
                    }
                }

                .compact-course-card:hover {
                    border-color: #CBD5E1 !important;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05) !important;
                }
                
                .fade-in {
                    animation: fadeIn 0.3s ease-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
