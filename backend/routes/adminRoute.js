const express = require('express');
const { isAdmin } = require('../middlewares/adminMiddleware');
const User = require('../models/userModel');

const router = express.Router();

// Dohvati sve korisnike
router.get('/users', isAdmin, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Greška na serveru" });
    }
});

// Obriši korisnika
router.delete('/users/:id', isAdmin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Korisnik obrisan" });
    } catch (error) {
        res.status(500).json({ message: "Greška na serveru" });
    }
});

module.exports = router;
