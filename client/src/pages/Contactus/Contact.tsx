import React from 'react';
import ContactHero from '../../components/Contacthero/Contacthero';
import ContactForm from '../../components/Contactform/Contactform';
import ContactInfo from '../../components/Contactinfo/Contactinfo';
// import ContactMap from '../../components/Contactmap/Contactmap';
import './contact.css';

const ContactPage: React.FC = () => {
  return (
    <main className="contact-page">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      {/* <ContactMap /> */}
    </main>
  );
};

export default ContactPage;