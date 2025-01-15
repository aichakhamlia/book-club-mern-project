
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for React Router v6
import axios from 'axios';
import './BookList.css';
import Addbook from './addbook';

// Import des images
import FleurDeToi from '../assets/images/a fleur de toi.jpg';
import BetterThanMovie from '../assets/images/better than.jpg';
import Cebreaker from '../assets/images/cebreaker.webp';
import CommeDansLesLivres from '../assets/images/Comme-dans-les-livres.webp';
import IcePrince from '../assets/images/Ice-Prince.webp';
import Lete from '../assets/images/lete.jpg';
import Lune from '../assets/images/lune.jpg';
import PremiereVue from '../assets/images/premiere-vue.webp';

const BookList = () => {
  const [books, setBooks] = useState([]);
   // React Router v6 hook for navigation

  // Liste supplémentaire de livres
  const additionalBooks = [
    { id: 101, title: 'a fleur de toi', price: '12.99$', picture: FleurDeToi },
    { id: 102, title: 'better than movie', price: '15.99$', picture: BetterThanMovie },
    { id: 103, title: 'cebreaker', price: '18.99$', picture: Cebreaker },
    { id: 104, title: 'comme dans les livres', price: '14.99$', picture: CommeDansLesLivres },
    { id: 105, title: 'ice prince', price: '12.99$', picture: IcePrince },
    { id: 106, title: 'lete', price: '15.99$', picture: Lete },
    { id: 107, title: 'donne moi la lune ', price: '18.99$', picture: Lune }, 
    { id: 108, title: 'premiere vue ', price: '14.99$', picture: PremiereVue },
  ];

    

  // Fetch books after verifying the token
  useEffect(() => {
    const fetchBooks = async () => {
      
     

      // Fetch the books if token is valid
      axios
        .get('http://localhost:5000/api/getbooks') // Your existing API call to fetch books
        .then((response) => {
          const apiBooks = response.data.map((book, index) => ({
            ...book,
            id: book.id || index + 1, // Ensure a unique ID if missing
          }));
          setBooks(apiBooks);
        })
        .catch((error) => console.error('Error fetching books:', error));
    };

    fetchBooks();
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  // Combine les livres de l'API et ceux ajoutés manuellement
  const allBooks = [...books, ...additionalBooks];

  return (
    <div>
      <div>
        <Addbook />
      </div>

      <div className="book-list">
        {allBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img
              src={book.picture}
              alt={book.title}
              className="book-image"
              onError={(e) => (e.target.src = '/assets/default-image.jpg')} // Default image in case of error
            />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-price">{book.price}</p>
            <Link to={`/payment/${book.id}`} className="buy-button">
              Acheter
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;

