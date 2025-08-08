import React from 'react';
import './contactinfo.css';

const ContactInfo: React.FC = () => {
  return (
    <section className="contact-info">
      <div className="container">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Our Headquarters</h3>
            <p>250 Math Park Drive</p>
            <p>Cambridge, MA 02142</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Phone</h3>
            <p>+1 (617) 555-0199</p>
            <p>Mon-Fri, 9am-5pm EST</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">💬</div>
            <h3>Live Chat</h3>
            <p>Available 24/7</p>
            <a href="/chat" className="chat-link">Start Chat Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;