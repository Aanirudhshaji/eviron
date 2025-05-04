import React, { useEffect, useRef, useState } from "react";
import "../styles/team.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import teamAnimation from "../assets/30.lottie";

const Team = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`team-section ${isVisible ? "animate-team" : ""}`}
    >
      <div className="heading-container">
        <h2 className="main-heading">
          Let’s rewrite the rules <br />
          of thinking together.
        </h2>
      </div>

      <div className="button-wrapper">
        <a
          href="https://calendly.com/evirontechnologys/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="book-call-button"
        >
          Book a 15-min call
        </a>
      </div>

      <div className="team-illustration">
        <DotLottieReact
          src={teamAnimation}
          loop
          autoplay
          className="illustration-image"
        />
      </div>
    </section>
  );
};

export default Team;
