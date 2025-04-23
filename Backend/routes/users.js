const express = require('express');
const router = express.Router();
const path  = require('path');

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/login.html'));
});

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/signup.html'));
});

module.exports = router;