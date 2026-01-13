
import React, { useState, useEffect, useRef } from 'react';
import '../styles/Services.css';

const services = [
    {
        id: '01',
        title: 'Couture Bridal',
        category: 'The Flagship Protocol',
        specs: ['12HR Durability', 'HD Lens Optic', 'Architecture Mapping'],
        description: 'Bespoke layering and skin-prep rituals designed for endurance and cinematic clarity.',
        img: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: '02',
        title: 'Editorial & Gala',
        category: 'The High-Contrast Suite',
        specs: ['Studio Lighting Prep', 'Artistic Sculpting', 'Bold Texture'],
        description: 'Precision artistry for red carpets, galas, and high-fashion editorial projects.',
        img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: '03',
        title: 'The Masterclass',
        category: 'Educational Architecture',
        specs: ['One-on-One', 'Kit Optimization', 'Advanced Theory'],
        description: 'Private technical instruction for high-profile clients and aspiring artists.',
        img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800'
    }
];

const Services = () => {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setScrollY(rect.top);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="services"
            ref={sectionRef}
            className="services-section"
        >
            {/* Decorative elements */}
            <div className="services-bg-glow" />

            <div className="services-container">
                <div className="services-header">
                    <div className="services-header-content">
                        <span className="services-subtitle accent-gradient">Artistry Modules</span>
                        <h2 className="services-title">Services for Every <br /><span>Occasion</span></h2>
                        <div className="services-divider" />
                    </div>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card group">
                            <div className="scan-line" />

                            <div className="service-meta">
                                <span className="service-category">{service.category}</span>
                            </div>

                            <div className="service-img-container">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="service-img"
                                    style={{
                                        transform: `translateY(${scrollY * 0.03}px) scale(1.15)`
                                    }}
                                />
                                <div className="service-img-overlay" />
                            </div>

                            <h3 className="service-info-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>

                            <div className="service-specs">
                                {service.specs.map((spec, i) => (
                                    <div key={i} className="spec-item">
                                        <div className="spec-dot" />
                                        <span className="spec-text">{spec}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="service-cta">
                                <a href="#inquiry" className="service-cta-link group/btn">
                                    Initialize Inquiry
                                    <svg className="service-cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
