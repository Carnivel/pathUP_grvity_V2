"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import PageTransition from '../../components/PageTransition';
import {
    Briefcase, TrendingUp, DollarSign, ChevronRight, ArrowRight,
    Code, ShieldCheck, Cloud, Blocks, Gamepad2, Server, Cpu, Glasses, Wifi, Database, CheckCircle,
    Stethoscope, HeartPulse, Smile, Pill, Activity, PawPrint, Brain, Apple, Microscope, Camera, Globe,
    BarChart3, Megaphone, Landmark, Users, Truck, Target, Clipboard, Rocket, BarChart, Lightbulb,
    Palette, Building2, PenTool, Image as ImageIcon, Video, Scissors, Home, Box, Type,
    Scale, Shield, FileText, Percent, Award, Music,
    Layers, Zap, Eye, MessageSquare, Dna, PieChart, Map, Layout
} from 'lucide-react';
import { careers, careerCategories } from '../../data/careersData';
import './CareerPaths.css';

const getIcon = (iconName, size = 28) => {
    const icons = {
        code: <Code size={size} />, shieldcheck: <ShieldCheck size={size} />, cloud: <Cloud size={size} />, blocks: <Blocks size={size} />, gamepad: <Gamepad2 size={size} />, server: <Server size={size} />, cpu: <Cpu size={size} />, glasses: <Glasses size={size} />, wifi: <Wifi size={size} />, database: <Database size={size} />, checkcircle: <CheckCircle size={size} />,
        stethoscope: <Stethoscope size={size} />, heartpulse: <HeartPulse size={size} />, smile: <Smile size={size} />, pill: <Pill size={size} />, activity: <Activity size={size} />, pawprint: <PawPrint size={size} />, brain: <Brain size={size} />, apple: <Apple size={size} />, microscope: <Microscope size={size} />, camera: <Camera size={size} />, globe: <Globe size={size} />,
        barchart: <BarChart3 size={size} />, megaphone: <Megaphone size={size} />, landmark: <Landmark size={size} />, users: <Users size={size} />, truck: <Truck size={size} />, target: <Target size={size} />, clipboard: <Clipboard size={size} />, rocket: <Rocket size={size} />, briefcase: <Briefcase size={size} />, 'bar-chart': <BarChart size={size} />, lightbulb: <Lightbulb size={size} />,
        palette: <Palette size={size} />, building: <Building2 size={size} />, pentool: <PenTool size={size} />, image: <ImageIcon size={size} />, video: <Video size={size} />, scissors: <Scissors size={size} />, home: <Home size={size} />, box: <Box size={size} />, type: <Type size={size} />,
        scale: <Scale size={size} />, shield: <Shield size={size} />, 'file-text': <FileText size={size} />, percent: <Percent size={size} />, award: <Award size={size} />, music: <Music size={size} />,
        layers: <Layers size={size} />, zap: <Zap size={size} />, trending: <TrendingUp size={size} />, 'trending-up': <TrendingUp size={size} />, eye: <Eye size={size} />, 'message-square': <MessageSquare size={size} />, dna: <Dna size={size} />, 'pie-chart': <PieChart size={size} />, map: <Map size={size} />, layout: <Layout size={size} />
    };
    return icons[iconName] || <Briefcase size={size} />;
};

const CareerPaths = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredCareers = activeCategory === 'all'
        ? careers
        : careers.filter(c => c.category === activeCategory);

    return (
        <PageTransition>
            <div className="career-paths-page">
                {/* Hero */}
                <section className="career-hero">
                    <div className="container">
                        <div className="career-hero-content">
                            <span className="badge"><Rocket size={16} /> Explore Careers</span>
                            <h1 className="text-gradient">Discover Your Ideal Career Path</h1>
                            <p className="subtitle">
                                Explore in-demand careers, understand salary expectations, required skills, and chart your journey to success.
                            </p>
                        </div>

                        <div className="career-stats-row">
                            <div className="career-stat-card">
                                <div className="stat-icon" style={{ background: 'rgba(79,70,229,0.1)', color: '#4F46E5' }}><Target size={24} /></div>
                                <div><strong>70+</strong><span>Career Paths</span></div>
                            </div>
                            <div className="career-stat-card">
                                <div className="stat-icon" style={{ background: 'rgba(6,182,212,0.1)', color: '#06B6D4' }}><Users size={24} /></div>
                                <div><strong>1M+</strong><span>Students Guided</span></div>
                            </div>
                            <div className="career-stat-card">
                                <div className="stat-icon" style={{ background: 'rgba(244,63,94,0.1)', color: '#F43F5E' }}><TrendingUp size={24} /></div>
                                <div><strong>95%</strong><span>Satisfaction Rate</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="career-filter-section">
                    <div className="container">
                        <div className="career-filter-bar">
                            {careerCategories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`career-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Career Cards */}
                <section className="career-cards-section">
                    <div className="container">
                        <div className="career-grid">
                            {filteredCareers.map(career => (
                                <div key={career.id} className="career-card">
                                    <div className="career-card-header" style={{ '--accent': career.color }}>
                                        <div className="career-icon-wrap" style={{ background: `${career.color}15`, color: career.color }}>
                                            {getIcon(career.icon)}
                                        </div>
                                        <div className="growth-badge">
                                            <TrendingUp size={14} /> {career.growth}
                                        </div>
                                    </div>

                                    <h3>{career.title}</h3>
                                    <p className="career-desc">{career.description}</p>

                                    <div className="career-meta">
                                        <div className="meta-item">
                                            <DollarSign size={16} />
                                            <span><strong>Avg Salary:</strong> {career.avgSalary}</span>
                                        </div>
                                        <div className="meta-item">
                                            <Briefcase size={16} />
                                            <span><strong>Education:</strong> {career.education}</span>
                                        </div>
                                    </div>

                                    <div className="career-skills">
                                        <span className="skills-label">Key Skills</span>
                                        <div className="skills-list">
                                            {career.skills.map(skill => (
                                                <span key={skill} className="skill-tag" style={{ borderColor: `${career.color}40`, color: career.color }}>{skill}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="career-roles">
                                        <span className="roles-label">Top Roles</span>
                                        {career.topRoles.map(role => (
                                            <div key={role} className="role-item">
                                                <ChevronRight size={14} color={career.color} />
                                                <span>{role}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={`/careers/${career.id}`} className="btn-explore" style={{ background: career.color, textDecoration: 'none', display: 'flex' }}>
                                        Explore Path <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default CareerPaths;
