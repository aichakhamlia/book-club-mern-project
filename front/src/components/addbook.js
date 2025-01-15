import React, { useState } from 'react';

const AddBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setprice] = useState('');
  const [picture, setpicture] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      description,
      price,
      picture
    };

    try {

      const response = await fetch('http://localhost:5000/api/addbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });


      if (response.ok) {
        const data = await response.json();
        console.log('Book added:', data);
        alert('Book added successfully!');

        setTitle('');
        setAuthor('');
        setDescription('');
        window.location.reload();
      } else {
        alert('Failed to add book!');
      }
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Error adding book!');
    }
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="picture"
          value={picture}
          onChange={(e) => setpicture(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
export default AddBook;