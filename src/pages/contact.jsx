import { useState } from 'react';
import { User, Mail, Building } from 'lucide-react';
import { supabase } from '../supabaseClient';
import ReCAPTCHA from 'react-google-recaptcha'; // ✅ added
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: ''
  });

  const [selectedProject, setSelectedProject] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState(null); // ✅ added
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!recaptchaToken) {
      setError('Please complete the reCAPTCHA verification.');
      return;
    }

    try {
      const { error } = await supabase.from('enquiries').insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          project_types: [selectedProject],
          budget: selectedBudget,
          duration: selectedDuration
        }
      ]);

      if (error) {
        console.error('Insert error:', error);
        setError('Something went wrong while sending the message.');
      } else {
        setSuccessMessage('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', company: '' });
        setSelectedProject('');
        setSelectedBudget('');
        setSelectedDuration('');
        setRecaptchaToken(null); // reset
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('Unexpected error occurred.');
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="video-section">
          <h2 className="video-heading">Let's get in touch!</h2>
          <video autoPlay loop muted>
            <source
              src="https://res.cloudinary.com/dhbvmc6xe/video/upload/v1745169724/mixkit-business-people-signing-contracts-23042-hd-ready_gxzimd.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="contact-left">
          <h1 className="title">Contact Us</h1>
          <p className="description">
            We’d love to hear from you! Whether you have questions, feedback,
            collaboration ideas, or just want to say hello — don’t hesitate to
            reach out.
          </p>
          <div className="email-section">
            <h3>OUR EMAIL ADDRESS</h3>
            <p className="email">hello@eviron.com</p>
          </div>
          <a
            href="https://calendly.com/evirontechnologys/30min?month=2025-04"
            target="_blank"
            rel="noopener noreferrer"
            className="calendly-btn"
          >
            Book a Calendly Call
          </a>
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Details</h2>

            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            <div className="form-row">
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  type="text"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="custom-input"
                  required
                />
              </div>
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  type="text"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="custom-input"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <input
                  type="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="custom-input"
                  required
                />
              </div>
              <div className="input-wrapper">
                <Building className="input-icon" />
                <input
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="custom-input"
                />
              </div>
            </div>

            <h3>Project Types</h3>
            <div className="options-group">
              {['web', 'mobile', 'uiux', 'branding', 'other'].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`option-btn ${
                    selectedProject === type ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedProject(type)}
                >
                  {type === 'uiux'
                    ? 'UI/UX'
                    : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            <h3>Budget</h3>
            <div className="options-group">
              {['20K - 40K', '40K - 60K', '60K - 80K', '90K - More'].map((budget) => (
                <button
                  key={budget}
                  type="button"
                  className={`option-btn ${
                    selectedBudget === budget ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedBudget(budget)}
                >
                  {budget}
                </button>
              ))}
            </div>

            <h3>Duration</h3>
            <div className="options-group">
              {['< 3 Month', '6 Month', '1 year'].map((duration) => (
                <button
                  key={duration}
                  type="button"
                  className={`option-btn ${
                    selectedDuration === duration ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedDuration(duration)}
                >
                  {duration}
                </button>
              ))}
            </div>

            {/* ✅ reCAPTCHA here */}
            <div style={{ margin: '20px 0' }}>
              <ReCAPTCHA
                sitekey="6LdnfWgrAAAAAJe4SdmKXSGvaFmb60KRLOHdV__R" // ⬅️ Replace with your real site key
                onChange={(token) => setRecaptchaToken(token)}
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
