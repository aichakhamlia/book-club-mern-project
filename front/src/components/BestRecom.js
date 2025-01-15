// src/components/BestRecom.js
import React from 'react';
import './BestRecom.css';

const BestRecom = () => {
  return (
    <div className="best-recom-page">
      <h2>Les Meilleures Recommandations</h2>
      <p>Voici les livres les plus recommandés par nos membres et experts littéraires.</p>

      <div className="best-recom-list">
        <div className="book-card">
          <h3>Le Meilleur des Mondes</h3>
          <p>Auteur : Aldous Huxley</p>
          <p>Genre : Science-Fiction</p>
        </div>
        <div className="book-card">
          <h3>Le Seigneur des Anneaux</h3>
          <p>Auteur : J.R.R. Tolkien</p>
          <p>Genre : Fantasy</p>
        </div>
        <div className="book-card">
          <h3>La Guerre des Étoiles</h3>
          <p>Auteur : George Lucas</p>
          <p>Genre : Science-Fiction</p>
        </div>
        {/* Ajoute plus de livres ici */}
      </div>
    </div>
  );
};

export default BestRecom;
