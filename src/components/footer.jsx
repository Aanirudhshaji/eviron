import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import Link
import "../styles/footer.css";
import logo from "../assets/logo1.png";

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };

  return (
    <motion.footer
      className="footer"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
    >
      <div className="footer-video-card">
        <video
          className="footer-video"
          src="https://res.cloudinary.com/dhbvmc6xe/video/upload/v1745134751/x9fzxj3mrvl0ndel5usl.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="footer-overlay">
          <h2>
            Have an idea? <br />{" "}
            <span>
              Let's <strong>talk.</strong>
            </span>
          </h2>
          <p>
            Visually attractive design from concept to final result. We create
            solutions that are bold and forward-looking.
          </p>
          <button onClick={handleContactClick}>Contact Us.</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="footer-links">
          <li><Link to="/about">Who we are</Link></li>
          <li><Link to="/work">Our Works</Link></li>
          <li><a href="#faq">FAQs</a></li>
          <li><Link to="/terms">Terms of Service</Link></li> {/* Updated to Link */}
          <li><Link to="/privacy">Privacy Policy</Link></li> {/* Updated to Link */}
        </ul>
        <div className="footer-icons">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/eviro.n/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://behance.net/yourprofile" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
          <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaDribbble /></a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
