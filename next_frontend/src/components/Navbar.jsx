"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeAll = () => {
        setIsOpen(false);
        setDropdownOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link href="/" className="nav-logo">
                    <Image src="/new_logo.png" alt="PathUp Logo" width={40} height={40} className="custom-logo" priority />
                    <span>PathUp</span>
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link href="/" onClick={closeAll}>Home</Link>
                    <Link href="/careers" onClick={closeAll}>Career Paths</Link>
                    <Link href="/courses" onClick={closeAll}>Courses</Link>
                    <Link href="/colleges" onClick={closeAll}>College Finder</Link>

                    <div
                        className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <button className="nav-dropdown-trigger" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            Explore <ChevronDown size={16} className={`chevron ${dropdownOpen ? 'rotated' : ''}`} />
                        </button>
                        <div className="nav-dropdown-menu">
                            <Link href="/admissions" onClick={closeAll}>🏢 Admissions</Link>
                            <Link href="/exams" onClick={closeAll}>📝 Exams</Link>
                            <Link href="/scholarships" onClick={closeAll}>🎓 Scholarships</Link>
                            <Link href="/ambassador" onClick={closeAll}>🌟 Ambassador</Link>
                        </div>
                    </div>

                    <Link href="/about" onClick={closeAll}>About Us</Link>
                    <div className="nav-actions">
                        <button className="btn-talk-counsellor">
                            <GraduationCap size={18} /> Talk to Counsellor
                        </button>
                    </div>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
