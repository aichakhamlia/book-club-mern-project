import React, { useState } from 'react';
import './DiscussionPage.css';

const DiscussionPage = () => {
  // État pour stocker les messages
  const [messages, setMessages] = useState([
    { id: 1, text: "Bonjour, comment ça va ?", sender: "user" },
    { id: 2, text: "Ça va bien, merci ! Et toi ?", sender: "admin" },
  ]);
  
  // État pour stocker le texte du message à envoyer
  const [newMessage, setNewMessage] = useState('');

  // Fonction pour supprimer un message
  const deleteMessage = (id) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  // Fonction pour ajouter un nouveau message
  const sendMessage = (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire

    if (newMessage.trim() === '') return; // Ne rien faire si le message est vide

    const newMsg = {
      id: messages.length + 1,  // Crée un ID unique pour chaque message
      text: newMessage,
      sender: "user",  // L'expéditeur ici est "user", vous pouvez personnaliser ça
    };

    // Ajout du nouveau message à l'état des messages
    setMessages([...messages, newMsg]);

    // Réinitialisation du champ de saisie
    setNewMessage('');
  };

  return (
    <div className="discussion-page">
      <div className="discussion-header">
        <h1>Discussion en direct</h1>
        <p className="subtitle">Discutez avec d'autres membres du club</p>
      </div>

      <div className="chat-group">
        <div className="chat-window">
          <div className="messages-container">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === "user" ? "sent" : "received"}`}
              >
                <p>{message.text}</p>
                <button
                  className="delete-button"
                  onClick={() => deleteMessage(message.id)}
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Zone de saisie du message */}
        <div className="message-input-container">
          <textarea
            className="message-input"
            placeholder="Tapez votre message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)} // Mise à jour du texte du message
          />
          <button className="send-button" onClick={sendMessage}>Envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;
