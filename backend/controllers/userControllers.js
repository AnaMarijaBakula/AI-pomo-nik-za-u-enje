const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// Registracija korisnika (user/guest)
const registerUser = async (req, res) => {
    try {
        console.log(req.body); // Pratite tijelo zahtjeva
        const { username, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Korisnik već postoji" });

        if (role === 'admin') return res.status(403).json({ message: "Ne možete registrirati admina ovim putem" });

        const hashedPassword = await bcrypt.hash(password, 10);

        let expiresAt = null;
        if (role === 'guest') {
            expiresAt = new Date();
            expiresAt.setDate(expiresAt.getDate() + 3);
        }

        const newUser = new User({ username, email, password: hashedPassword, role, expiresAt });

        await newUser.save();
        res.status(201).json({ message: `${role === 'guest' ? "Gost" : "Korisnik"} registriran` });
    } catch (error) {
        console.error(error); // Detaljno logiranje greške
        res.status(500).json({ message: "Greška na serveru", error: error.message });
    }
};


// Prijava korisnika (admin/user/guest)
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Korisnik nije pronađen" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Neispravna lozinka" });

        // Ako je gost i isteklo mu je vrijeme, izbriši ga
        if (user.role === 'guest') {
            if (!user.expiresAt) {
                return res.status(400).json({ message: "Gost nema datum isteka" });
            }

            if (new Date() > user.expiresAt) {
                await User.deleteOne({ _id: user._id });
                return res.status(403).json({ message: "Gost je istekao" });
            }
        }

        res.status(200).json({ message: `Prijava uspješna (${user.role})`, role: user.role });
    } catch (error) {
        res.status(500).json({ message: "Greška na serveru" });
    }
};

// Provjera autentifikacije
const checkAuth = (req, res) => {
    res.status(200).json({ message: "Provjera autentifikacije" });
};

module.exports = { registerUser, loginUser, checkAuth };
