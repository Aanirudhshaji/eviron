import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import '../styles/tech.css';

const TechSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    console.log('TechSection visible');
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`tech-section ${isVisible ? 'slide-in-left' : 'hidden-left'}`}
        >
            <div className="text-container">
                <h1 className="tech-title">
                    <span className="tech-highlight">Advanced</span> <br /> Technology
                </h1>
                <p className="tech-subtitle">Leading the future with cutting-edge innovations.</p>
                
                {/* ✅ Use Link for navigation */}
                <Link to="/contact" className="tech-button" aria-label="Go to contact page">
                    Learn More
                </Link>
            </div>
            <div className="image-container"></div>
        </section>
    );
};

export default TechSection;
