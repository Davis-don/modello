// components/WhyChooseUs.tsx
import React from 'react';
import './whychooseus.css';

type MathAdvantageItem = {
  icon: string;
  title: string;
  description: string;
};

const WhyChooseUs: React.FC = () => {
  const advantages: MathAdvantageItem[] = [
    {
      icon: '∇',
      title: 'Deep Expertise',
      description: 'PhD-level mathematicians with industry-specific knowledge'
    },
    {
      icon: '√',
      title: 'Precision Focus',
      description: 'Rigorously validated models with uncertainty quantification'
    },
    {
      icon: '∞',
      title: 'Scalable Solutions',
      description: 'Models designed to grow with your business needs'
    },
    {
      icon: '≡',
      title: 'Transparent Methods',
      description: 'Clear documentation and explainable results'
    }
  ];

  return (
    <section className="math-advantages-section">
      <div className="math-advantages-container">
        <div className="math-advantages-content">
          <h3 className="math-advantages-main-title">
            Why Choose Our <span className="math-advantages-highlight">Approach</span>
          </h3>
          <div className="math-advantages-grid">
            {advantages.map((advantage, index) => (
              <div className="math-advantage-card" key={index}>
                <div className="math-advantage-icon-container">
                  <div className="math-advantage-icon">{advantage.icon}</div>
                  <div className="math-icon-rings"></div>
                </div>
                <h4 className="math-advantage-title">{advantage.title}</h4>
                <p className="math-advantage-description">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;