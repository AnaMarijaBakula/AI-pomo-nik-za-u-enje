const asyncHandler = require('express-async-handler');

const uploadFiles = asyncHandler(async (req, res) => {
    // Provjera da li su datoteke poslane
    const files = req.files;
    if (!files || files.length === 0) {
        return res.status(400).json({ message: "Nema učitanih datoteka." });
    }

    // Procesiranje svake datoteke (npr. logiranje sadržaja u memoriji)
    files.forEach(file => {
        console.log(`Naziv datoteke: ${file.originalname}`);
        console.log(`Sadržaj datoteke: ${file.buffer.toString()}`); // Pretvaranje sadržaja u string
    });

    // Možete obraditi datoteke (npr. slanje u bazu, analiza koda, itd.)

    // Odgovor korisniku
    res.status(200).json({ message: "Datoteke uspješno učitane.", fileCount: files.length });
});

module.exports = { uploadFiles };
