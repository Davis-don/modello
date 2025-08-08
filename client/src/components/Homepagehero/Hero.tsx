import React from 'react';
import './hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transforming <span className="highlight">Complexity</span>
            <br />
            Into <span className="highlight">Solutions</span>
          </h1>
          <p className="hero-subtitle">
            Precision mathematical modeling that unlocks insights and drives innovation
          </p>
          <div className="hero-cta">
            <a href="/contact" className="cta-button primary">
              Start Your Project
            </a>
            <a href="/services" className="cta-button secondary">
              Explore Methods
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="equation-animation">
            <div className="equation-line">
              <span className="equation-fade">∇·(α∇u) + βu = f</span>
            </div>
            <div className="equation-line">
              <span className="equation-fade">min<sub>x∈ℝⁿ</sub> f(x)</span>
            </div>
            <div className="equation-line">
              <span className="equation-fade">X<sub>t+1</sub> = AX<sub>t</sub> + W<sub>t</sub></span>
            </div>
          </div>
          <div className="floating-graphs">
            <div className="graph-circle"></div>
            <div className="graph-line"></div>
            <div className="graph-dots"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;