const { Book, Author, Review, User } = require('./../models'); // Assuming you have a Book model
const { Op } = require('sequelize');

// Get all books
exports.getAllBooks = async (page, limit) => {
    try {
        const options = {
            include: [{ model: Author, as: 'author' }]
        };
        if (page && limit) {
            options.limit = parseInt(limit);
            options.offset = (parseInt(page) - 1) * parseInt(limit);
        }
        return await Book.findAll(options);
    } catch (error) {
        throw new Error('Error fetching books');
    }
};

// Get book by ID
exports.getBookById = async (id) => {
    try {
        const book = await Book.findOne({
            where: { id },
            include: [{ model: Author, as: 'author' }]
        });
        if (!book) throw new Error('Book not found');
        return book;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Create a new book
exports.createBook = async (bookData) => {
    try {
        return await Book.create(bookData);
    } catch (error) {
        throw new Error('Error creating book');
    }
};

// Delete a book
exports.deleteBook = async (id) => {
    try {
        const book = await Book.findOne({ where: { id } });
        if (!book) throw new Error('Book not found');
        await book.destroy();
        return true;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a book
exports.updateBook = async (id, bookData) => {
    try {
        const book = await Book.findOne({ where: { id } });
        if (!book) throw new Error('Book not found');
        await book.update(bookData);
        return book;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all reviews of a book by book ID
exports.getBookReviews = async (bookId) => {
    try {
        const book = await Book.findOne({
            where: { id: bookId },
            include: [
                { model: Review, as: 'reviews', include: [{ model: User, as: 'user' }] },
                { model: Author, as: 'author' }
            ],
            order: [
                [{ model: Review, as: 'reviews' }, 'rating', 'DESC']
            ]
        });
        if (!book) throw new Error('Book not found');
        return {
            bookDetails: book,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

// Search books by name
exports.searchBooksByName = async (name) => {
    try {
        return await Book.findAll({
            where: {
                name: {
                    [Op.ilike]: `%${name}%`
                }
            },
            include: [{ model: Author, as: 'author' }]
        });
    } catch (error) {
        throw new Error('Error searching books');
    }
};
