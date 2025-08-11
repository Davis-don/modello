import React from 'react';
import './contactinfo.css';

const ContactInfo: React.FC = () => {
  const whatsappNumber = '254758420860'; // Kenyan number format for WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="contact-info">
      <div className="container">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Our Location</h3>
            <p>Nairobi, Kenya</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Phone</h3>
            <p>+254 758 420860</p>
            <p>Mon-Fri, 9am-5pm EAT</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">💬</div>
            <h3>WhatsApp</h3>
            <p>Available 24/7</p>
            <a 
              href={whatsappLink} 
              className="chat-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;