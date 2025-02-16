const express = require('express');
const router = express.Router();
const { registerUser, loginUser, checkAuth } = require('../controllers/userControllers');

// Ruta za registraciju korisnika
router.post('/register', registerUser);

// Ruta za prijavu korisnika
router.post('/login', loginUser);

// Ruta za provjeru prijave korisnika
router.get('/check', checkAuth);

module.exports = router;
