
import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Portfolio', href: '#gallery' },
        { label: 'Occasions', href: '#services' },
        { label: 'Echoes', href: '#feedback' },
        { label: 'Inquiry', href: '#inquiry' }
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleMobileLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <span className="logo-text accent-gradient">Amritha</span>
                    <span className="logo-subtext">Hair & Makeup</span>
                </div>

                {/* Desktop Links */}
                <div className="navbar-links">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="nav-link"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a href="#inquiry" className="secure-date-btn">
                        Secure Date
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="mobile-nav-link"
                        onClick={handleMobileLinkClick}
                    >
                        {item.label}
                    </a>
                ))}
                <a
                    href="#inquiry"
                    className="mobile-secure-btn"
                    onClick={handleMobileLinkClick}
                >
                    Secure Date
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
