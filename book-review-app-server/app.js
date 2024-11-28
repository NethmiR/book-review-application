const express = require('express');
const { sequelize } = require('./models'); // Import sequelize instance
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes'); // Import author routes
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const reviewRoutes = require('./routes/reviewRoutes'); // Import review routes
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(express.json());

app.use(cors());

// Define routes
app.use('/api/user', userRoutes);
app.use('/api/book', bookRoutes);
app.use('/api/author', authorRoutes); // Add author routes
app.use('/api/auth', authRoutes); // Add auth routes
app.use('/api/review', reviewRoutes); // Add review routes

sequelize.sync({ alter: true }).then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Unable to sync the database:', err);
});