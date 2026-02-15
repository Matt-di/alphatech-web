import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, PhoneCall, Ticket, Globe, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { config } from '../config';
import SEO from '../components/SEO';
import heroBg from '../assets/hero-bg.png';

const icons = {
  Code2: <Code2 size={32} />,
  PhoneCall: <PhoneCall size={32} />,
  Ticket: <Ticket size={32} />,
  Globe: <Globe size={32} />,
};

const Home = () => {
  return (
    <div className="home-page">
      <SEO 
        title="Home"
        description="Alphatech General Trading PLC provides cutting-edge software development, telecom operations, and transport ticket systems in Ethiopia. Transform your business with our enterprise solutions."
        keywords={[
          'software development Ethiopia',
          'telecom solutions',
          'transport systems',
          'enterprise software',
          'Addis Ababa technology',
          'business automation'
        ]}
      />
      {/* Hero Section */}
      <section className="hero-v2" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <span className="badge">Next-Gen Enterprise Solutions</span>
            <h1>Innovating For The <span className="text-gradient">Future of Trade</span></h1>
            <p>{config.tagline}</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start a Project <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Enterprise Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Technical Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-header center">
            <span className="subtitle">How We Help</span>
            <h2>Our Core <span className="text-gradient">Excellence</span></h2>
            <p>Comprehensive solutions designed for the modern industrial landscape.</p>
          </div>
          
          <div className="services-grid-v2">
            {config.services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card-v2"
              >
                <div className="card-icon">{icons[service.icon]}</div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <ul className="card-features">
                  {service.features.slice(0, 3).map(f => (
                    <li key={f}><CheckCircle2 size={16} /> {f}</li>
                  ))}
                </ul>
                <Link to="/services" className="learn-more">
                  Learn Details <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Spotlight */}
      <section className="section projects-spotlight bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="subtitle" style={{ color: 'var(--accent)' }}>Case Studies</span>
            <h2 style={{ color: 'white' }}>Recent <span className="text-gradient">Successes</span></h2>
          </div>
          
          <div className="projects-grid">
            {config.projects.map(project => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card glass">
            <h2>Ready to transform your business operations?</h2>
            <p>Get in touch with our experts today for a free consultation.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Schedule Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
