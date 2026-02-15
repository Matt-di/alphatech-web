import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <section className="page-header bg-gradient">
        <div className="container">
          <h1>Terms of <span className="text-secondary">Service</span></h1>
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <div className="intro-text">
            <p>
              Welcome to {config.companyName}. These Terms of Service ("Terms") govern your access to and use of our website, 
              services, and products. By accessing or using our services, you agree to be bound by these Terms. 
              If you do not agree to these Terms, please do not use our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms, 
              as well as our Privacy Policy. These Terms apply to all visitors, users, and others who access or use our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Services Description</h2>
            <p>{config.companyName} provides the following services:</p>
            <ul>
              <li><strong>Software Development:</strong> Custom enterprise software solutions, web applications, and system integration services</li>
              <li><strong>Telecom Operations:</strong> SIM card distribution, mobile network services, and telecommunications infrastructure support</li>
              <li><strong>Transport Ticketing Systems:</strong> Digital ticketing solutions, fleet management, and transit technology platforms</li>
              <li><strong>General Trading:</strong> Import, export, and distribution of technology products and industrial equipment</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. User Responsibilities</h2>
            <p>When using our services, you agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes and in accordance with these Terms</li>
              <li>Not engage in any activity that could harm, disable, or impair our services</li>
              <li>Not attempt to gain unauthorized access to our systems or networks</li>
              <li>Respect intellectual property rights and not copy, reproduce, or distribute our content without permission</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Intellectual Property Rights</h2>
            <p>
              All content, features, and functionality on our website, including but not limited to text, graphics, logos, images, software, and code, 
              are the exclusive property of {config.companyName} or our licensors and are protected by international copyright, trademark, 
              and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any of our content 
              without our express written permission.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Service Agreements and Contracts</h2>
            <p>
              For specific projects and services, separate written agreements or contracts may be required. 
              These agreements will outline the scope of work, deliverables, timelines, payment terms, and other project-specific details. 
              In the event of any conflict between these Terms and a specific service agreement, the service agreement shall prevail.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Payment Terms</h2>
            <ul>
              <li>Payment terms will be specified in individual service agreements or invoices</li>
              <li>All fees are quoted in the agreed currency and are exclusive of applicable taxes unless otherwise stated</li>
              <li>Late payments may be subject to interest charges as specified in the service agreement</li>
              <li>We reserve the right to suspend services for non-payment</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>7. Warranties and Disclaimers</h2>
            <p>
              While we strive to provide high-quality services, our services are provided "as is" and "as available" without warranties of any kind, 
              either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, 
              or non-infringement.
            </p>
            <p>
              We do not warrant that our services will be uninterrupted, error-free, or completely secure. 
              You use our services at your own risk.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {config.companyName} and its directors, employees, partners, and affiliates shall not be liable for:
            </p>
            <ul>
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Service interruptions or system failures</li>
              <li>Errors or omissions in content</li>
            </ul>
            <p>
              Our total liability for any claims arising from or related to our services shall not exceed the amount paid by you 
              for the specific service giving rise to the claim during the twelve (12) months preceding the claim.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless {config.companyName} and its officers, directors, employees, and agents 
              from any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) arising out of or related to:
            </p>
            <ul>
              <li>Your use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>10. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of business. 
              This obligation shall survive the termination of any service agreement.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice, 
              for any reason, including but not limited to breach of these Terms.
            </p>
            <p>
              Upon termination, your right to use our services will immediately cease. 
              All provisions of these Terms that by their nature should survive termination shall survive, 
              including ownership provisions, warranty disclaimers, and limitations of liability.
            </p>
          </div>

          <div className="legal-section">
            <h2>12. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia, 
              without regard to its conflict of law provisions.
            </p>
            <p>
              Any disputes arising from or relating to these Terms or our services shall first be attempted to be resolved through good faith negotiations. 
              If negotiations fail, disputes shall be resolved through arbitration in Addis Ababa, Ethiopia, 
              in accordance with the rules of the Ethiopian Arbitration and Conciliation Center.
            </p>
          </div>

          <div className="legal-section">
            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify or update these Terms at any time. We will notify users of material changes by posting 
              the updated Terms on our website with a new "Last Updated" date. Your continued use of our services after such changes 
              constitutes acceptance of the modified Terms.
            </p>
          </div>

          <div className="legal-section">
            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </div>

          <div className="legal-section">
            <h2>15. Contact Information</h2>
            <p>For questions or concerns regarding these Terms of Service, please contact us:</p>
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

export default TermsOfService;
