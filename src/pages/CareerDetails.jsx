import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import {
    ArrowLeft, Briefcase, TrendingUp, DollarSign, ChevronRight, CheckCircle2,
    Code, ShieldCheck, Cloud, Blocks, Gamepad2, Server, Cpu, Glasses, Wifi, Database, CheckCircle,
    Stethoscope, HeartPulse, Smile, Pill, Activity, PawPrint, Brain, Apple, Microscope, Camera, Globe,
    BarChart3, Megaphone, Landmark, Users, Truck, Target, Clipboard, Rocket, BarChart, Lightbulb,
    Palette, Building2, PenTool, Image as ImageIcon, Video, Scissors, Home, Box, Type,
    Scale, Shield, FileText, Percent, Award, Music,
    Layers, Zap, Eye, MessageSquare, Dna, PieChart, Map, Layout
} from 'lucide-react';
import { careers } from '../data/careersData';
import './CareerDetails.css';

// Same helper function to get icons as used in CareerPaths
const getIcon = (iconName, size = 40) => {
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

const CareerDetails = () => {
    const { careerId } = useParams();
    const navigate = useNavigate();
    const [career, setCareer] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundCareer = careers.find(c => c.id === parseInt(careerId));
        if (foundCareer) {
            setCareer(foundCareer);
        } else {
            navigate('/careers');
        }
    }, [careerId, navigate]);

    if (!career) return null;

    // Auto-generate a logical 4-step roadmap based on the career data
    const generateRoadmap = () => {
        return [
            {
                step: 'Step 1',
                title: 'Education & Foundation',
                description: `Acquire the foundational knowledge through ${career.education}. Build your core understanding of the industry basics.`,
            },
            {
                step: 'Step 2',
                title: 'Skill Development & Internships',
                description: `Focus on mastering key skills: ${career.skills.join(', ')}. Engage in hands-on projects, certifications, or entry-level internships to gain practical exposure.`,
            },
            {
                step: 'Step 3',
                title: 'Entry to Mid-Level Experience',
                description: `Start working in the field and climbing the ladder. Expect to earn towards the earlier segment of ${career.avgSalary} as you establish your expertise and specialize.`,
            },
            {
                step: 'Step 4',
                title: 'Senior / Leadership Roles',
                description: `Transition into top roles such as ${career.topRoles.join(' or ')}. At this stage, you will focus on strategy, leadership, and driving major impact within the organization.`,
            }
        ];
    };

    const roadmapData = generateRoadmap();

    return (
        <PageTransition>
            <div className="career-details-page">
                {/* Header Banner */}
                <div className="career-details-header" style={{ '--career-color': career.color }}>
                    <div className="container">
                        <button className="back-btn" onClick={() => navigate('/careers')}>
                            <ArrowLeft size={20} /> Back to Careers
                        </button>

                        <div className="header-content">
                            <div className="header-icon-wrap" style={{ color: career.color }}>
                                {getIcon(career.icon, 48)}
                            </div>
                            <div className="header-text">
                                <span className="category-badge">{career.category}</span>
                                <h1>{career.title}</h1>

                                <div className="header-meta">
                                    <div className="meta-item">
                                        <TrendingUp size={16} /> Growth: {career.growth}
                                    </div>
                                    <div className="meta-item">
                                        <DollarSign size={16} /> Avg Salary: {career.avgSalary}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="container details-container">
                    <div className="details-main">
                        {/* Profile Overview */}
                        <section className="detail-section">
                            <h2>Profile Overview</h2>
                            <p className="about-text">{career.description}</p>

                            {career.importantNote && (
                                <div className="important-note" style={{ borderLeft: `4px solid ${career.color}`, backgroundColor: `${career.color}10`, padding: '1rem', marginTop: '1.5rem', marginBottom: '1.5rem', borderRadius: '0 8px 8px 0' }}>
                                    <h4 style={{ color: career.color, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                        <Lightbulb size={20} /> Essential Insight
                                    </h4>
                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', margin: 0 }}>{career.importantNote}</p>
                                </div>
                            )}

                            <div className="skills-highlight-box" style={{ borderColor: `${career.color}50`, background: `${career.color}0A` }}>
                                <h3><Target size={20} color={career.color} /> Core Skills Required</h3>
                                <div className="detail-skills-list">
                                    {career.skills.map(skill => (
                                        <span key={skill} className="detail-skill-tag" style={{ color: career.color, borderColor: `${career.color}40`, background: 'white' }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Roadmap Section */}
                        <section className="detail-section roadmap-section">
                            <h2>Career Roadmap</h2>
                            <p className="roadmap-intro">Your guided path from education to leadership in this field.</p>

                            <div className="career-timeline">
                                {roadmapData.map((stage, index) => (
                                    <div key={index} className="career-timeline-item" style={{ '--career-color': career.color }}>
                                        <div className="career-timeline-marker">
                                            <CheckCircle2 fill="white" size={24} color={career.color} />
                                        </div>
                                        <div className="career-timeline-content">
                                            <span className="timeline-step">{stage.step}</span>
                                            <h3>{stage.title}</h3>
                                            <p>{stage.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="details-sidebar">
                        <div className="career-card-vertical" style={{ borderTop: `4px solid ${career.color}` }}>
                            <div className="vertical-header">
                                <Briefcase size={24} color={career.color} />
                                <h3>Education Pathway</h3>
                            </div>
                            <p className="education-req">{career.education}</p>
                            <Link to="/courses" className="btn-secondary full-width" style={{ color: career.color, borderColor: career.color }}>
                                Find Courses
                            </Link>
                        </div>

                        {career.isRightForYou && Array.isArray(career.isRightForYou) && career.isRightForYou.length > 0 && (
                            <div className="career-card-vertical">
                                <div className="vertical-header">
                                    <CheckCircle size={24} color={career.color} />
                                    <h3>Is This Right For You?</h3>
                                </div>
                                <ul className="top-roles-list" style={{ marginTop: '0.5rem' }}>
                                    {career.isRightForYou.map((point, idx) => (
                                        <li key={idx} style={{ alignItems: 'flex-start', lineHeight: '1.4', marginBottom: '0.75rem' }}>
                                            <div style={{ marginTop: '2px', marginRight: '4px' }}>
                                                <ChevronRight size={16} color={career.color} style={{ minWidth: '16px' }} />
                                            </div>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="career-card-vertical">
                            <div className="vertical-header">
                                <TrendingUp size={24} color={career.color} />
                                <h3>Future Top Roles</h3>
                            </div>
                            <ul className="top-roles-list">
                                {[...career.topRoles, ...(career.futureRoles || [])].map((role, idx) => (
                                    <li key={idx}>
                                        <ChevronRight size={16} color={career.color} /> {role}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {career.industriesHiring && career.industriesHiring.length > 0 && (
                            <div className="career-card-vertical">
                                <div className="vertical-header">
                                    <Building2 size={24} color={career.color} />
                                    <h3>Industries Hiring</h3>
                                </div>
                                <div className="detail-skills-list" style={{ marginTop: '1rem' }}>
                                    {career.industriesHiring.map((industry, idx) => (
                                        <span key={idx} className="detail-skill-tag" style={{ border: `1px solid var(--color-border)`, background: 'white', color: 'var(--color-text)' }}>
                                            {industry}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default CareerDetails;
