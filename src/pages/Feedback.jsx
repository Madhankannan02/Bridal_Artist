
import React, { useState } from 'react';
import '../styles/Feedback.css';

const testimonials = [
    {
        id: 'REF_01',
        name: 'JULIETTE VANE',
        date: 'SUMMER 2024',
        location: 'CHATEAU DE VILLETTE',
        content: 'Amritha’s approach is pure architecture. The hair and makeup wasn’t just beautiful; it was perfectly structured for a 14-hour editorial celebration.'
    },
    {
        id: 'REF_02',
        name: 'ISABELLA ROSS',
        date: 'SPRING 2024',
        location: 'THE AMALFI COAST',
        content: 'A master of precision. Even in the Mediterranean humidity, the styling remained pixel-perfect and effortlessly ethereal. Amritha is a true visionary.'
    },
    {
        id: 'REF_03',
        name: 'CLARA SAINT',
        date: 'WINTER 2023',
        location: 'ST. REGIS, NY',
        content: 'She doesn’t follow trends; she calculates the most elevated version of you. The skin-prep and styling ritual by Amritha is a transformative experience.'
    },
    {
        id: 'REF_04',
        name: 'SOPHIA LORENZO',
        date: 'FALL 2024',
        location: 'LAKE COMO',
        content: 'The attention to detail is staggering. Every strand of hair was perfectly placed to catch the light. I felt like a living piece of art.'
    },
    {
        id: 'REF_05',
        name: 'MIA DU PONT',
        date: 'SUMMER 2023',
        location: 'PARIS, FRANCE',
        content: 'Beyond the artistry, Amritha brings a calm, technical expertise that made my wedding morning seamless. A true luxury professional.'
    }
];

const Feedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="feedback" className="feedback-section">
            {/* Dynamic Background */}
            <div className="feedback-bg-spinners">
                <div className="spinner-1" />
                <div className="spinner-2" />
            </div>

            <div className="feedback-container">
                <div className="feedback-header">
                    <span className="feedback-subtitle accent-gradient">Client Reflections</span>
                    <h2 className="feedback-title">Echoes of <span>Artistry</span></h2>
                </div>

                <div className="feedback-carousel group">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="feedback-nav-btn prev"
                        aria-label="Previous testimonial"
                    >
                        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="feedback-nav-btn next"
                        aria-label="Next testimonial"
                    >
                        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="feedback-track-container">
                        <div
                            className="feedback-track"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((node) => (
                                <div key={node.id} className="feedback-slide">
                                    <div className="feedback-card">
                                        <div className="feedback-meta">
                                            <div className="client-info">
                                                <div className="client-bar" />
                                                <div>
                                                    <h4 className="client-name">{node.name}</h4>
                                                    <p className="client-details">{node.date} • {node.location}</p>
                                                </div>
                                            </div>
                                            <div className="rating-stars">
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <div key={s} className="star" />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="quote-container">
                                            <span className="quote-mark">"</span>
                                            <p className="quote-text">
                                                {node.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Indicators */}
                    <div className="pagination-controls">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`pagination-dot ${currentIndex === i ? 'active' : ''}`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
