import { useState } from "react";
import { X } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { supabase } from "../supabaseClient";
import "../styles/popup.css";

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const { error } = await supabase.from("enquiries").insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          project_types: [formData.projectType],
          budget: formData.budget,
          duration: formData.timeline,
        },
      ]);

      if (error) {
        console.error("Insert error:", error);
        setError("Something went wrong while sending the message.");
      } else {
        setSuccessMessage("Message sent successfully!");
        onClose();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Unexpected error occurred.");
    }
  };

  return (
    <div className="contact-popup-overlay">
      <div className="contact-popup-container">
        <button onClick={onClose} className="contact-popup-close-btn">
          <X className="h-6 w-6" />
        </button>
        <div>
          <h2 className="contact-popup-title">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="contact-popup-form">
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            <div className="contact-popup-section">
              <h3 className="contact-popup-section-title">Details</h3>
              <div className="contact-popup-input-grid">
                <input type="text" placeholder="First Name*" required className="contact-popup-input" onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                <input type="text" placeholder="Last Name" className="contact-popup-input" onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                <input type="email" placeholder="Email Address*" required className="contact-popup-input" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <input type="text" placeholder="Company" className="contact-popup-input" onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              </div>
            </div>

            <div className="contact-popup-section">
              <h3 className="contact-popup-section-title">Project Types</h3>
              <div className="contact-popup-option-group">
                {["Web development", "Mobile App", "UI/UX", "Branding", "Other"].map((type) => (
                  <button key={type} type="button" className={`contact-popup-option-btn ${formData.projectType === type ? "contact-popup-option-btn-selected" : ""}`} onClick={() => setFormData({ ...formData, projectType: type })}>{type}</button>
                ))}
              </div>
            </div>

            <div className="contact-popup-section">
              <h3 className="contact-popup-section-title">Budget</h3>
              <div className="contact-popup-option-group">
                {["20K - 40K", "40K - 60K", "60K - 80K", "80K - 100K >"].map((range) => (
                  <button key={range} type="button" className={`contact-popup-option-btn ${formData.budget === range ? "contact-popup-option-btn-selected" : ""}`} onClick={() => setFormData({ ...formData, budget: range })}>{range}</button>
                ))}
              </div>
            </div>

            <div className="contact-popup-section">
              <h3 className="contact-popup-section-title">Time Line</h3>
              <div className="contact-popup-option-group">
                {["< 3 Month", "6 Month", "1 year"].map((time) => (
                  <button key={time} type="button" className={`contact-popup-option-btn ${formData.timeline === time ? "contact-popup-option-btn-selected" : ""}`} onClick={() => setFormData({ ...formData, timeline: time })}>{time}</button>
                ))}
              </div>
            </div>

            <ReCAPTCHA
              sitekey="6LdnfWgrAAAAAJe4SdmKXSGvaFmb60KRLOHdV__R"
              onChange={(token) => setRecaptchaToken(token)}
            />

            <div className="contact-popup-submit-container">
              <button type="submit" className="contact-popup-submit-btn">Send Enquiry</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
