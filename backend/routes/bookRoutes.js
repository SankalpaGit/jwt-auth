module.exports = function(upload) {
  const express = require('express');
  const router = express.Router();
  const Book = require('../models/Book');

  // Add a new book
  router.post('/add', upload.single('image'), async (req, res) => {
    const { title, author, isbn, quantity, status, publishedDate } = req.body; // Add publishedDate here
    
    // Handle uploaded file
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  
    if (!title || !author || !isbn || !quantity || !status || !publishedDate) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }
  
    try {
      const newBook = await Book.create({
        title,
        author,
        isbn,
        quantity,
        status,
        publishedDate, // Include publishedDate in the creation
        images: imageUrl
      });
      res.status(201).json(newBook);
    } catch (error) {
      console.error('Error while adding the book:', error.message);
      res.status(500).json({ message: 'Error adding the book', error: error.message });
    }
  });
  

  router.get('/view', async (req, res) => {
    try {
      const books = await Book.findAll();
      res.status(200).json(books);
    } catch (error) {
      console.error('Error while fetching books:', error.message);
    res.status(500).json({ message: 'Error fetching books', error: error.message });
    }
  });

  return router;
};
