
import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="inquiry" className="contact-section">
            {/* High-tech background grid */}
            <div className="contact-bg-pattern" />

            <div className="contact-container">
                {/* Left Side: Information & Tech Display */}
                <div className="contact-info">
                    <span className="contact-subtitle accent-gradient">Availability & Protocols</span>
                    <h2 className="contact-title">Secure Your <br /><span>Vision</span></h2>

                    <p className="contact-desc">
                        Our studio operates on a strictly exclusive basis. To ensure the integrity of your bridal aesthetic, we recommend inquiries 12-18 months in advance.
                    </p>

                    <div className="contact-details-grid">
                        <div>
                            <h4 className="contact-detail-title">Primary Studio</h4>
                            <p className="contact-detail-text">Mayfair, London</p>
                        </div>
                        <div>
                            <h4 className="contact-detail-title">Artistry Hours</h4>
                            <p className="contact-detail-text">By Appointment Only</p>
                        </div>
                    </div>

                    <div className="contact-highlight">
                        <div className="highlight-header">
                            <div className="highlight-icon-box">
                                <svg className="highlight-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth={2} /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2} /></svg>
                            </div>
                            <span className="highlight-title">Global Travel Ready</span>
                        </div>
                        <p className="highlight-text">
                            Serving London, Paris, NYC, and destination wedding locations globally. Data-encrypted logistics managed in-house.
                        </p>
                    </div>
                </div>

                {/* Right Side: High-Tech Form */}
                <div className="contact-form-wrapper">
                    <div className="form-glow" />
                    <div className="contact-form-card">
                        <h3 className="form-header">Inquiry <span className="form-header-bold accent-gradient">Protocol</span></h3>

                        <form className="contact-form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Client Name</label>
                                    <input type="text" className="form-input" placeholder="ELIZA BENNETT" />
                                </div>
                                <div className="form-group">
                                    <label>Event Date</label>
                                    <input type="date" className="form-input" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Digital Contact</label>
                                <input type="email" className="form-input" placeholder="EMAIL@PROTOCOL.COM" />
                            </div>

                            <div className="form-group">
                                <label>Aesthetic Vision</label>
                                <select className="form-input form-select">
                                    <option>SELECT STYLE ARCHITECTURE</option>
                                    <option>MODERN MINIMALISM</option>
                                    <option>HIGH-DEFINITION GLAMOUR</option>
                                    <option>ETHEREAL COUTURE</option>
                                    <option>EDITORIAL AVANT-GARDE</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows={4} className="form-input form-textarea" placeholder="DESCRIBE YOUR VENUE AND VIBE..."></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Initialize Consultation
                                <div className="btn-ping" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
