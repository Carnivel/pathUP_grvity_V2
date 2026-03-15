"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import PageTransition from '../../components/PageTransition';
import {
    Award, Users, TrendingUp, Shield, ChevronRight, ArrowRight, Sparkles,
    Star, BookOpen, GraduationCap, Target, Lightbulb, Zap, Heart,
    CheckCircle2, ChevronDown, Link2, BarChart3, FileText, UserCheck,
    Megaphone, Share2, HandHeart, Gift, DollarSign, Trophy, Compass,
    ClipboardList, MessageSquare, Mail, Phone, School, MapPin, User
} from 'lucide-react';
import './Ambassador.css';

const Ambassador = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '', schoolName: '', city: '', grade: '',
        phone: '', email: '', whyJoin: '', socialLinks: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, send formData to backend here
        console.log('Ambassador application submitted:', formData);
        setFormSubmitted(true);
    };

    const benefits = [
        { icon: <DollarSign size={28} />, title: 'Earn Referral Rewards', description: 'Earn rewards for every successful admission that happens through your referral link.', color: '#059669' },
        { icon: <Award size={28} />, title: 'Official Certificate', description: 'Receive an official PathUp Ambassador certificate to boost your resume and LinkedIn.', color: '#4F46E5' },
        { icon: <TrendingUp size={28} />, title: 'Leadership Experience', description: 'Develop real-world leadership, communication, and networking skills while still in school.', color: '#D97706' },
        { icon: <Users size={28} />, title: 'Build Your Network', description: 'Connect with students, educational institutions, and the PathUp team across India.', color: '#06B6D4' },
        { icon: <Star size={28} />, title: 'Resume Builder', description: 'Stand out in college applications and interviews with a verified ambassador role.', color: '#EC4899' },
        { icon: <Gift size={28} />, title: 'Exclusive Perks', description: 'Get early access to new features, special events, and ambassador-only merchandise.', color: '#8B5CF6' },
    ];

    const steps = [
        { step: '01', title: 'Apply Online', description: 'Fill out the simple application form below with your details and tell us why you want to be an ambassador.', icon: <ClipboardList size={28} /> },
        { step: '02', title: 'Get Selected', description: 'Our team reviews applications and selects 1-2 ambassadors per school to maintain quality and accountability.', icon: <UserCheck size={28} /> },
        { step: '03', title: 'Receive Your Tools', description: 'Get your unique referral link, ambassador dashboard access, marketing materials, and training resources.', icon: <Link2 size={28} /> },
        { step: '04', title: 'Start Helping Students', description: 'Guide your schoolmates to explore colleges and courses on PathUp. Earn rewards for every successful referral!', icon: <Megaphone size={28} /> },
    ];

    const responsibilities = [
        'Inform students in your school about PathUp and its features',
        'Share your unique referral link with classmates and juniors',
        'Help students explore courses, colleges, and admission details',
        'Encourage students to register and apply through PathUp',
        'Represent PathUp positively within your school community',
        'Provide feedback to the PathUp team to improve the platform',
    ];

    const rewards = [
        { tier: 'Registration', description: 'A student registers on PathUp through your link', reward: 'Points + Badge', icon: <UserCheck size={22} />, color: '#06B6D4' },
        { tier: 'Application', description: 'A student submits a college application via PathUp', reward: 'Bonus Points', icon: <FileText size={22} />, color: '#D97706' },
        { tier: 'Admission', description: 'A student successfully takes admission through PathUp', reward: 'Referral Reward Payout', icon: <GraduationCap size={22} />, color: '#059669' },
    ];

    const eligibility = [
        'Currently studying in Class 11, Class 12, or a recent 12th graduate',
        'Good communication skills (both online and offline)',
        'Active participant in school activities and community',
        'Genuine interest in helping peers make better education decisions',
        'Access to a smartphone or computer with internet',
        'Only 1-2 ambassadors are selected per school',
    ];

    const tools = [
        { icon: <Link2 size={24} />, title: 'Unique Referral Link', description: 'A personalized link to track all students coming from your school.' },
        { icon: <BarChart3 size={24} />, title: 'Ambassador Dashboard', description: 'Track registrations, applications, admissions, and your referral rewards in real time.' },
        { icon: <DollarSign size={24} />, title: 'Referral Reward Tracker', description: 'See your pending and confirmed earnings with transparent payment history.' },
        { icon: <Megaphone size={24} />, title: 'Marketing Materials', description: 'Ready-to-use posters, social media templates, and shareable content.' },
        { icon: <Award size={24} />, title: 'Official Certificate', description: 'A verifiable PathUp Ambassador certificate after completing the program.' },
        { icon: <Trophy size={24} />, title: 'Leaderboard Access', description: 'Compete with ambassadors nationwide and earn exclusive rewards for top performers.' },
    ];

    const faqs = [
        { q: 'How many ambassadors are selected per school?', a: 'We select only 1-2 ambassadors per school to ensure quality representation and accountability. This makes the role more exclusive and impactful.' },
        { q: 'When are referral rewards paid?', a: 'Referral rewards are paid only after admission verification is complete. This ensures transparency and prevents misuse. You can track your pending and confirmed earnings on the dashboard.' },
        { q: 'Do I need prior experience?', a: 'No prior experience is required! We provide training, resources, and ongoing support. We look for enthusiasm, communication skills, and genuine interest in helping fellow students.' },
        { q: 'Is there any registration fee?', a: 'Absolutely not. The PathUp Ambassador Program is 100% free to join. There are no hidden charges or fees at any point.' },
        { q: 'Can I participate if I\'m already in college?', a: 'The program is primarily designed for Class 11, Class 12, and recent 12th graduates. However, college freshers who are still connected to their school community may apply.' },
        { q: 'How long does the program last?', a: 'The ambassador role typically lasts for one academic year (or admission season). Top performers may be invited to continue or take on senior ambassador roles.' },
    ];

    return (
        <PageTransition>
            <div className="ambassador-page">
                {/* ===== HERO ===== */}
                <section className="amb-hero">
                    <div className="container">
                        <div className="amb-hero-content">
                            <span className="amb-badge"><Sparkles size={16} /> Ambassador Program</span>
                            <h1>Become a PathUp<br /><span className="text-gradient">School Ambassador</span></h1>
                            <p className="amb-hero-subtitle">
                                Help your peers find the right college and career path — while earning referral rewards,
                                gaining leadership experience, and building your resume. Join India's student-driven
                                education network.
                            </p>
                            <div className="amb-hero-actions">
                                <a href="#apply" className="amb-btn-primary">
                                    Apply Now <ArrowRight size={18} />
                                </a>
                                <a href="#how-it-works" className="amb-btn-outline">
                                    Learn How It Works <ChevronRight size={18} />
                                </a>
                            </div>
                            <div className="amb-hero-trust">
                                <div className="trust-item"><CheckCircle2 size={16} /> 100% Free</div>
                                <div className="trust-item"><CheckCircle2 size={16} /> Official Certificate</div>
                                <div className="trust-item"><CheckCircle2 size={16} /> Earn Referral Rewards</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== WHAT IS IT ===== */}
                <section className="amb-what">
                    <div className="container">
                        <div className="amb-what-grid">
                            <div className="amb-what-text">
                                <span className="amb-section-badge"><Target size={16} /> The Program</span>
                                <h2>What is the PathUp<br />Ambassador Program?</h2>
                                <p>
                                    Selected ambassadors become the <strong>official student representatives</strong> of PathUp
                                    in their schools. Your role is to help fellow students discover the right colleges,
                                    courses, and career paths using the PathUp platform.
                                </p>
                                <p>
                                    You'll receive a <strong>unique referral link</strong> that lets PathUp track every student
                                    that comes through your school. When students register, apply, or successfully take
                                    admission through PathUp — <strong>you earn referral rewards</strong>.
                                </p>
                                <p>
                                    It's not just about earning — it's about becoming a <strong>student leader</strong> who
                                    makes a real difference in the lives of your schoolmates.
                                </p>
                            </div>
                            <div className="amb-what-visual">
                                <div className="amb-visual-card vc-1">
                                    <Share2 size={24} />
                                    <div>
                                        <strong>Share Your Link</strong>
                                        <span>Spread the word in your school</span>
                                    </div>
                                </div>
                                <div className="amb-visual-card vc-2">
                                    <HandHeart size={24} />
                                    <div>
                                        <strong>Help Students Decide</strong>
                                        <span>Guide peers to the right path</span>
                                    </div>
                                </div>
                                <div className="amb-visual-card vc-3">
                                    <Gift size={24} />
                                    <div>
                                        <strong>Earn Rewards</strong>
                                        <span>Referral reward on every admission</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== BENEFITS ===== */}
                <section className="amb-benefits">
                    <div className="container">
                        <div className="amb-section-center">
                            <span className="amb-section-badge"><Star size={16} /> Benefits</span>
                            <h2>Why Become an Ambassador?</h2>
                            <p>More than just a volunteering role — it's a launchpad for your future.</p>
                        </div>
                        <div className="amb-benefits-grid">
                            {benefits.map((b, idx) => (
                                <div key={idx} className="amb-benefit-card" style={{ '--accent': b.color }}>
                                    <div className="amb-benefit-icon" style={{ background: `${b.color}12`, color: b.color }}>
                                        {b.icon}
                                    </div>
                                    <h3>{b.title}</h3>
                                    <p>{b.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== HOW IT WORKS ===== */}
                <section className="amb-how" id="how-it-works">
                    <div className="container">
                        <div className="amb-section-center">
                            <span className="amb-section-badge"><Compass size={16} /> Process</span>
                            <h2>How It Works</h2>
                            <p>Four simple steps to become a PathUp Ambassador.</p>
                        </div>
                        <div className="amb-steps-grid">
                            {steps.map((s, idx) => (
                                <div key={idx} className="amb-step-card">
                                    <div className="amb-step-number">{s.step}</div>
                                    <div className="amb-step-icon">{s.icon}</div>
                                    <h3>{s.title}</h3>
                                    <p>{s.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== RESPONSIBILITIES ===== */}
                <section className="amb-responsibilities">
                    <div className="container">
                        <div className="amb-resp-grid">
                            <div className="amb-resp-text">
                                <span className="amb-section-badge"><ClipboardList size={16} /> Your Role</span>
                                <h2>Ambassador Responsibilities</h2>
                                <p>As a PathUp Ambassador, you'll take on meaningful tasks that develop your skills and help your community.</p>
                            </div>
                            <div className="amb-resp-list">
                                {responsibilities.map((r, idx) => (
                                    <div key={idx} className="amb-resp-item">
                                        <CheckCircle2 size={20} color="#059669" />
                                        <span>{r}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== REWARDS ===== */}
                <section className="amb-rewards">
                    <div className="container">
                        <div className="amb-section-center">
                            <span className="amb-section-badge"><Gift size={16} /> Rewards</span>
                            <h2>How You Earn</h2>
                            <p>Transparent reward system — you earn at every stage of the student journey.</p>
                        </div>
                        <div className="amb-rewards-grid">
                            {rewards.map((r, idx) => (
                                <div key={idx} className="amb-reward-card" style={{ '--accent': r.color }}>
                                    <div className="amb-reward-header">
                                        <div className="amb-reward-icon" style={{ background: `${r.color}15`, color: r.color }}>
                                            {r.icon}
                                        </div>
                                        <span className="amb-reward-tier">{r.tier}</span>
                                    </div>
                                    <p className="amb-reward-desc">{r.description}</p>
                                    <div className="amb-reward-value" style={{ color: r.color }}>{r.reward}</div>
                                </div>
                            ))}
                        </div>
                        <div className="amb-reward-note">
                            <Shield size={18} />
                            <p>Payments are processed only after admission verification to ensure transparency and prevent misuse.</p>
                        </div>
                    </div>
                </section>

                {/* ===== ELIGIBILITY ===== */}
                <section className="amb-eligibility">
                    <div className="container">
                        <div className="amb-elig-grid">
                            <div className="amb-elig-text">
                                <span className="amb-section-badge"><UserCheck size={16} /> Eligibility</span>
                                <h2>Who Can Apply?</h2>
                                <p>We're looking for motivated students who are active in their school community and genuinely want to help their peers.</p>
                            </div>
                            <div className="amb-elig-list">
                                {eligibility.map((e, idx) => (
                                    <div key={idx} className="amb-elig-item">
                                        <CheckCircle2 size={20} color="#4F46E5" />
                                        <span>{e}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== TOOLS ===== */}
                <section className="amb-tools">
                    <div className="container">
                        <div className="amb-section-center">
                            <span className="amb-section-badge"><Zap size={16} /> Your Toolkit</span>
                            <h2>Tools We Provide</h2>
                            <p>Everything you need to succeed as an ambassador — we've got you covered.</p>
                        </div>
                        <div className="amb-tools-grid">
                            {tools.map((t, idx) => (
                                <div key={idx} className="amb-tool-card">
                                    <div className="amb-tool-icon">{t.icon}</div>
                                    <h4>{t.title}</h4>
                                    <p>{t.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== APPLICATION FORM ===== */}
                <section className="amb-apply" id="apply">
                    <div className="container">
                        <div className="amb-apply-wrapper">
                            <div className="amb-apply-info">
                                <span className="amb-section-badge"><FileText size={16} /> Apply Now</span>
                                <h2>Ready to Make a Difference?</h2>
                                <p>Fill out this short form and our team will review your application. Selected ambassadors will be contacted within 5 working days.</p>
                                <div className="amb-apply-perks">
                                    <div className="amb-apply-perk"><CheckCircle2 size={18} color="#059669" /> 100% Free to Apply</div>
                                    <div className="amb-apply-perk"><CheckCircle2 size={18} color="#059669" /> No Prior Experience Required</div>
                                    <div className="amb-apply-perk"><CheckCircle2 size={18} color="#059669" /> Only 1-2 Per School</div>
                                    <div className="amb-apply-perk"><CheckCircle2 size={18} color="#059669" /> Get Certified</div>
                                </div>
                            </div>
                            <div className="amb-apply-form-wrap">
                                {formSubmitted ? (
                                    <div className="amb-form-success">
                                        <CheckCircle2 size={56} color="#059669" />
                                        <h3>Application Submitted!</h3>
                                        <p>Thank you for applying to the PathUp Ambassador Program. Our team will review your application and get back to you within 5 working days.</p>
                                    </div>
                                ) : (
                                    <form className="amb-form" onSubmit={handleSubmit}>
                                        <div className="amb-form-row">
                                            <div className="amb-form-group">
                                                <label><User size={14} /> Full Name *</label>
                                                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Your full name" required />
                                            </div>
                                            <div className="amb-form-group">
                                                <label><Mail size={14} /> Email Address *</label>
                                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@email.com" required />
                                            </div>
                                        </div>
                                        <div className="amb-form-row">
                                            <div className="amb-form-group">
                                                <label><School size={14} /> School Name *</label>
                                                <input type="text" name="schoolName" value={formData.schoolName} onChange={handleInputChange} placeholder="Your school name" required />
                                            </div>
                                            <div className="amb-form-group">
                                                <label><MapPin size={14} /> City *</label>
                                                <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="Your city" required />
                                            </div>
                                        </div>
                                        <div className="amb-form-row">
                                            <div className="amb-form-group">
                                                <label><GraduationCap size={14} /> Class / Grade *</label>
                                                <select name="grade" value={formData.grade} onChange={handleInputChange} required>
                                                    <option value="">Select your class</option>
                                                    <option value="11">Class 11</option>
                                                    <option value="12">Class 12</option>
                                                    <option value="12-pass">12th Graduate</option>
                                                    <option value="college-1">College 1st Year</option>
                                                </select>
                                            </div>
                                            <div className="amb-form-group">
                                                <label><Phone size={14} /> Phone Number *</label>
                                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" required />
                                            </div>
                                        </div>
                                        <div className="amb-form-group full-width">
                                            <label><MessageSquare size={14} /> Why do you want to be a PathUp Ambassador? *</label>
                                            <textarea name="whyJoin" value={formData.whyJoin} onChange={handleInputChange} rows="4" placeholder="Tell us what motivates you and how you plan to help students in your school..." required></textarea>
                                        </div>
                                        <div className="amb-form-group full-width">
                                            <label><Share2 size={14} /> Social Media Links (Optional)</label>
                                            <input type="text" name="socialLinks" value={formData.socialLinks} onChange={handleInputChange} placeholder="Instagram, LinkedIn, or any other profile links" />
                                        </div>
                                        <button type="submit" className="amb-submit-btn">
                                            Submit Application <ArrowRight size={18} />
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== FAQ ===== */}
                <section className="amb-faq">
                    <div className="container">
                        <div className="amb-section-center">
                            <span className="amb-section-badge"><Lightbulb size={16} /> FAQ</span>
                            <h2>Frequently Asked Questions</h2>
                            <p>Quick answers to common questions about the ambassador program.</p>
                        </div>
                        <div className="amb-faq-list">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className={`amb-faq-item ${openFaq === idx ? 'open' : ''}`}>
                                    <button className="amb-faq-q" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                                        <span>{faq.q}</span>
                                        <ChevronDown size={20} className="amb-faq-chevron" />
                                    </button>
                                    <div className="amb-faq-a">
                                        <p>{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== CLOSING CTA ===== */}
                <section className="amb-closing">
                    <div className="container">
                        <div className="amb-closing-card">
                            <div className="amb-closing-content">
                                <h2>Join the Movement. Become a PathUp Ambassador.</h2>
                                <p>Be part of a growing community of student leaders helping thousands make smarter college decisions. It's free, rewarding, and looks great on your resume.</p>
                                <div className="amb-closing-actions">
                                    <a href="#apply" className="amb-btn-primary">
                                        Apply Now <ArrowRight size={18} />
                                    </a>
                                    <Link href="/careers" className="amb-btn-outline">
                                        Explore Careers <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Ambassador;
