import React from 'react';
import '../styles/legal.css';

const TermsOfService = () => {
  return (
    <div className="legal-container">
      <h1>Terms of Service</h1>
      <p>Last updated: April 24, 2025</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy.
        </p>
      </section>

      <section>
        <h2>2. Use of the Service</h2>
        <p>
          You agree not to misuse the service, attempt unauthorized access, or interfere with its normal functioning.
        </p>
      </section>

      <section>
        <h2>3. Intellectual Property</h2>
        <p>
          All content, trademarks, and intellectual property belong to our company. Unauthorized use is prohibited.
        </p>
      </section>

      <section>
        <h2>4. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to our service at any time, without notice.
        </p>
      </section>

      <section>
        <h2>5. Contact</h2>
        <p>
          For questions about these terms, contact us at support@example.com.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
