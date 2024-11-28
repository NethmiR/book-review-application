const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const authenticateToken = require('../middleware/authMiddleware');

// Create a new author
router.post('/', authenticateToken, authorController.createAuthor);

// Delete an author
router.delete('/:id', authorController.deleteAuthor);

// Get author by name
router.get('/search/:name', authorController.getAuthorByName);

module.exports = router;
