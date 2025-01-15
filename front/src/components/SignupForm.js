import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: '',
    government: '',
    bookType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    try {
      console.log('Données envoyées:', formData);
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          country: formData.country,
          government: formData.government,
          bookType: formData.bookType,
        }),
      });

      const data = await response.json();
      console.log('Réponse du serveur:', data);

      if (response.ok) {
        alert('Inscription réussie.');
        window.location.href = '/login'
      } else {
        alert(data.message || 'Erreur inconnue.');
      }
    } catch (err) {
      console.error('Erreur lors de la requête:', err);
      alert("Erreur lors de l'inscription.");
    }
  };

  return (
    <div className="signup-form-container">
      <h2>Inscrivez-vous à BookClub</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Entrez votre nom complet"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Entrez votre e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Entrez un mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmez votre mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Numéro de téléphone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="123-456-7890"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Pays</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Entrez votre pays"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="government">Gouvernement</label>
          <input
            type="text"
            id="government"
            name="government"
            placeholder="Entrez votre gouvernement"
            value={formData.government}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookType">Type de livre préféré</label>
          <select
            id="bookType"
            name="bookType"
            value={formData.bookType}
            onChange={handleChange}
            required
          >
            <option value="">Choisissez un type</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="biography">Biographie</option>
            <option value="mystery">Mystère</option>
            <option value="fantasy">Fantasy</option>
            <option value="science">Science</option>
          </select>
        </div>
        <button type="submit" className="submit-button">S'inscrire</button>
      </form>

      
      <footer className="footer">
        <p>&copy; 2025 Book Club - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default SignupForm;
