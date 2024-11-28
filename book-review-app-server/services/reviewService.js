
const { Review, Book, User } = require('../models');

exports.createReview = async (reviewData) => {
    const { book_id, userId } = reviewData;

    const book = await Book.findByPk(book_id);
    if (!book) {
        throw new Error('Invalid book ID');
    }

    const user = await User.findByPk(userId);
    if (!user) {
        throw new Error('Invalid user ID');
    }

    reviewData.status = "NOT EDITED";
    return Review.create(reviewData);
};

exports.getReviewById = async (id) => {
    return Review.findByPk(id);
};

exports.updateReview = async (id, reviewData) => {
    const review = await Review.findByPk(id);
    if (!review) {
        throw new Error('Review not found');
    }

    reviewData.status = "EDITED";
    return review.update(reviewData);
};

exports.deleteReview = async (id) => {
    const review = await Review.findByPk(id);
    if (!review) {
        throw new Error('Review not found');
    }

    await review.destroy();
    return true;
};