import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate('/about');
  };

  return (
    <div id="home" className="hero-container">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dhbvmc6xe/video/upload/v1746251925/eviron.com_zlyr8j.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay"></div>

      <div className="hero-content visible">
        <div className="title-container">
          <h1 className="hero-title">Craft your</h1>
          <div className="circle-arrow-container" onClick={handleArrowClick}>
            <ArrowUpRight className="circle-arrow-icon" />
          </div>
        </div>
        <h1 className="hero-title success-text">success here</h1>
        <p className="hero-subtitle">
          "Unlock New Dimensions with Nebulous – Where Imagination Meets
          Innovation to Shape the Future of the Digital Universe."
        </p>
      </div>
    </div>
  );
};

export default Hero;
