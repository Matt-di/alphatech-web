import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PhoneCall, Ticket, Globe, CheckCircle2 } from 'lucide-react';
import { config } from '../config';
import SEO from '../components/SEO';

const icons = {
  Code2: <Code2 size={40} />,
  PhoneCall: <PhoneCall size={40} />,
  Ticket: <Ticket size={40} />,
  Globe: <Globe size={40} />,
};

const Services = () => {
  return (
    <div className="services-page">
      <SEO 
        title="Our Services"
        description="Explore our comprehensive enterprise solutions including custom software development, telecom operations, transport ticketing systems, and technology trading services in Ethiopia."
        keywords={[
          'custom software development',
          'telecom operations',
          'transport ticketing',
          'technology trading',
          'enterprise solutions Ethiopia',
          'IT consulting',
          'system integration'
        ]}
      />
      <section className="page-header bg-gradient">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our <span className="text-secondary">Solutions</span>
          </motion.h1>
          <p>Cutting-edge services tailored for enterprise growth.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-detailed">
            {config.services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`service-detail-row ${index % 2 !== 0 ? 'reverse' : ''}`}
              >
                <div className="service-info-v3">
                  <div className="s-icon-v3">{icons[service.icon]}</div>
                  <h2>{service.title}</h2>
                  <p className="large-p">{service.fullDesc}</p>
                  <div className="feature-tags">
                    {service.features.map(f => (
                      <span key={f} className="tag"><CheckCircle2 size={14} /> {f}</span>
                    ))}
                  </div>
                </div>
                <div className="service-visual-v3 service-image-container">
                  <img src={service.image} alt={service.title} className="service-image" />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
