import React, { useRef, useEffect, useState } from 'react';
import '../styles/careers.css';

const Careers = () => {
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const glockLink = document.createElement('link');
    glockLink.href = 'https://fonts.googleapis.com/css2?family=Gloock&display=swap';
    glockLink.rel = 'stylesheet';

    const dmSansLink = document.createElement('link');
    dmSansLink.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap';
    dmSansLink.rel = 'stylesheet';

    document.head.appendChild(glockLink);
    document.head.appendChild(dmSansLink);

    return () => {
      document.head.removeChild(glockLink);
      document.head.removeChild(dmSansLink);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let animationFrameId;
    let scrollPosition = 0;

    const scroll = () => {
      if (isHovering) return;

      scrollPosition += 1.5;
      if (scrollContainer) {
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]);

  return (
    <section
      id="careers"
      className="careers-section"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dhbvmc6xe/video/upload/v1745127585/motion_obwkuj.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="scroll-container-wrapper">
        <div ref={scrollContainerRef} className="scroll-container">
          <div className="scrolling-content">
            <span className="large-text">talk</span>
            <a
              href="https://calendly.com/evirontechnologys/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="booking-button"
            >
              book a 15-min call
            </a>
            <span className="large-text">Let's</span>
            <span className="large-text">talk</span>
            <a
              href="https://calendly.com/evirontechnologys/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="booking-button"
            >
              book a 15-min call
            </a>
            <span className="large-text">Let's</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
