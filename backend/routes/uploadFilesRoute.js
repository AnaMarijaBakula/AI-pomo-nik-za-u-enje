const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerConfig');  // Uvoz konfiguracije
const { uploadFiles } = require('../controllers/uploadFilesController');  // Kontroler koji obrađuje upload

// Ruta za upload datoteka
router.post('/', upload.array('files'), uploadFiles);  // 'files' je ime polja za datoteke u formi

module.exports = router;
