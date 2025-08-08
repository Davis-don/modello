import React from 'react';
import './mission.css';

const MissionStatement: React.FC = () => {
  return (
    <section className="mission-statement">
      <div className="container">
        <div className="mission-content">
          <h2 className="section-title">
            Our <span className="highlight">Mission</span>
          </h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">∫</div>
              <h3>Precision Modeling</h3>
              <p>Develop mathematically rigorous solutions that withstand the most demanding validation tests</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">Σ</div>
              <h3>Actionable Insights</h3>
              <p>Transform complex data into clear, executable business strategies</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">∇</div>
              <h3>Continuous Innovation</h3>
              <p>Pioneer new modeling approaches at the intersection of mathematics and technology</p>
            </div>
          </div>
          <div className="mission-quote">
            <p className="quote-text">
              "Mathematics is the language with which the universe is written. We help businesses speak it fluently."
            </p>
            <p className="quote-author">— Dr. Elena Rodriguez, Chief Mathematician</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;