const express = require("express");
const router = express.Router();
const codeAnalysisController = require("../controllers/codeAnalysisController");

router.get("/", codeAnalysisController.getAllAdvice);
router.post("/", codeAnalysisController.addAdvice);


module.exports = router;
