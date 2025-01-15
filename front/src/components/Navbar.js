import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Book Club</h1>
      <div className="links">
        <Link to="/">Explorer votre aventure</Link>
        <Link to="/signup"> le voyage commence ici</Link>
        <Link to="/book-list">L'univers des livres</Link>
        <Link to="/login">Connexion</Link> {/* Bouton pour se connecter */}
        <Link to="/contact">Contact</Link> {/* Bouton pour contacter */}
      </div>
    </nav>
  );
}

export default Navbar;
