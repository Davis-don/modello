import React from 'react';
import './team.css';

type TeamMember = {
  name: string;
  title: string;
  expertise: string;
  degree: string;
  funFact: string;
};

const TeamSection: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Dr. Elena Rodriguez",
      title: "Chief Mathematician",
      expertise: "Stochastic Calculus, PDEs",
      degree: "PhD Applied Mathematics, MIT",
      funFact: "Published 3 papers on fractional calculus before age 25"
    },
    {
      name: "Dr. Marcus Chen",
      title: "Director of Modeling",
      expertise: "Optimization, Game Theory",
      degree: "PhD Operations Research, Stanford",
      funFact: "Former national chess champion"
    },
    {
      name: "Dr. Priya Patel",
      title: "Senior Data Scientist",
      expertise: "Machine Learning, Bayesian Stats",
      degree: "PhD Statistics, Cambridge",
      funFact: "Can solve a Rubik's cube in under 2 minutes"
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">
          Our <span className="highlight">Team</span>
        </h2>
        <p className="section-subtitle">
          World-class mathematicians and modelers dedicated to solving your most complex challenges
        </p>
        
        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="member-header">
                <div className="member-icon">{member.name.charAt(0)}</div>
                <div>
                  <h3>{member.name}</h3>
                  <p className="member-title">{member.title}</p>
                </div>
              </div>
              <div className="member-details">
                <p><strong>Expertise:</strong> {member.expertise}</p>
                <p><strong>Education:</strong> {member.degree}</p>
                <div className="fun-fact">
                  <span>Fun Fact:</span> {member.funFact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;