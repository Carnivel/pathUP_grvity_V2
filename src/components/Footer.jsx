import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logoImage from '../assets/new_logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <img src={logoImage} alt="PathUp Logo" className="custom-logo" />
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
                        <Link to="/colleges">College Finder</Link>
                        <Link to="/courses">Courses</Link>
                        <Link to="/exams">Exams</Link>
                        <Link to="/careers">Career Paths</Link>
                        <Link to="/scholarships">Scholarships</Link>
                    </div>

                    <div className="link-group">
                        <h3>Company</h3>
                        <Link to="/about">About Us</Link>
                        <Link to="/careers">Careers</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/blog">Blog</Link>
                    </div>

                    <div className="link-group">
                        <h3>Legal</h3>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/cookies">Cookie Policy</Link>
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
