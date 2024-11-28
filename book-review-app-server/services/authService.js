const { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, confirmPasswordReset } = require('../config/firebase');
const { User } = require('../models');
const jwt = require('jsonwebtoken');

exports.login = async (email, password) => {
    try {
        // Sign in with Firebase
        const userCredential = await signInWithEmailAndPassword(getAuth(), email, password);

        // Get user from the database
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error('User not found');
        }

        // Sign JWT token
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '12h' });

        return { token, user };
    } catch (error) {
        throw new Error(error.message || 'An error occurred during login');
    }
};

exports.forgetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(getAuth(), email);
    } catch (error) {
        throw new Error(error.message || 'An error occurred while sending password reset email');
    }
};