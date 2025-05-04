import React, { useEffect } from 'react';
import '../styles/process.css';

// ✅ Correct asset imports
import gifPlanning from '../assets/17.gif';
import gifAnalysis from '../assets/15.gif';
import gifDesign from '../assets/14.gif';
import gifDeveloping from '../assets/16.gif';

const Process = () => {
  useEffect(() => {
    const processItems = document.querySelectorAll('.process-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    processItems.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      processItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <p className="section-label">[ HOW IT WORKS ]</p>
          <h2 className="section-title">
            How We Build<br />
            Impactful Brands
          </h2>
          <div className="platform-button">
            <a href="https://calendly.com/evirontechnologys/30min" className="platform-link">
            book a 15-min call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="process-content">
          <div className="process-item">
            <div className="process-icon">
              <img src={gifPlanning} alt="Planning Icon" />
            </div>
            <div className="process-info">
              <h3 className="process-step">Planning</h3>
              <p className="process-description">
              We align vision with strategy—defining goals, audience, and direction to lay the groundwork for success.
              </p>
            </div>
          </div>

          <div className="process-item">
            <div className="process-icon">
              <img src={gifAnalysis} alt="Analysis Icon" />
            </div>
            <div className="process-info">
              <h3 className="process-step">Analysis</h3>
              <p className="process-description">
              We uncover insights through data, trends, and competitor intelligence to drive smart, informed decisions.
              </p>
            </div>
          </div>

          <div className="process-item">
            <div className="process-icon">
              <img src={gifDesign} alt="Design Icon" />
            </div>
            <div className="process-info">
              <h3 className="process-step">Design</h3>
              <p className="process-description">
              We craft elegant, user-centric designs that embody your brand and elevate the customer experience.
              </p>
            </div>
          </div>

          <div className="process-item">
            <div className="process-icon">
              <img src={gifDeveloping} alt="Developing Icon" />
            </div>
            <div className="process-info">
              <h3 className="process-step">Developing</h3>
              <p className="process-description">
              We build seamless, high-performance solutions with clean code, optimized for speed, scalability, and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
