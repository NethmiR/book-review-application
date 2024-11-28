const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');

// Get all users
router.get('/', userController.getAllUsers);

// Get user by ID
router.get('/:id', authenticateToken, userController.getUserById);

// Get user by email
router.get('/email/:email', authenticateToken, userController.getUserByEmail);

// Get all reviews by user ID
router.get('/:id/reviews', authenticateToken, userController.getUserReviews);

// Create a new user
router.post('/', userController.createUser);

// Delete a user
router.delete('/:id', authenticateToken, userController.deleteUser);

// Update a user
router.put('/:id', authenticateToken, userController.updateUser);

module.exports = router;
