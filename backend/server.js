const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const cors = require('cors');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 5001;

// Povezivanje s MongoDB
const connectDb = require('./config/dbConnection');
connectDb(process.env.MONGO_URI);

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware za sesiju
app.use(session({
    secret: process.env.SECRET_KEY || 'someSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

const codeAnalysisRoute = require('./routes/codeAnalysisRoute');
const uplaodFilesRoute = require('./routes/uploadFilesRoute');
const usersRoutes = require('./routes/userRoutes');
const adminRoute = require('./routes/adminRoute');

app.use('/api/advice', codeAnalysisRoute);
app.use('/api/upload', uplaodFilesRoute);
app.use('/api/users', usersRoutes);
app.use('/api/admin', adminRoute);



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
