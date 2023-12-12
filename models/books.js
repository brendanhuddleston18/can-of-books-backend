const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    description: String,
    status: String
  }
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;