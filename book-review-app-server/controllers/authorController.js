const authorService = require('../services/authorService');

// Get all authors
exports.getAllAuthors = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const authors = await authorService.getAllAuthors(page, limit);
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get author by ID
exports.getAuthorById = async (req, res) => {
    try {
        const author = await authorService.getAuthorById(req.params.id);
        res.status(200).json(author);
    } catch (error) {
        if (error.message === 'Author not found') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

// Get author by name
exports.getAuthorByName = async (req, res) => {
    try {
        const authors = await authorService.getAuthorByName(req.params.name);
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new author
exports.createAuthor = async (req, res) => {
    try {
        const newAuthor = await authorService.createAuthor(req.body);
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an author
exports.deleteAuthor = async (req, res) => {
    try {
        await authorService.deleteAuthor(req.params.id);
        res.status(200).json({ message: 'Author deleted successfully' });
    } catch (error) {
        if (error.message === 'Author not found') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

// Update an author
exports.updateAuthor = async (req, res) => {
    try {
        const updatedAuthor = await authorService.updateAuthor(req.params.id, req.body);
        res.status(200).json(updatedAuthor);
    } catch (error) {
        if (error.message === 'Author not found') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};
