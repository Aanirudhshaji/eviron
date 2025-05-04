import React, { useEffect, useRef, useState } from 'react';
import '../styles/aboutus.css';
import anirudhImg from '../assets/anirudh.jpg';
import parthipImg from '../assets/parthip.jpg';

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  
  const sectionRefs = {
    header: useRef(null),
    meetEviron: useRef(null),
    mission: useRef(null),
    vision: useRef(null),
    board: useRef(null),
    video: useRef(null)
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  useEffect(() => {
    // Set up intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all section refs
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="about-page-wrapper">
    <div className="about-container">
      {/* Header Section */}
      <section ref={sectionRefs.header} className="about-header animate-section">
        <h1>ABOUT</h1>
        <div className="divider"></div>
      </section>

      {/* Meet Eviron Section */}
      <section ref={sectionRefs.meetEviron} className="meet-eviron animate-section">
        <div className="section-header">
          <div className="tag">
            <span className="dot"></span>
            <span>WE TURN IDEAS INTO REALITY</span>
          </div>
          <h2>Meet Eviron</h2>
        </div>
        <div className="section-content">
          <p>We're a collective of passionate visionaries, crafting powerful health technology to make an impact on the lives of the people using our tools.</p>

          <p>Our expert designers and technologists have decades of experience in tech, health, and data. We build tools that solve real problems and make managing health an empowering and intuitive experience.</p>

          <p>We believe that technology that puts people first will make healthcare more human.</p>
        </div>
      </section>

      {/* Video Section - Replacing the Image Section */}
      <section ref={sectionRefs.video} className="video-section animate-section">
        <div className="video-container">
          <video 
            ref={videoRef}
            src="https://res.cloudinary.com/dhbvmc6xe/video/upload/v1745259971/hgcdenqrt1vti2iqkz6e.mp4"
            loop
            muted
            playsInline
            poster="/video-poster.jpg"
            aria-label="Eviron company showcase video"
          />
          
          <button 
            className={`play-button ${isVideoPlaying ? 'playing' : ''}`} 
            onClick={toggleVideoPlay}
            aria-label={isVideoPlaying ? "Pause video" : "Play video"}
          >
            {isVideoPlaying ? (
              <PauseIcon />
            ) : (
              <PlayIcon />
            )}
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={sectionRefs.mission} className="mission-section animate-section">
        <div className="section-header">
          <div className="tag">
            <span className="dot"></span>
            <span>Creating Meaningful Impact with Purposeful Innovation.</span>
          </div>
          <h2>Our Mission</h2>
        </div>
        <div className="section-content">
          <p>Our mission at Eviron is to deliver tailored IT services, web development, and digital marketing solutions that align with our clients' goals. We are committed to innovation, creativity, and technology—crafting scalable digital products and strategies that enhance brand visibility, improve user engagement, and accelerate digital transformation.</p>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={sectionRefs.vision} className="vision-section animate-section">
        <div className="section-header">
          <div className="tag">
            <span className="dot"></span>
            <span>Building a Better Future Through Bold Ideas.</span>
          </div>
          <h2>Our Vision</h2>
        </div>
        <div className="section-content">
          <p>At Eviron, our vision is to empower businesses through cutting-edge digital innovation. We strive to be a global leader in IT solutions and digital strategy, delivering transformative experiences that drive growth, enhance efficiency, and build sustainable success in the digital age.</p>
        </div>
      </section>

      {/* Board Section */}
      <section ref={sectionRefs.board} className="board-section animate-section">
        <div className="section-header">
          <div className="tag">
            <span className="dot"></span>
            <span>The Minds Behind the Mission</span>
          </div>
          <h2>Our board</h2>
        </div>
        <div className="board-members">
          {/* Board Member 1 */}
          <div className="board-member">
            <div className="member-image" style={{ backgroundImage: `url(${anirudhImg})` }}></div>
            <h3>Anirudh Shaji</h3>
            <p>Co-Founder and CEO</p>
            <a href="https://www.linkedin.com/in/anirudhshaji/">LinkedIn</a>
          </div>

          {/* Board Member 2 */}
          <div className="board-member">
            <div className="member-image" style={{ backgroundImage: `url(${parthipImg})` }}></div>
            <h3>Parthip K Anish</h3>
            <p>Co-Founder and CTO</p>
            <a href="https://www.linkedin.com/in/parthip-k-anish-a88350291/">LinkedIn</a>
          </div>

          {/* Board Member 3 */}
          <div className="board-member">
            <div className="member-image"></div>
            <h3>new</h3>
            <p>People</p>
            <a href="#">LinkedIn</a>
          </div>

          {/* Board Member 4 */}
          <div className="board-member">
            <div className="member-image"></div>
            <h3>new</h3>
            <p>People</p>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  </div> 
  );
};

// SVG Icons as components
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
  </svg>
);

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="currentColor" />
  </svg>
);

export default About;