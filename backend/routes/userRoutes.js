const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userControllers");

// Ruta za registraciju korisnika
router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;  // Preuzmi podatke iz tijela zahtjeva
        const user = await registerUser(email, password);  // Pozovi funkciju za registraciju
        res.status(201).json(user);  // Ako je uspješno registriran, pošaljite korisnika
    } catch (error) {
        res.status(400).send(error.message);  // Ako se dogodila greška, pošaljite odgovarajući status i poruku
    }
});

// Ruta za prijavu korisnika
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;  // Preuzmi podatke iz tijela zahtjeva
        const user = await loginUser(email, password);  // Pozovi funkciju za prijavu
        res.status(200).json(user);  // Ako je prijava uspješna, pošaljite podatke o korisniku
    } catch (error) {
        res.status(400).send(error.message);  // Ako se dogodila greška, pošaljite odgovarajući status i poruku
    }
});

module.exports = router;
