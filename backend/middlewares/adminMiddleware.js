const User = require('../models/userModel');

const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.session.userId);
        if (!user || user.role !== 'admin') {
            return res.status(403).json({ message: "Pristup zabranjen" });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: "Greška na serveru" });
    }
};

module.exports = { isAdmin };
