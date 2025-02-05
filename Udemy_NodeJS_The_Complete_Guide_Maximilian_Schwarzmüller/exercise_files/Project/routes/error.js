const express = require('express');

const router = express.Router();
const errorController = require('../controllers/error');

// Error handling manual redirects
router.get('/400', errorController.get400);
router.get('/500', errorController.get500);

module.exports = router;
