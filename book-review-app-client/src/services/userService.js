import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL + '/user';

// Get all users
export async function getAllUsers() {
    try {
        const response = await axios.get(baseURL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
}

// Get user by ID
export async function getUserById(userId) {
    try {
        const response = await axios.get(`${baseURL}/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user: ' + error.message);
    }
}

// Get user by email
export async function getUserByEmail(email) {
    try {
        const response = await axios.get(`${baseURL}/email/${email}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user: ' + error.message);
    }
}

// Get all reviews by user ID
export async function getUserReviews(userId) {
    try {
        const response = await axios.get(`${baseURL}/${userId}/reviews`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching reviews: ' + error.message);
    }
}

// Create a new user
export async function createUser(userData) {
    try {
        const response = await axios.post(baseURL, userData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
}

// Delete a user
export async function deleteUser(userId) {
    try {
        const response = await axios.delete(`${baseURL}/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting user: ' + error.message);
    }
}

// Update a user
export async function updateUser(userId, userData) {
    try {
        const response = await axios.put(`${baseURL}/${userId}`, userData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
}
