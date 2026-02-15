import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, ShieldCheck } from 'lucide-react';
import { config } from '../config';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="about-page">
      <SEO 
        title="About Us"
        description="Learn about Alphatech General Trading PLC - a leading technology and trading company in Ethiopia. Discover our mission, vision, and commitment to excellence in enterprise solutions."
        keywords={[
          'about Alphatech',
          'technology company Ethiopia',
          'enterprise solutions provider',
          'Ethiopian tech company',
          'company mission vision',
          'technology trading Ethiopia'
        ]}
      />
      <section className="page-header bg-gradient">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About <span className="text-secondary">{config.shortName}</span>
          </motion.h1>
          <p>The standard of excellence in East African technology and trading.</p>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container grid-2">
          <div className="about-image-v2 glass">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Office" />
          </div>
          <div className="about-text-v2">
            <h2>Driving Progress Through <span className="text-gradient">Strategic Innovation</span></h2>
            <p>
              Alphatech General Trading PLC was established with a clear vision: to integrate world-class technological solutions 
              with the dynamic landscape of Ethiopian and regional commerce. 
            </p>
            <p>
              Our multi-disciplinary approach allows us to serve diverse sectors, from government infrastructure and telecom 
              to private enterprise and consumer logistics. We pride ourselves on reliability, technical depth, and a 
              unwavering commitment to quality.
            </p>
            <div className="values-grid">
              <div className="value-item">
                <Target color="var(--secondary)" />
                <h4>Mission</h4>
                <p>{config.mission}</p>
              </div>
              <div className="value-item">
                <Eye color="var(--accent)" />
                <h4>Vision</h4>
                <p>{config.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light team-values">
        <div className="container">
          <div className="section-header center">
            <h2>Why Partners <span className="text-gradient">Choose Us</span></h2>
          </div>
          <div className="grid-3">
            {[
              { icon: <Users />, title: "Expert Team", desc: "Engineers and trade specialists with decades of combined experience." },
              { icon: <ShieldCheck />, title: "Local Presence", desc: "Deep understanding of the local market with international standards." },
              { icon: <Target />, title: "Result Oriented", desc: "We don't just deliver projects; we deliver measurable business growth." }
            ].map((v, i) => (
              <div key={i} className="value-card glass">
                <div className="v-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
