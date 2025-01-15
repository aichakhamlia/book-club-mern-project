
import React, { useState } from 'react';
import './ReviewPage.css';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: 'Le Hobbit',
      genre: 'Fantasy',
      author: 'J.R.R. Tolkien',
      rating: 5,
      reviewText: 'Une aventure magique à travers la Terre du Milieu.',
    },
    {
      id: 2,
      title: '1984',
      genre: 'Dystopie',
      author: 'George Orwell',
      rating: 4,
      reviewText: 'Un roman visionnaire sur un futur totalitaire.',
    },
    // Vous pouvez ajouter plus de critiques ici
  ]);

  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(1);
  const [newTitle, setNewTitle] = useState('');  // Ajout pour le titre du film/livre

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview && newTitle) {
      const newReviewObj = {
        id: reviews.length + 1,
        title: newTitle,
        genre: 'Inconnu',  // Vous pouvez ajouter un champ pour le genre si nécessaire
        author: 'Anonyme', // Vous pouvez ajouter un champ pour l'auteur si nécessaire
        rating: newRating,
        reviewText: newReview,
      };
      setReviews([...reviews, newReviewObj]);
      setNewReview('');
      setNewRating(1);
      setNewTitle(''); // Réinitialiser le titre après soumission
    }
  };

  return (
    <div className="review-page">
      <h2>Critiques de livres</h2>
      <p>Consultez les critiques des livres et laissez-nous savoir ce que vous en pensez !</p>

      <div className="reviews-container">
        <h3>Critiques par Genre</h3>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h4>{review.title} - <em>{review.genre}</em></h4>
            <p><strong>Auteur:</strong> {review.author}</p>
            <p><strong>Évaluation:</strong> {'⭐'.repeat(review.rating)}</p>
            <p>{review.reviewText}</p>
          </div>
        ))}
      </div>

      <div className="review-form">
        <h3>Ajoutez votre critique</h3>
        
        {/* Champ pour le titre du film/livre */}
        <label htmlFor="title">Titre du film/livre :</label>
        <input
          type="text"
          id="title"
          placeholder="Entrez le titre du film ou livre"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        
        {/* Champ pour l'avis */}
        <textarea
          placeholder="Écrivez votre critique ici..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />

        {/* Sélecteur pour l'évaluation */}
        <div>
          <label htmlFor="rating">Évaluation: </label>
          <select
            id="rating"
            value={newRating}
            onChange={(e) => setNewRating(parseInt(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>{'⭐'.repeat(star)}</option>
            ))}
          </select>
        </div>

        {/* Bouton de soumission */}
        <button onClick={handleSubmit}>Soumettre</button>
      </div>
    </div>
  );
};

export default ReviewPage;
