import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/logo1.png';
import ContactPopup from '../pages/popup'; // adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("home");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
    }
  };

  const handleScrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <>
      <header className="nav-wrapper">
        <nav className="pill-navbar">
          <div className="nav-left">
            <Link to="/" onClick={handleHomeClick}>
              <img src={logo} alt="Logo" className="nav-logo" />
            </Link>
          </div>

          <div className={`nav-center ${isOpen ? 'open' : ''}`}>
            <button onClick={handleHomeClick} className="nav-link-btn">Home</button>
            <Link to="/about" className="nav-link-btn">Who we are</Link>
            <button onClick={() => handleScrollToSection("service")} className="nav-link-btn">
              Service
            </button>
            <Link to="/work" className="nav-link-btn">Our Works</Link>
            <Link to="/contact" className="nav-link-btn">Contact</Link>
            <button className="collaborate-btn mobile-btn" onClick={openPopup}>
              Let's Collaborate
            </button>
          </div>

          <div className="nav-right desktop-only">
            <button className="collaborate-btn" onClick={openPopup}>
              Let's Collaborate
            </button>
          </div>

          <div className="hamburger" onClick={toggleMobileMenu}>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          </div>
        </nav>
      </header>

      {/* Contact Popup */}
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Navbar;
