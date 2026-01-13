
import React, { useEffect } from 'react';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const App = () => {
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const target = e.target;
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const id = target.getAttribute('href').substring(1);
                const element = document.getElementById(id);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        };

        window.addEventListener('click', handleAnchorClick);
        return () => window.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Gallery />
                <Services />
                <Feedback />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
