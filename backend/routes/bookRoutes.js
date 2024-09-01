// routes/book.js
module.exports = function(upload) {
  const express = require('express');
  const router = express.Router();
  const Book = require('../models/Book');

  // Add a new book
  router.post('/add', async (req, res) => {
    const { title, author, isbn, quantity, status } = req.body;
  
    if (!title || !author || !isbn || !quantity || !status) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }
  
    try {
      const newBook = await Book.create({
        title,
        author,
        isbn,
        quantity,
        status,
        image: null // Skip image for now
      });
      res.status(201).json(newBook);
    } catch (error) {
      console.error('Error while adding the book:', error.message);
      res.status(500).json({ message: 'Error adding the book', error: error.message });
    }
  });
  
  

  return router;
};