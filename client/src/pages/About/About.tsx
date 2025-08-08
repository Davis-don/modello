import React from 'react';
import MissionStatement from '../../components/Mission/Mission';
import TeamSection from '../../components/Teamsection/Teamsection';
import HistoryTimeline from '../../components/Historytimeline/Historytimeline';
import './about.css'

const AboutPage: React.FC = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>Mathematical Excellence, <span>Practical Solutions</span></h1>
          <p>
            For nearly a decade, we've been bridging the gap between abstract mathematics 
            and real-world business challenges
          </p>
        </div>
      </section>
      
      <MissionStatement />
      <TeamSection />
      <HistoryTimeline />
      
      <section className="cta-section">
        <div className="container">
          <h2>Ready to transform your data into decisions?</h2>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;