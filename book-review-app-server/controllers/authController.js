const authService = require('../services/authService');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authService.login(email, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        await authService.forgetPassword(email);
        res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};