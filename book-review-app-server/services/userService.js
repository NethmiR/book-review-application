const { User, Review, Book } = require('./../models'); // Assuming you have a User model
const {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail
} = require('../config/firebase');

// Get all users
exports.getAllUsers = async () => {
    return await User.findAll();
};

// Get user by ID
exports.getUserById = async (id) => {
    return await User.findOne({ id });
};

// Get user by email
exports.getUserByEmail = async (email) => {
    return await User.findOne({ email });
};

// Create a new user
exports.createUser = async (userData) => {
    try {
        const { email, password, ...otherData } = userData;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            throw new Error('Email already in use');
        }

        // Create user with Firebase
        const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);
        await sendEmailVerification(userCredential.user);

        // Create user in the database
        const newUser = await User.create({ email, ...otherData });
        return newUser;
    } catch (error) {
        throw new Error(error.message || "An error occurred while creating the user");
    }
};

// Get all reviews by user ID
exports.getUserReviews = async (userId) => {
    try {
        const user = await User.findOne({
            where: { id: userId },
            include: [
                {
                    model: Review,
                    as: 'reviews',
                    include: [{ model: Book, as: 'book' }]
                }
            ],
            order: [
                [{ model: Review, as: 'reviews' }, 'rating', 'DESC']
            ]
        });
        if (!user) throw new Error('User not found');
        return user.reviews;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a user
exports.deleteUser = async (id) => {
    const user = await User.findOne({ id });
    if (user) {
        await user.destroy();
        return true;
    } else {
        return false;
    }
};

// Update a user
exports.updateUser = async (id, userData) => {
    const user = await User.findOne({ id });

    if (user) {
        await user.update(userData);
        return user;
    } else {
        return null;
    }
};
