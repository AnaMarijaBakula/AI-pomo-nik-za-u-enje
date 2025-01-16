const multer = require('multer');

// Konfiguracija Multera za pohranu u memoriju
const storage = multer.memoryStorage();

const upload = multer({storage:storage});

module.exports = upload;