
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            {/* Background Video/Image Overlay */}
            <div className="hero-bg">
                <img
                    src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=2000"
                    alt="High-End Bridal Makeup"
                    className="hero-bg-img"
                />
                <div className="hero-overlay" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="hero-grid-pattern" />

            <div className="hero-content">
                <p className="hero-tagline accent-gradient">
                    Precision Artistry for the Modern Bride
                </p>
                <h1 className="hero-title">
                    Mastery in Every <br />
                    <span className="hero-title-italic">Pixel & Strand</span>
                </h1>
                <p className="hero-description">
                    Bespoke bridal artistry by Amritha, merging classical techniques with high-definition digital precision.
                    Your vision, architected for the lens and the aisle.
                </p>

                <div className="hero-actions">
                    <a href="#services" className="btn-primary">
                        Explore Occasions
                        <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a href="#inquiry" className="btn-secondary">
                        Inquire Now
                    </a>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="hero-floating-info">
                <div className="info-list">
                    <div className="info-item">
                        <span className="info-line" />
                        <span>London | Paris | New York</span>
                    </div>
                    <div className="info-item">
                        <span className="info-line" />
                        <span>High-Definition Bridal Specialist</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
