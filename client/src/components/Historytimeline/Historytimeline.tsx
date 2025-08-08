import React from 'react';
import './historytimeline.css'

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  milestone: boolean;
};

const HistoryTimeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: "2015",
      title: "Founded",
      description: "Established with 3 mathematicians in Cambridge, MA",
      milestone: true
    },
    {
      year: "2017",
      title: "First Major Client",
      description: "Developed predictive models for Fortune 500 financial firm",
      milestone: false
    },
    {
      year: "2019",
      title: "Research Breakthrough",
      description: "Published novel optimization algorithm in SIAM Journal",
      milestone: true
    },
    {
      year: "2021",
      title: "Expansion",
      description: "Opened European office with team of 10 specialists",
      milestone: false
    },
    {
      year: "2023",
      title: "Current",
      description: "Serving clients across 12 industries with 50+ team members",
      milestone: true
    }
  ];

  return (
    <section className="history-timeline">
      <div className="container">
        <h2 className="section-title">
          Our <span className="highlight">Journey</span>
        </h2>
        <div className="timeline">
          {events.map((event, index) => (
            <div 
              className={`timeline-event ${event.milestone ? 'milestone' : ''}`} 
              key={index}
            >
              <div className="event-year">{event.year}</div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;