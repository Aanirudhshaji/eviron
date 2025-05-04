
import { useState } from 'react';
import '../styles/faq.css';

const faqData = [
  {
    id: 1,
    question: "What services does Eviron offer?",
    answer: "Eviron offers a full suite of digital solutions, including Web Development, UI/UX Design, App Development, Branding Services, Digital Marketing, and Artificial Intelligence integration—designed to help your business grow and stand out in the digital world."
  },
  {
    id: 2,
    question: "Who is Eviron best suited for?",
    answer: "Eviron is ideal for startups, small to mid-sized businesses, and forward-thinking enterprises seeking creative, strategic, and tech-driven solutions to elevate their brand and digital presence."
  },
  {
    id: 3,
    question: "How does the project process work at Eviron?",
    answer: "Our process involves initial consultation, planning, design, development, testing, and launch, with continuous support throughout."
  },
  {
    id: 4,
    question: "Can I update my website after it's launched?",
    answer: "Yes, absolutely. We build websites with user-friendly content management systems (CMS) that allow you to make updates easily. We also offer maintenance and support packages if you prefer us to handle updates for you."
  },
  {
    id: 5,
    question: "How do I start a project with Eviron?",
    answer: "Just fill out our contact form or schedule a free consultation. We'll get in touch within 24 hours."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="faq-question">
        <span>{question}</span>
        <span className="arrow"></span>
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h3>[FAQs]</h3>
          <h2>Got Questions?</h2>
          <h2>We've Got Answers!</h2>
        </div>
        <div className="faq-list">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onClick={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
