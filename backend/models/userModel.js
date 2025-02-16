const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true, // Ovdje postavljate jedinstveni indeks
        required: true
    },
    email: {
            type: String,
            required: true,
            unique: true },

    password: {
            type: String,
            required: true },

    role: {
            type: String,
            enum: ['user', 'guest', 'admin'],
            default: 'user' }, // Dodana uloga

    createdAt: {
            type: Date,
            default: Date.now },

    expiresAt: {
            type: Date } // Samo za goste
});

// Ako je gost, postavi trajanje od 3 dana
userSchema.pre('save', function (next) {
    if (this.role === 'guest' && !this.expiresAt) {
        this.expiresAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
    }
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
