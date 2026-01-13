
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="brand-details">
                        <span className="footer-logo accent-gradient">Amritha</span>
                        <span className="footer-subtext">Hair & Makeup</span>
                    </div>
                    <span className="footer-divider" />
                    <p className="copyright">
                        © {new Date().getFullYear()} Amritha Hair & Makeup. All rights reserved.
                    </p>
                </div>

                <div className="footer-links">
                    <a href="#" className="footer-link">Privacy</a>
                    <a href="#" className="footer-link">Terms</a>
                    <a href="#" className="footer-link">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
