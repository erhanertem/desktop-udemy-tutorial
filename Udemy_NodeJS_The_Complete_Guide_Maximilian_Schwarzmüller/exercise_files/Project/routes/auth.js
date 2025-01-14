const express = require('express');

const authController = require('../controllers/auth');

// THIS IS A MINI EXPRESS APP TIED TO MAIN APP ROUTER
const router = express.Router();

router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin);

module.exports = router;
