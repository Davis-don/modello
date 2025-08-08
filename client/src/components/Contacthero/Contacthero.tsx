import React from 'react';
import './contacthero.css';

const ContactHero: React.FC = () => {
  return (
    <section className="contact-hero">
      <div className="container">
        <div className="hero-content">
          <h1>Let's Solve <span>Your Challenge</span></h1>
          <p>
            Our team of mathematical modelers is ready to analyze your complex problems 
            and develop data-driven solutions
          </p>
          <div className="contact-method">
            <div className="method-icon">✉️</div>
            <div>
              <h3>Email Us</h3>
              <a href="mailto:solutions@mathmod.com">solutions@mathmod.com</a>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="element equation">f(x) = ∫ₐᵇ g(t)dt</div>
            <div className="element graph"></div>
            <div className="element dots"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;