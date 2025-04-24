require('dotenv').config();
const express = require('express');
const app = express();
const path  = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..' ,'frontend/index.html'));
});

const userRoutes = require('./routes/users');
const postRoutes = require('./routes/books');
const authRoutes = require('./routes/auth');
app.use('/users', userRoutes);
app.use('/books', postRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

