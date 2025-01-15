import React from 'react';
import './ContactsPage.css';
// Assurez-vous d'importer la bonne version de Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';  // Correct import pour @fortawesome/fontawesome-free

const ContactsPage = () => {
  return (
    <div className="contacts-page">
      <h2>Contactez-nous</h2>
      <p>Vous avez des questions ou des préoccupations ? Nous sommes là pour vous aider.</p>
      <p>Email : bookclub@gmail.com</p>
      <p>Téléphone : +123 456 789</p>

      <div className="social-icons">
        <p>Suivez-nous sur :</p>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>
    </div>
  );
};

export default ContactsPage;

