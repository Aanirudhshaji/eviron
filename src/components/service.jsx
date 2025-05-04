import { useState, useEffect, useRef } from 'react';
import '../styles/service.css';

// ✅ Import all images and gifs
import icon1 from '../assets/18.gif';
import icon2 from '../assets/19.gif';
import icon3 from '../assets/20.gif';
import icon4 from '../assets/21.gif';
import icon5 from '../assets/22.gif';
import icon6 from '../assets/23.gif';

const ServiceIconCard = ({ isExpanded, icon }) => (
  <div className={`service-icon-card ${isExpanded ? 'expanded' : ''}`}>
    <img src={icon} alt="service icon" width={32} height={32} />
  </div>
);

const ServiceCard = ({ title, description, isExpanded, onMouseEnter, background, video }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const handleVideoLoad = () => setIsVideoLoaded(true);

  // Cloudinary optimization
  const optimizedVideoUrl = `${video}?q_auto,f_auto,w_auto,c_limit,fl_lossy`;

  return (
    <div
      className={`service-card ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={onMouseEnter}
      style={{ backgroundImage: !video && isExpanded ? `url(${background})` : 'none' }}
    >
      {isExpanded && video && (
        <video
          className="service-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onContextMenu={(e) => e.preventDefault()}
          onCanPlayThrough={handleVideoLoad}
        >
          <source src={optimizedVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {isExpanded ? (
        <div className="service-content">
          <h3 className="service-title">{title}</h3>
          <div className="service-description"><p>{description}</p></div>
        </div>
      ) : (
        <div className="service-title-container">
          <h3 className="service-title-vertical">{title}</h3>
        </div>
      )}
    </div>
  );
};

const MobileServiceCard = ({ title, description, icon }) => (
  <div className="mobile-service-card">
    <div className="mobile-service-icon">
      <img src={icon} alt="service icon" width={24} height={24} />
    </div>
    <div className="mobile-service-content">
      <h3 className="mobile-service-title">{title}</h3>
      <p className="mobile-service-description">{description}</p>
    </div>
  </div>
);

const ServiceSection = () => {
  const [expandedCard, setExpandedCard] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "We create modern, responsive websites that are fast, scalable, and built to grow with your business.",
      icon: icon1,
      video: "https://res.cloudinary.com/dhbvmc6xe/video/upload/v1745086798/vz4ctpxgqall9vjgs0cz.mp4"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "We design intuitive, visually striking interfaces that enhance user experience across all devices.",
      icon: icon2,
      video: "https://res.cloudinary.com/dhbvmc6xe/video/upload/v1745088338/original-0d8d2b258e922b56f5fe0794407ca97c_keiq1j.mp4"
    },
    {
      id: 3,
      title: "App Development",
      description: "We develop reliable, high-performance mobile apps tailored to your business goals and user needs.",
      icon: icon3,
      video: "https://res.cloudinary.com/dhbvmc6xe/video/upload/v1745089483/25-mockup_qwtmdh.mp4"
    },
    {
      id: 4,
      title: "Branding Services",
      description: "We build unique brand identities that connect, inspire, and leave a lasting impression.",
      icon: icon4,
      video: "https://res.cloudinary.com/dhbvmc6xe/video/upload/v1745089225/00-Hero_k7ujwe.mp4"
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "We drive results with data-led marketing strategies that increase reach, traffic, and engagement.",
      icon: icon5,
      video: "https://res.cloudinary.com/dhbvmc6xe/video/upload/v1745090483/6558232-uhd_3840_2160_25fps_h94l6z.mp4"
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      description: "We implement AI solutions that automate tasks, analyze data, and unlock new opportunities.",
      icon: icon6,
      video: "https://res.cloudinary.com/dhbvmc6xe/video/upload/v1745091421/original-9c5e16324fd254f358c4fa0be179fbec_ymsv9p.mp4"
    }
  ];

  return (
    <section
      id="service"
      ref={sectionRef}
      className={`services-section ${isVisible ? 'slide-in-right' : 'hidden-right'}`}
    >
      <div className="services-header">
        <div className="service-tag">[ Services ]</div>
        <h1 className="services-main-title">
        Shaping Digital Futures<br />with Creativity and Strategy
        </h1>
        <p className="services-subtitle">
        Driving Unmatched Digital Transformation with Strategic Vision and Creative Power
        </p>
      </div>

      <div className="services-container">
        {isMobile ? (
          <div className="mobile-services-list">
            {services.map((service) => (
              <MobileServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        ) : (
          <div className="services-grid">
            {services.map((service) => {
              const isExpanded = expandedCard === service.id;
              return (
                <div key={service.id} className="service-pair" onMouseEnter={() => setExpandedCard(service.id)}>
                  <ServiceIconCard isExpanded={isExpanded} icon={service.icon} />
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    isExpanded={isExpanded}
                    video={service.video}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
