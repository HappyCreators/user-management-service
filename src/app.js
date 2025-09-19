const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use('/api/users', userRoutes);
app.use(errorHandler);

module.exports = app;
