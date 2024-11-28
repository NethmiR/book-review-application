import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL + '/book';

// Get all books
export async function getAllBooks() {
    try {
        const response = await axios.get(baseURL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching books: ' + error.message);
    }
}

// Get book by ID
export async function getBookById(bookId) {
    try {
        const response = await axios.get(`${baseURL}/${bookId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching book: ' + error.message);
    }
}

// Get all reviews of a book by book ID
export async function getBookReviews(bookId) {
    try {
        const response = await axios.get(`${baseURL}/${bookId}/reviews`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching reviews: ' + error.message);
    }
}

// Search books by name
export async function searchBooksByName(bookName) {
    try {
        const response = await axios.get(`${baseURL}/search/${bookName}`);
        return response.data;
    } catch (error) {
        throw new Error('Error searching books: ' + error.message);
    }
}

// Create a new book
export async function createBook(bookData) {
    try {
        const response = await axios.post(baseURL, bookData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating book: ' + error.message);
    }
}
