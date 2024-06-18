const express = require('express');
const router = express.Router();
const register = require('../controllers/register');

router.post('/register', register.register);

module.exports = router;
