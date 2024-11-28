const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authenticateToken = require('../middleware/authMiddleware');

// Get all books
router.get('/', bookController.getAllBooks);

// Get book by ID
router.get('/:id', bookController.getBookById);

// Get all reviews of a book by book ID
router.get('/:id/reviews', bookController.getBookReviews);

// Search books by name
router.get('/search/:name', bookController.searchBooksByName);

// Create a new book
router.post('/', authenticateToken, bookController.createBook);

module.exports = router;
