import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

// Importation des images
import DiscutionImage from '../assets/images/discution.jpg';
import ReviewImage from '../assets/images/review.jpg';
import RecommendationImage from '../assets/images/dis2.png';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Bienvenue au Book Club</h1>
          <p>Rejoignez notre communauté passionnée par les livres et découvrez des nouvelles histoires chaque mois.</p>
          <Link to="/signup" className="cta-button">Rejoindre maintenant</Link>
        </div>
      </header>

      <section className="about-section">
        <h2>Qu'est-ce que le Book Club ?</h2>
        <p>Le Book Club est un endroit où les amoureux des livres peuvent partager, discuter et découvrir de nouveaux ouvrages à lire chaque mois. Nous organisons des discussions de groupe, des critiques de livres et bien plus encore !</p>
      </section>

      <section className="features-section">
        <h2>Nos caractéristiques</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <Link to="/discussions">
              <img src={DiscutionImage} alt="Book Discussion" />
              <h3>Discussions de groupe</h3>
              <p>Participez à des discussions mensuelles sur les livres que nous lisons ensemble.</p>
            </Link>
          </div>
          <div className="feature-card">
            <Link to="/reviews">
              <img src={ReviewImage} alt="Book Reviews" />
              <h3>Critiques de livres</h3>
              <p>Découvrez de nouvelles critiques pour vous aider à choisir vos prochains livres.</p>
            </Link>
          </div>
          <div className="feature-card">
            <Link to="/recommendations">
              <img src={RecommendationImage} alt="Book Recommendations" />
              <h3>Recommandations mensuelles</h3>
              <p>Recevez chaque mois une sélection de livres à lire, selon vos préférences.</p>
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Book Club - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default Home;
