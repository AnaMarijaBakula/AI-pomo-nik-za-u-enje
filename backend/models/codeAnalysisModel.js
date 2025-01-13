const mongoose = require('mongoose');

const adviceSchema = new mongoose.Schema({
    fileName: {
      type: String,
        required: true
    },
    adviceTitle: {
        type: String,
        required: true
    },
    adviceDescription: {
        incorrectCode: {
            type: String,
            required: true
        },
        correctCode: {
            type: String,
            required: true
        },
        suggestion: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('CodeAnalysis', adviceSchema);
