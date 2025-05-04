import { useState } from 'react';
import { User, Mail, Building } from 'lucide-react';
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

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear previous error and success messages
    setError('');
    setSuccessMessage('');

    // Log form data for debugging
    console.log("Form Data:", formData);
    console.log("Selected Project:", selectedProject);
    console.log("Selected Budget:", selectedBudget);
    console.log("Selected Duration:", selectedDuration);

    fetch('http://localhost:8000/api/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        company: formData.company,
        project_type: selectedProject,
        budget: selectedBudget,
        duration: selectedDuration,
      }),
    })
      .then((res) => {
        console.log("Response Status:", res.status);
        if (!res.ok) {
          throw new Error(`Failed to submit: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Response Data:", data);
        if (data.message === 'Message saved successfully!') {
          setSuccessMessage('Message sent successfully!');
          // Clear form fields
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: ''
          });
          setSelectedProject('');
          setSelectedBudget('');
          setSelectedDuration('');
        } else {
          throw new Error('Unexpected response from the server.');
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setError('Something went wrong while sending the message.');
      });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="video-section">
          <h2 className="video-heading">Let's get in touch!</h2>
          <video autoPlay loop muted>
            <source src="https://res.cloudinary.com/dhbvmc6xe/video/upload/v1745169724/mixkit-business-people-signing-contracts-23042-hd-ready_gxzimd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="contact-left">
          <h1 className="title">Contact Us</h1>
          <p className="description">
          We’d love to hear from you! Whether you have questions, feedback, collaboration ideas, or just want to say hello — don’t hesitate to reach out. Fill out the form below and our team will get back to you as soon as possible. You can also connect with us through our social media channels or email.
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
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
                  className={`option-btn ${selectedProject === type ? 'selected' : ''}`}
                  onClick={() => setSelectedProject(type)}
                >
                  {type === 'uiux' ? 'UI/UX' : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            <h3>Budget</h3>
            <div className="options-group">
              {['20K - 40K', '40K - 60K', '60K - 80K', '90K - More'].map((budget) => (
                <button
                  key={budget}
                  type="button"
                  className={`option-btn ${selectedBudget === budget ? 'selected' : ''}`}
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
                  className={`option-btn ${selectedDuration === duration ? 'selected' : ''}`}
                  onClick={() => setSelectedDuration(duration)}
                >
                  {duration}
                </button>
              ))}
            </div>

            <button type="submit" className="submit-btn">Send Enquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
