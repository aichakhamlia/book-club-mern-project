

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MonStockDeLivres.css';




import BetterThanMovie from '../assets/images/better than.jpg';
import Cebreaker from '../assets/images/cebreaker.webp';



const MonStockDeLivres = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const verifyToken = async () => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    if (!token) {
      navigate('/login');
      return false;
    }
  };
  verifyToken();

  const logout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');

    // Redirect to login page
    navigate('/login');
  };

  useEffect(() => {
    // Replace API call with mock data
    const mockBooks = [
    { id: 102, title: 'better than movie', price: '15.99$', picture: BetterThanMovie },
    { id: 103, title: 'cebreaker', price: '18.99$', picture: Cebreaker }, 
    ];
    setBooks(mockBooks);
  }, []);

  return (
    <div className="stock-page">
      <div className="stock-header">
        <button onClick={logout}>Déconnexion</button>
      </div>
      <h1>Mon Stock De Livres</h1>
      <div className="stock-list">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="stock-card">
              <img
                src={book.picture || '/assets/default-image.jpg'}
                alt={book.title}
                className="stock-image"
              />
              <h3 className="stock-title">{book.title}</h3>
              <p className="stock-price">{book.price}</p>
            </div>
          ))
        ) : (
          <p>Aucun livre disponible dans votre stock.</p>
        )}
      </div>
    </div>
  );
};

export default MonStockDeLivres;


