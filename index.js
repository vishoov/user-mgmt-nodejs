const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/users.route");
const auth = require("./middleware/auth"); 
require('dotenv').config();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// Home route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// User routes
app.use("/users", userRoutes); 

// Database connection
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        // Start server after successful database connection
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.error('MongoDB connection error:', err.message));

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});