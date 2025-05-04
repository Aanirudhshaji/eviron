import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Imported Link
import "../styles/about.css";

const keyPoints = [
  "Design a brand worth remembering",
  "Story–driven web experiences that convert",
  "Pitch decks for 9–figure raises, literally",
  "Dedicated product designers",
  "Output focused design sprints",
];

// ✅ Updated button group using <Link>
function AboutButtonGroup() {
  return (
    <div className="about-btn-row">
      <Link
        to="/about"
        className="about-btn-cta"
        aria-label="More about us"
        tabIndex={0}
      >
        More about us
      </Link>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "-50px 0px -50px 0px" }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about-section-v2${visible ? " about-animate-v2" : ""}`}
    >
      <div className="about-grid-wrapper">
        <div className="about-col about-title-col">
          <div className="about-label-v2"> [ WHO WE ARE ] </div>
          <h1 className="about-title-v2">
            Creative experts<br />
            turning ideas<br />
            into standout<br />
            brands
          </h1>
                    <div className="circular-text-wrapper">
            <svg viewBox="0 0 200 200" className="circular-text-svg">
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                />
              </defs>
              <text dy="5" className="circular-svg-text">
                <textPath href="#circlePath" startOffset="0">
                  GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • 
                </textPath>
              </text>
            </svg>
            <div className="circular-icon">
              <ArrowRight size={68} strokeWidth={2.3} />
          </div>
        </div>

        </div>
        <div className="about-col about-content-col">
          <p className="about-desc-v2">
          We are a team of creative thinkers, brand strategists, and technology experts committed to helping businesses grow and thrive. With extensive industry experience and a proven track record, we deliver customized digital solutions that drive innovation, boost visibility, and achieve measurable results.
          </p>
          <ul className="about-list-v2">
            {keyPoints.map((text, idx) => (
              <li className="about-list-item-v2" key={idx}>
                <span className="about-list-arrow-v2">
                  <ArrowRight size={24} strokeWidth={2.1} />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <AboutButtonGroup />
        </div>
      </div>
    </section>
  );
}
