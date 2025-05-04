import React, { useEffect, useRef } from 'react';
import '../styles/work.css';

const Work = () => {
  const projectData = [
    {
      id: 1,
      title: "Business Website",
      image: "https://res.cloudinary.com/dhbvmc6xe/image/upload/v1745393344/original-81275b3d9d77d1d53cee84d878ccf7d4_t4fbcr.jpg",
      category: "Web Design"
    },
    {
      id: 2,
      title: "Adventure Brand",
      image: "https://res.cloudinary.com/dhbvmc6xe/image/upload/v1745393183/original-002e337cc1b152719b434b52b5e33ca4_ekc4on.jpg",
      category: "Branding"
    },
    {
      id: 3,
      title: "Business Cards",
      image: "https://res.cloudinary.com/dhbvmc6xe/image/upload/v1745393155/original-ec495bd4220eaeb6826e9d136773b211_bxd0mf.webp",
      category: "Print Design"
    },
    {
      id: 4,
      title: "Product Packaging",
      image: "https://res.cloudinary.com/dhbvmc6xe/image/upload/v1745393206/original-81c25453647a363793722578392af8a9_xc4izd.webp",
      category: "Packaging"
    },
    {
      id: 5,
      title: "Podcast Platform",
      image: "https://res.cloudinary.com/dhbvmc6xe/image/upload/v1745393318/original-292edf3cef330df6f103e51441b343ab_urmznb.png",
      category: "Web Design"
    },
    {
      id: 6,
      title: "Magazine Layout",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
      category: "Print Design"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="card-inner">
        <div className="card-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="card-content">
          <span className="category">{project.category}</span>
          <h3 className="card-title">{project.title}</h3>
        </div>
      </div>
    </div>
  );

  return (
    <div className="work-wrapper">
      <div id="works" className="work-container">
        <header className="work-header">
          <h1 className="work-title">PROJECT</h1>
          <div className="work-divider"></div>
        </header>
        <div className="project-grid">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
