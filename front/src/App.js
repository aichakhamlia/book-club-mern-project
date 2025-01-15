
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import BookList from './components/BookList';
import RecommendationPage from './components/RecommendationPage';
import ReviewPage from './components/ReviewPage';
import DiscussionPage from './components/DiscussionPage';
import ContactsPage from './components/ContactsPage';
import LoginPage from './components/LoginPage';
import MonStockDeLivres from './components/MonStockDeLivres'; // Import de la page MonStockDeLivres
import PaymentPage from './components/PaymentPage'; // Ajout de la page de paiement

import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/book-list" element={<BookList />} />
          <Route path="/recommendations" element={<RecommendationPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="/discussions" element={<DiscussionPage />} />
          <Route path="/contact" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Page de login */}
          <Route path="/mon-stock" element={<MonStockDeLivres />} /> {/* Nouvelle route */}
          <Route path="/payment/:id" element={<PaymentPage />} /> {/* Route dynamique */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
