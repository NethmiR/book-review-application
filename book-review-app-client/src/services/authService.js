import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL + '/auth';

// Login
export async function login(credentials) {
    try {
        const response = await axios.post(`${baseURL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw new Error('Error logging in: ' + error.message);
    }
}

// Forget Password
export async function forgetPassword(email) {
    try {
        const response = await axios.post(`${baseURL}/forget-password`, { email });
        return response.data;
    } catch (error) {
        throw new Error('Error requesting password reset: ' + error.message);
    }
}
