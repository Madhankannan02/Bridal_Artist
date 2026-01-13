
import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1511871146316-522d7d8e8749?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1510005934304-c6a3a2611f18?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    ];

    return (
        <section id="gallery" className="gallery-section">
            <div className="gallery-container">
                <div className="gallery-header">
                    <span className="gallery-subtitle">The Portfolio of Visions</span>
                    <h2 className="gallery-title">Capturing The <span className="serif italic">Glow</span></h2>
                </div>

                <div className="gallery-grid">
                    {images.map((src, i) => (
                        <div key={i} className="gallery-item group">
                            <img
                                src={src}
                                alt={`Bridal Look ${i + 1}`}
                                className="gallery-img"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800";
                                }}
                            />
                            <div className="gallery-overlay" />
                            <div className="gallery-caption">
                                <span className="gallery-caption-text">Bridal Vision No. {i + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
