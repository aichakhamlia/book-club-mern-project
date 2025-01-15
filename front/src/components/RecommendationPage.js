
import React from 'react';
import './RecommendationPage.css';

const RecommendationPage = () => {
  const recommendedBooks = [
    { title: "Le Seigneur des Anneaux", author: "J.R.R. Tolkien" },
    { title: "1984", author: "George Orwell" },
    { title: "Dune", author: "Frank Herbert" },
    { title: "Harry Potter à l'école des sorciers", author: "J.K. Rowling" },
  ];

  return (
    <div className="recommendation-page">
      <h2>Recommandations mensuelles</h2>
      <p>Voici nos recommandations de livres pour ce mois-ci. Choisissez ceux que vous souhaitez lire !</p>

      <div className="book-list">
        {recommendedBooks.map((book, index) => (
          <div key={index} className="book-item">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationPage;
