// components/ServiceCards.tsx
import React from 'react';
import './servicecards.css';

type MathServiceCard = {
  icon: string;
  title: string;
  description: string;
  equation: string;
};

const ServiceCards: React.FC = () => {
  const services: MathServiceCard[] = [
    {
      icon: 'Σ',
      title: 'Predictive Analytics',
      description: 'Forecast future trends with our advanced statistical models and machine learning algorithms',
      equation: 'P(y|x) = ∫P(y|θ)P(θ|x)dθ'
    },
    {
      icon: '∫',
      title: 'Optimization',
      description: 'Find optimal solutions to complex problems with our constraint-based modeling approaches',
      equation: 'min f(x) s.t. g(x) ≤ 0'
    },
    {
      icon: 'Δ',
      title: 'Risk Analysis',
      description: 'Quantify and mitigate risks using our probabilistic modeling frameworks',
      equation: 'VaR_α(X) = inf{x ∈ ℝ: P(X ≤ x) ≥ α}'
    }
  ];

  return (
    <section className="math-services-section">
      <div className="math-services-container">
        <div className="math-services-header">
          <h2 className="math-services-main-title">
            Modeling <span className="math-services-highlight">Services</span>
          </h2>
          <p className="math-services-subtitle">
            Advanced mathematical solutions tailored to your operational challenges
          </p>
        </div>

        <div className="math-services-grid">
          {services.map((service, index) => (
            <div className="math-service-card" key={index}>
              <div className="math-service-card-header">
                <div className="math-service-icon">{service.icon}</div>
                <h3 className="math-service-title">{service.title}</h3>
              </div>
              <div className="math-service-content">
                <p className="math-service-description">{service.description}</p>
                <div className="math-equation-container">
                  <div className="math-equation-bg-pattern"></div>
                  <div className="math-equation">{service.equation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;