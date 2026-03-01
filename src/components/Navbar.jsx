import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X, ChevronDown } from 'lucide-react';
import logoImage from '../assets/new_logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeAll = () => {
        setIsOpen(false);
        setDropdownOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <img src={logoImage} alt="PathUp Logo" className="custom-logo" />
                    <span>PathUp</span>
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={closeAll}>Home</Link>
                    <Link to="/careers" onClick={closeAll}>Career Paths</Link>
                    <Link to="/courses" onClick={closeAll}>Courses</Link>
                    <Link to="/colleges" onClick={closeAll}>College Finder</Link>

                    <div
                        className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <button className="nav-dropdown-trigger" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            Explore <ChevronDown size={16} className={`chevron ${dropdownOpen ? 'rotated' : ''}`} />
                        </button>
                        <div className="nav-dropdown-menu">
                            <Link to="/admissions" onClick={closeAll}>🏢 Admissions</Link>
                            <Link to="/exams" onClick={closeAll}>📝 Exams</Link>
                            <Link to="/scholarships" onClick={closeAll}>🎓 Scholarships</Link>
                        </div>
                    </div>

                    <Link to="/about" onClick={closeAll}>About Us</Link>
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
