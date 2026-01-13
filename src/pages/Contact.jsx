
import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        email: '',
        mobile: '',
        vision: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success
    const [popup, setPopup] = useState({ show: false, title: '', message: '', type: 'success' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const closePopup = () => {
        setPopup({ ...popup, show: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation Logic
        const nameRegex = /^[a-zA-Z\s]+$/;
        const mobileRegex = /^\d{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nameRegex.test(formData.name)) {
            setPopup({
                show: true,
                title: 'Invalid Name',
                message: 'Name architecture requires only letters and spaces. No numbers or symbols allowed.',
                type: 'error'
            });
            return;
        }

        if (!mobileRegex.test(formData.mobile)) {
            setPopup({
                show: true,
                title: 'Invalid Mobile',
                message: 'Communication protocol requires exactly 10 digits for the mobile number.',
                type: 'error'
            });
            return;
        }

        if (!emailRegex.test(formData.email)) {
            setPopup({
                show: true,
                title: 'Invalid Email',
                message: 'Please provide a valid digital contact address.',
                type: 'error'
            });
            return;
        }

        setStatus('submitting');

        try {
            const response = await fetch('https://formspree.io/f/mqeekwlo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', date: '', email: '', mobile: '', vision: '', message: '' });

                setPopup({
                    show: true,
                    title: 'Protocol Initiated',
                    message: 'Your aesthetic vision has been securely transmitted. Our concierge will establish contact within 24 hours.',
                    type: 'success'
                });

                // Reset status to idle after some time if desired, or keep as success
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error(error);
            setPopup({
                show: true,
                title: 'Transmission Error',
                message: 'We could not transmit your data. Please check your connection or contact us directly via email.',
                type: 'error'
            });
            setStatus('idle');
        }
    };

    return (
        <section id="inquiry" className="contact-section">
            {/* High-tech background grid */}
            <div className="contact-bg-pattern" />

            {/* Custom Popup Modal */}
            {popup.show && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="popup-icon">
                            {popup.type === 'success' ? (
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            ) : (
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            )}
                        </div>
                        <h3 className="popup-title">{popup.title}</h3>
                        <p className="popup-message">{popup.message}</p>
                        <button onClick={closePopup} className="popup-close-btn">Acknowledge</button>
                    </div>
                </div>
            )}

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

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Client Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="ELIZA BENNETT"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Event Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="form-input"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Digital Contact</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="EMAIL@PROTOCOL.COM"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mobile Comms</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="+44 7700 900000"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Aesthetic Vision</label>
                                <select
                                    name="vision"
                                    value={formData.vision}
                                    onChange={handleChange}
                                    className="form-input form-select"
                                    required
                                >
                                    <option value="">SELECT STYLE ARCHITECTURE</option>
                                    <option value="modern-minimalism">MODERN MINIMALISM</option>
                                    <option value="high-def-glamour">HIGH-DEFINITION GLAMOUR</option>
                                    <option value="ethereal-couture">ETHEREAL COUTURE</option>
                                    <option value="editorial-avant-garde">EDITORIAL AVANT-GARDE</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="form-input form-textarea"
                                    placeholder="DESCRIBE YOUR VENUE AND VIBE..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${status === 'submitting' ? 'loading' : ''}`}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Transmitting Data...' : 'Initialize Consultation'}
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
