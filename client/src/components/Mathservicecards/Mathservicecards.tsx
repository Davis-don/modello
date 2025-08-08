// components/MathServiceCards.tsx
import React from 'react';
import './mathservicecards.css'

type MathServiceCard = {
  icon: string;
  title: string;
  description: string;
};

const MathServiceCards: React.FC = () => {
  const services: MathServiceCard[] = [
    {
      icon: 'Σ',
      title: 'Predictive Modeling',
      description: 'Advanced statistical forecasting with Bayesian inference and time-series analysis'
    },
    {
      icon: '∫',
      title: 'Optimization',
      description: 'Convex and non-convex optimization using gradient descent methods'
    },
    {
      icon: 'Δ',
      title: 'Risk Analysis',
      description: 'Monte Carlo simulations for probabilistic risk assessment'
    },
    {
      icon: '∇',
      title: 'ML Algorithms',
      description: 'Custom neural networks with backpropagation and regularization'
    }
  ];

  return (
    <section className="msc-container">
      <div className="msc-header">
        <h2 className="msc-main-title">
          Our <span className="msc-highlight">Mathematical</span> Services
        </h2>
        <p className="msc-subtitle">
          PhD-level solutions to complex business problems
        </p>
      </div>

      <div className="msc-grid">
        {services.map((service, index) => (
          <div className="msc-card" key={index}>
            <div className="msc-card-icon">{service.icon}</div>
            <h3 className="msc-card-title">{service.title}</h3>
            <p className="msc-card-description">{service.description}</p>
            <div className="msc-card-decoration">
              <div className="msc-card-equation">
                {index % 2 === 0 ? 'f(x) = ∫ₐᵇ eˣ dx' : 'min f(x,y) = x² + y²'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MathServiceCards;