import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Link href="/" className="footer-logo">
                        <Image src="/new_logo.png" alt="PathUp Logo" width={40} height={40} className="custom-logo" />
                        <span>PathUp</span>
                    </Link>
                    <p className="footer-description">
                        Your personalized guide to finding the perfect college and accelerating your career journey.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h3>Explore</h3>
                        <Link href="/colleges">College Finder</Link>
                        <Link href="/courses">Courses</Link>
                        <Link href="/exams">Exams</Link>
                        <Link href="/careers">Career Paths</Link>
                        <Link href="/scholarships">Scholarships</Link>
                    </div>

                    <div className="link-group">
                        <h3>Company</h3>
                        <Link href="/about">About Us</Link>
                        <Link href="/careers">Careers</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/blog">Blog</Link>
                    </div>

                    <div className="link-group">
                        <h3>Legal</h3>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/cookies">Cookie Policy</Link>
                    </div>

                    <div className="link-group">
                        <h3>Locations</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-light)' }}>
                            <MapPin size={16} /> <span>Kochi</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-light)' }}>
                            <MapPin size={16} /> <span>Alappuzha</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-light)' }}>
                            <MapPin size={16} /> <span>Trivandrum</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} PathUp. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
