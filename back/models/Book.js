const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    picture: { type: String, required: true },
    available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Book', BookSchema);