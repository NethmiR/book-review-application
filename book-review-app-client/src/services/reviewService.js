import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL + '/review';

// Create a new review
export async function createReview(reviewData) {
    try {
        const token = localStorage.getItem('book-token');
        const response = await axios.post(baseURL, reviewData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error creating review: ' + error.message);
    }
}

// Get review by ID
export async function getReviewById(reviewId) {
    try {
        const response = await axios.get(`${baseURL}/${reviewId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching review: ' + error.message);
    }
}

// Update a review by ID
export async function updateReview(reviewId, reviewData) {
    try {
        const response = await axios.put(`${baseURL}/${reviewId}`, reviewData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating review: ' + error.message);
    }
}

// Delete a review by ID
export async function deleteReview(reviewId) {
    try {
        const response = await axios.delete(`${baseURL}/${reviewId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting review: ' + error.message);
    }
}
