// components/ProjectCard.tsx
import React from 'react';
import './projectcard.css';

// Sample graph images (would import actual images in real project)
const graph1 = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><path d="M20,180 L80,120 L140,160 L200,100 L260,140 L320,80 L380,120" stroke="%234361ee" stroke-width="3" fill="none"/><path d="M20,180 Q50,100 80,120 T140,160 T200,100 T260,140 T320,80 T380,120" stroke="%234cc9f0" stroke-width="2" fill="none" stroke-dasharray="5,5"/></svg>';
const graph2 = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect x="40" y="80" width="60" height="120" fill="%234361ee"/><rect x="120" y="120" width="60" height="80" fill="%233a0ca3"/><rect x="200" y="40" width="60" height="160" fill="%234cc9f0"/><rect x="280" y="160" width="60" height="40" fill="%23f72585"/></svg>';
const graph3 = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><circle cx="100" cy="100" r="80" fill="%234361ee" opacity="0.7"/><circle cx="250" cy="100" r="60" fill="%234cc9f0" opacity="0.7"/></svg>';

type ImpactStat = {
  value: string;
  label: string;
};

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  stats: ImpactStat[];
  equation?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  category, 
  description, 
  image, 
  stats,
  equation 
}) => {
  return (
    <div className="mpc-card">
      <div className="mpc-card-header">
        <span className="mpc-category">{category}</span>
        <h3 className="mpc-title">{title}</h3>
      </div>
      
      <div className="mpc-image-container">
        <img src={image} alt={title} className="mpc-image" />
        {equation && (
          <div className="mpc-equation-overlay">
            <div className="mpc-equation">{equation}</div>
          </div>
        )}
      </div>
      
      <p className="mpc-description">{description}</p>
      
      <div className="mpc-stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="mpc-stat">
            <div className="mpc-stat-value">{stat.value}</div>
            <div className="mpc-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div className="mpc-decoration">
        <div className="mpc-decoration-line"></div>
      </div>
    </div>
  );
};

// Project Card Container Component
const ProjectCardContainer: React.FC = () => {
  const projects = [
    {
      title: "Labor Market Optimization Model",
      category: "Econometrics",
      description: "Advanced matching algorithm connecting job seekers with optimal opportunities using game theory and linear programming",
      image: graph1,
      stats: [
        { value: "73%", label: "Match Accuracy" },
        { value: "2.4x", label: "Faster Placement" },
        { value: "89%", label: "Retention Rate" }
      ],
      equation: "max Σ(u_i + v_j)"
    },
    {
      title: "Revenue Forecasting System",
      category: "Time Series Analysis",
      description: "ARIMA-based predictive model with 92% accuracy for quarterly revenue projections",
      image: graph2,
      stats: [
        { value: "92%", label: "Forecast Accuracy" },
        { value: "38%", label: "Cost Reduction" },
        { value: "5.1M", label: "Annual Savings" }
      ],
      equation: "ARIMA(p,d,q)"
    },
    {
      title: "Skills Gap Analyzer",
      category: "Machine Learning",
      description: "Neural network identifying emerging skill demands in the tech sector with 87% precision",
      image: graph3,
      stats: [
        { value: "87%", label: "Precision" },
        { value: "63%", label: "Adoption Rate" },
        { value: "2.9x", label: "ROI" }
      ],
      equation: "f(x) = σ(Wx + b)"
    }
  ];

  return (
    <section className="mpc-container">
      <div className="mpc-header">
        <h2 className="mpc-main-title">
          Our <span className="mpc-highlight">Projects</span> in Action
        </h2>
        <p className="mpc-subtitle">
          Mathematical models delivering measurable impact across industries
        </p>
      </div>
      
      <div className="mpc-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectCardContainer;