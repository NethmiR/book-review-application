import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL + '/author';

// Create a new author
export async function createAuthor(authorData) {
    try {
        const response = await axios.post(baseURL, authorData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating author: ' + error.message);
    }
}

// Delete an author by ID
export async function deleteAuthor(authorId) {
    try {
        const response = await axios.delete(`${baseURL}/${authorId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting author: ' + error.message);
    }
}

// Get author by name
export async function getAuthorByName(authorName) {
    try {
        const response = await axios.get(`${baseURL}/search/${authorName}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching author: ' + error.message);
    }
}
