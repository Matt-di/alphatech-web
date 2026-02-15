import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <SEO 
        title="Privacy Policy"
        description="Read Alphatech General Trading PLC's privacy policy to understand how we collect, use, and protect your personal information."
        noindex={true}
      />
      <section className="page-header bg-gradient">
        <div className="container">
          <h1>Privacy <span className="text-secondary">Policy</span></h1>
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <div className="intro-text">
            <p>
              At {config.companyName}, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>1. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Fill out contact forms or request information about our services</li>
              <li>Subscribe to our newsletters or marketing communications</li>
              <li>Participate in surveys or provide feedback</li>
              <li>Apply for employment opportunities</li>
            </ul>
            <p>This information may include your name, email address, phone number, company name, and any other details you choose to provide.</p>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device and browsing behavior, including:
            </p>
            <ul>
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Delivering services and fulfilling contractual obligations</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Complying with legal obligations and protecting our rights</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and conducting our business</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, 
              and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to the processing of your personal information</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another organization</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
            </ul>
            <p>To exercise these rights, please contact us at {config.contact.email}.</p>
          </div>

          <div className="legal-section">
            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. 
              You can control cookie settings through your browser preferences.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. 
              We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. 
              If you believe we have inadvertently collected information from a child, please contact us immediately.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            <div className="contact-box">
              <p><strong>{config.companyName}</strong></p>
              <p>{config.contact.address}</p>
              <p>Email: {config.contact.email}</p>
              <p>Phone: {config.contact.phone}</p>
            </div>
          </div>

          <div className="back-link">
            <Link to="/" className="btn btn-primary">← Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
