const CodeAnalysis = require('../models/codeAnalysisModel');
const asyncHandler = require('express-async-handler');

// Funkcija za dohvaćanje svih savjeta
const getAllAdvice = asyncHandler(async (req, res) => {
    try {
        const advice = await CodeAnalysis.find({});
        if (!advice || advice.length === 0) {
            return res.status(404).json({ message: "No advice found." });
        }
        res.status(200).json({ advice });
    } catch (error) {
        console.error("Error fetching advice:", error);
        res.status(500).json({ message: "Error fetching advice", error: error.message });
    }
});

const addAdvice = asyncHandler(async (req, res) => {
    const { fileName, adviceTitle, adviceDescription } = req.body;

    // Provjeri da li svi podaci postoje
    if (!fileName || !adviceTitle || !adviceDescription) {
        return res.status(400).json({ message: 'Molimo vas da unesete sve potrebne podatke.' });
    }

    // Kreiraj novi savjet
    const newAdvice = new CodeAnalysis({
        fileName,
        adviceTitle,
        adviceDescription,
    });

    try {
        // Spremi novi savjet u bazu
        await newAdvice.save();
        res.status(201).json({ message: 'Savjet uspješno dodan!', newAdvice });
    } catch (error) {
        res.status(500).json({ message: 'Došlo je do greške pri dodavanju savjeta.', error: error.message });
    }
});

module.exports = {
    getAllAdvice,
    addAdvice
};