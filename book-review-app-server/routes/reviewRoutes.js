const express = require('express');
const reviewController = require('../controllers/reviewController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticateToken, reviewController.createReview);
router.get('/:id', reviewController.getReviewById);
router.put('/:id', authenticateToken, reviewController.updateReview);
router.delete('/:id', authenticateToken, reviewController.deleteReview);

module.exports = router;