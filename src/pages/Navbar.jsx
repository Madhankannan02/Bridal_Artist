
import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Portfolio', href: '#gallery' },
        { label: 'Occasions', href: '#services' },
        { label: 'Echoes', href: '#feedback' },
        { label: 'Inquiry', href: '#inquiry' }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <span className="logo-text accent-gradient">Amritha</span>
                    <span className="logo-subtext">Hair & Makeup</span>
                </div>

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

                <button className="mobile-menu-btn">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
