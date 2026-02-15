import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { config } from '../config';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us"
        description="Get in touch with Alphatech General Trading PLC. Contact us for software development, telecom solutions, and enterprise technology services in Addis Ababa, Ethiopia."
        keywords={[
          'contact Alphatech',
          'Alphatech Ethiopia contact',
          'technology company Addis Ababa',
          'software development inquiry',
          'enterprise solutions contact',
          'business consultation Ethiopia'
        ]}
      />
      <section className="page-header bg-gradient">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Get In <span className="text-secondary">Touch</span>
          </motion.h1>
          <p>Have a project in mind? Let's discuss how we can help.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-details-v3">
              <div className="contact-card-v3 glass">
                <h3>Contact Information</h3>
                <p>Reach out to us through any of these channels.</p>
                
                <div className="info-list">
                  <div className="info-box">
                    <div className="icon-circle"><MapPin /></div>
                    <div>
                      <h4>Visit Us</h4>
                      <p>{config.contact.address}</p>
                    </div>
                  </div>
                  
                  <div className="info-box">
                    <div className="icon-circle"><Phone /></div>
                    <div>
                      <h4>Call Us</h4>
                      <p>{config.contact.phone}</p>
                    </div>
                  </div>
                  
                  <div className="info-box">
                    <div className="icon-circle"><Mail /></div>
                    <div>
                      <h4>Email Us</h4>
                      <p>{config.contact.email}</p>
                    </div>
                  </div>
                </div>

                <div className="map-placeholder glass">
                  <a href={config.contact.mapUrl} target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-v3">
              <form className="glass" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                
                <div className="form-group">
                  <label>Subject</label>
                  <select>
                    <option>Software Enquiry</option>
                    <option>Telecom Solutions</option>
                    <option>Ticketing Systems</option>
                    <option>General Trading</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Your Message</label>
                  <textarea rows="5" placeholder="Tell us about your project..."></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg full-width">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
