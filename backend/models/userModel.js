const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,  // Osigurajte da e-mail bude jedinstven
        trim: true,
        lowercase: true,  // Ako želite da e-mail bude osjetljiv na velika i mala slova
    },
    password: {
        type: String,
        required: true,
        minlength: 6,  // Minimalna duljina lozinke
        maxlength: 100  // Maksimalna duljina lozinke
    }
});

module.exports = mongoose.model('User', userSchema);
