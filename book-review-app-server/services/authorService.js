const { Author } = require('./../models'); // Assuming you have an Author model
const { Op } = require('sequelize');

// Get all authors
exports.getAllAuthors = async (page, limit) => {
    try {
        const options = {};
        if (page && limit) {
            options.limit = parseInt(limit);
            options.offset = (parseInt(page) - 1) * parseInt(limit);
        }
        return await Author.findAll(options);
    } catch (error) {
        throw new Error('Error fetching authors');
    }
};

// Get author by ID
exports.getAuthorById = async (id) => {
    try {
        const author = await Author.findOne({ where: { id } });
        if (!author) throw new Error('Author not found');
        return author;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get author by name
exports.getAuthorByName = async (name) => {
    try {
        return await Author.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });
    } catch (error) {
        throw new Error('Error searching authors');
    }
};

// Create a new author
exports.createAuthor = async (authorData) => {
    try {
        return await Author.create(authorData);
    } catch (error) {
        throw new Error('Error creating author');
    }
};

// Delete an author
exports.deleteAuthor = async (id) => {
    try {
        const author = await Author.findOne({ where: { id } });
        if (!author) throw new Error('Author not found');
        await author.destroy();
        return true;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update an author
exports.updateAuthor = async (id, authorData) => {
    try {
        const author = await Author.findOne({ where: { id } });
        if (!author) throw new Error('Author not found');
        await author.update(authorData);
        return author;
    } catch (error) {
        throw new Error(error.message);
    }
};
