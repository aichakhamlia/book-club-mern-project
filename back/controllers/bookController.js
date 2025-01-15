const Book = require('../models/Book');

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const addBook = async (req, res) => {
    try {
        const { title, author, description, price,picture } = req.body;
        console.log(req.body);
        const book = new Book({ title, author, description, price,picture });
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getBooks, addBook };