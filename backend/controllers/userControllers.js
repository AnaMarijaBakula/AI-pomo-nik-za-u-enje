const bcrypt = require('bcryptjs');
const User = require('../models/userModel');  // Tu dodajemo model korisnika

// Funkcija za registraciju novog korisnika
async function registerUser(email, password) {
    try {
        // Provjeriti je li e-mail već zauzet
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            // Ako korisnik s istim e-mailom već postoji, provjerite lozinku
            const isMatch = await bcrypt.compare(password, existingUser.password);
            if (isMatch) {
                // Ako je lozinka ispravna, možete se prijaviti s istim e-mailom
                console.log('Korisnik već postoji, ali lozinka je ispravna.');
                return existingUser;  // Vratite korisnika jer je prijava uspješna
            } else {
                throw new Error('Neispravna lozinka za taj e-mail.');
            }
        } else {
            // Ako e-mail nije zauzet, hashirajte lozinku i spremite novog korisnika
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                email,        // E-mail korisnika
                password: hashedPassword  // Hashirana lozinka
            });

            // Spremanje korisnika u bazu podataka
            await newUser.save();
            console.log('Korisnik uspješno registriran!');
            return newUser;  // Vratite novog korisnika
        }
    } catch (error) {
        console.error('Greška pri registraciji:', error.message);
        throw error;
    }
}

// Funkcija za prijavu korisnika
async function loginUser(email, password) {
    try {
        const user = await User.findOne({ email }); // Korisnici se prijavljuju s e-mailom
        if (!user) {
            throw new Error('Korisnik nije pronađen');
        }

        // Provjera lozinke
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Neispravna lozinka');
        }

        console.log('Prijava uspješna');
        return user;  // Povratak podataka o korisniku
    } catch (error) {
        console.error('Greška pri prijavi:', error.message);
        throw error;
    }
}

module.exports = { registerUser, loginUser };
