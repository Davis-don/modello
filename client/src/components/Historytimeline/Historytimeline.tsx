import React from 'react';
import './historytimeline.css';

type StoryEvent = {
  title: string;
  description: string;
  icon: string;
};

const FounderTimeline: React.FC = () => {
  const story: StoryEvent[] = [
    {
      title: "The Vision",
      description: "Davis Mugo, a computer science and mathematics expert, identified how mathematical models could transform business decision-making",
      icon: "🔍"
    },
    {
      title: "The Passion",
      description: "Combining his expertise in algorithms and predictive modeling, Davis began developing innovative solutions to complex business problems",
      icon: "❤️"
    },
    {
      title: "The Breakthrough",
      description: "Created proprietary optimization techniques that outperformed traditional business forecasting methods",
      icon: "💡"
    },
    {
      title: "The Application",
      description: "Successfully applied these models across industries from finance to logistics, proving their universal value",
      icon: "🚀"
    },
    {
      title: "The Future",
      description: "Continuing to push boundaries in mathematical business optimization, with a growing team of like-minded experts",
      icon: "🌐"
    }
  ];

  return (
    <section className="founder-timeline">
      <div className="container">
        <h2 className="section-title">
          The <span className="highlight">Founder's Story</span>
        </h2>
        <div className="storyline">
          {story.map((event, index) => (
            <div className="story-event" key={index}>
              <div className="event-icon">{event.icon}</div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="founder-quote">
          <blockquote>
            "Mathematics is the language of business optimization. When you can model it, you can master it."
            <footer>- Davis Mugo, Founder</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default FounderTimeline;