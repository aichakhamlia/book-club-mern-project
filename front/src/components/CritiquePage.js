import React, { useState } from 'react';
import './CritiquePage.css';

const CritiquePage = () => {
  const [critique, setCritique] = useState('');
  const [rating, setRating] = useState(1);

  const handleCritiqueChange = (e) => {
    setCritique(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = () => {
    if (critique) {
      alert(`Critique soumise : ${critique}, Note : ${rating}`);
      // Ici tu peux ajouter le code pour envoyer la critique dans un backend ou un state global
    } else {
      alert('Veuillez entrer une critique.');
    }
  };

  return (
    <div className="critique-page">
      <h1>Écrire une Critique</h1>
      <p>Partagez votre avis sur le livre que vous avez lu et attribuez-lui une note.</p>

      <div className="critique-form">
        <textarea
          value={critique}
          onChange={handleCritiqueChange}
          placeholder="Écrivez votre critique ici..."
          rows="6"
        ></textarea>

        <div className="rating">
          <label htmlFor="rating">Note : </label>
          <select id="rating" value={rating} onChange={handleRatingChange}>
            <option value="1">1 étoile</option>
            <option value="2">2 étoiles</option>
            <option value="3">3 étoiles</option>
            <option value="4">4 étoiles</option>
            <option value="5">5 étoiles</option>
          </select>
        </div>

        <button className="submit-button" onClick={handleSubmit}>Soumettre la critique</button>
      </div>
    </div>
  );
};

export default CritiquePage;
