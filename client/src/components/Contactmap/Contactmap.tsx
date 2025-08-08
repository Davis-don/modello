import React from 'react';
import './Contactmap.css';

const ContactMap: React.FC = () => {
  return (
    <section className="contact-map">
      <div className="container">
        <h2>Find Our Office</h2>
        <div className="map-container">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.584346305918!2d-71.0855429246878!3d42.36800507118705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370aaf51a6a87%3A0xd0e08ea5b308203c!2sMassachusetts%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;