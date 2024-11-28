const bookService = require('../services/bookService');

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const books = await bookService.getAllBooks(page, limit);
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await bookService.getBookById(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        if (error.message === 'Book not found') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

// Create a new book
exports.createBook = async (req, res) => {
    try {
        const newBook = await bookService.createBook(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Search books by name
exports.searchBooksByName = async (req, res) => {
    try {
        const books = await bookService.searchBooksByName(req.params.name);
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all reviews of a book by book ID
exports.getBookReviews = async (req, res) => {
    try {
        const reviews = await bookService.getBookReviews(req.params.id);
        res.status(200).json(reviews);
    } catch (error) {
        if (error.message === 'Book not found') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};
