import React, { useState } from 'react';
import './ChatGroup.css';

const ChatGroup = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setNewMessage('');
  };

  const handleDeleteMessage = (index) => {
    setMessages((prevMessages) => prevMessages.filter((_, i) => i !== index));
  };

  return (
    <div className="chat-group">
      <div className="chat-display">
        {messages.length === 0 ? (
          <p className="no-messages">Aucun message pour le moment.</p>
        ) : (
          <ul>
            {messages.map((message, index) => (
              <li key={index} className="chat-message">
                <span>{message}</span>
                <button onClick={() => handleDeleteMessage(index)} className="delete-button">
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="message-input-section">
        <input
          type="text"
          placeholder="Écrivez votre message..."
          className="message-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend} className="send-button">Envoyer</button>
      </div>
    </div>
  );
};

export default ChatGroup;

