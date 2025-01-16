const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5001;


app.use(cors({
    origin: 'http://localhost:5175',
    credentials: true
}));

app.use(express.json());

const codeAnalysisRoute = require('./routes/codeAnalysisRoute');
const uplaodFilesRoute = require('./routes/uploadFilesRoute');

app.use('/api/advice', codeAnalysisRoute);
app.use('/api/upload', uplaodFilesRoute);

//Connecting to the database
const connectDb = require('./config/dbConnection');
connectDb();

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});