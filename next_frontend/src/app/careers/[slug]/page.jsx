import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageTransition from '../../../components/PageTransition';
import {
    ArrowLeft, Briefcase, TrendingUp, DollarSign, ChevronRight, CheckCircle2,
    Code, ShieldCheck, Cloud, Blocks, Gamepad2, Server, Cpu, Glasses, Wifi, Database, CheckCircle,
    Stethoscope, HeartPulse, Smile, Pill, Activity, PawPrint, Brain, Apple, Microscope, Camera, Globe,
    BarChart3, Megaphone, Landmark, Users, Truck, Target, Clipboard, Rocket, BarChart, Lightbulb,
    Palette, Building2, PenTool, Image as ImageIcon, Video, Scissors, Home, Box, Type,
    Scale, Shield, FileText, Percent, Award, Music,
    Layers, Zap, Eye, MessageSquare, Dna, PieChart, Map, Layout
} from 'lucide-react';
import { careers } from '../../../data/careersData';
import './CareerDetails.css';

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

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
    return careers.map((career) => ({
        slug: career.id.toString(),
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
        throw new Error("NEXT_PUBLIC_SITE_URL is required but undefined");
    }
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const career = careers.find(c => c.id.toString() === slug);

    if (!career) return { title: 'Career Not Found' };

    return {
        title: `${career.title} - Career Pathway & Salaries`,
        description: career.description?.substring(0, 160) || 'Discover top roles, salary expectations, and skills needed for this career.',
        alternates: {
            canonical: `${baseUrl}/careers/${slug}`,
        },
        openGraph: {
            title: career.title,
            description: career.description?.substring(0, 160),
            url: `${baseUrl}/careers/${slug}`,
        }
    };
}

const CareerDetails = async ({ params }) => {
    const { slug } = await params;
    const career = careers.find(c => c.id.toString() === slug);

    if (!career) {
        notFound();
    }

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
                description: `Focus on mastering key skills: ${career.skills?.join(', ')}. Engage in hands-on projects, certifications, or entry-level internships to gain practical exposure.`,
            },
            {
                step: 'Step 3',
                title: 'Entry to Mid-Level Experience',
                description: `Start working in the field and climbing the ladder. Expect to earn towards the earlier segment of ${career.avgSalary} as you establish your expertise and specialize.`,
            },
            {
                step: 'Step 4',
                title: 'Senior / Leadership Roles',
                description: `Transition into top roles such as ${career.topRoles?.join(' or ')}. At this stage, you will focus on strategy, leadership, and driving major impact within the organization.`,
            }
        ];
    };

    const roadmapData = generateRoadmap();

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!siteUrl) {
        throw new Error("NEXT_PUBLIC_SITE_URL is strictly required to generate absolute JSON-LD URLs.");
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Occupation',
        name: career.title,
        description: career.description,
        estimatedSalary: {
            '@type': 'MonetaryAmountDistribution',
            currency: 'INR',
            duration: 'P1Y'
        },
        url: `${siteUrl}/careers/${slug}`,
        skills: career.skills?.join(', ')
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PageTransition>
                <div className="career-details-page">
                    {/* Header Banner */}
                    <div className="career-details-header" style={{ '--career-color': career.color }}>
                        <div className="container">
                            <Link href="/careers" className="back-btn" style={{ textDecoration: 'none' }}>
                                <ArrowLeft size={20} /> Back to Careers
                            </Link>

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
                                        {career.skills?.map(skill => (
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
                                <Link href={`/courses?search=${encodeURIComponent(career.title)}`} className="btn-secondary full-width" style={{ color: career.color, borderColor: career.color, display: 'flex', textDecoration: 'none' }}>
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
                                    {[...(career.topRoles || []), ...(career.futureRoles || [])].map((role, idx) => (
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
        </>
    );
};

export default CareerDetails;
