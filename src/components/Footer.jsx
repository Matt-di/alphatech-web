import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { config } from '../config';

const Footer = () => {
  return (
    <footer className="footer-v2">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              {config.shortName}<span>Tech</span>
            </Link>
            <p className="footer-description">
              {config.tagline}
            </p>
            <div className="social-links">
              <a href={config.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
              <a href={config.socials.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
              <a href={config.socials.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="footer-nav">
            <h4>Solutions</h4>
            <ul>
              {config.services.map(s => (
                <li key={s.id}><Link to="/services">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-nav">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <MapPin size={18} />
              <span>{config.contact.address}</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>{config.contact.phone}</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>{config.contact.email}</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {config.companyName}. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
