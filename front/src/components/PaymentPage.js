import React, { useState } from 'react';
import './PaymentPage.css';

const LoginPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [bankDetails, setBankDetails] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Logique de soumission du paiement
  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    console.log('Paiement soumis', {
      cardNumber,
      expiryDate,
      cvv,
      name,
      paymentMethod,
      bankDetails,
      paypalEmail,
    });
    setIsSubmitted(true); // Affichage du message de confirmation
  };

  return (
    <div className="login-page">
      <div className="payment-form">
        <h3>Mode de Paiement</h3>
        <form onSubmit={handlePaymentSubmit}>
          <div className="input-group">
            <label htmlFor="paymentMethod">Méthode de paiement</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="card">Carte bancaire</option>
              <option value="bank">Virement bancaire</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          {paymentMethod === 'card' && (
            <>
              <div className="input-group">
                <label htmlFor="cardNumber">Numéro de carte</label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 5678 9876 5432"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="expiryDate">Date d'expiration</label>
                <input
                  type="text"
                  id="expiryDate"
                  placeholder="MM/AA"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="cvv">Code CVV</label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="name">Nom sur la carte</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          {paymentMethod === 'bank' && (
            <div className="input-group">
              <label htmlFor="bankDetails">Détails du virement</label>
              <input
                type="text"
                id="bankDetails"
                placeholder="IBAN, BIC, etc."
                value={bankDetails}
                onChange={(e) => setBankDetails(e.target.value)}
                required
              />
            </div>
          )}

          {paymentMethod === 'paypal' && (
            <div className="input-group">
              <label htmlFor="paypalEmail">Email PayPal</label>
              <input
                type="email"
                id="paypalEmail"
                placeholder="exemple@paypal.com"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit">Payer</button>
        </form>

        {isSubmitted && (
          <div className="payment-confirmation">
            <p>Paiement effectué avec succès !</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;  
