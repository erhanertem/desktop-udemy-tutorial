const express = require('express');
const { check } = require('express-validator');

const authController = require('../controllers/auth');

const resetPasswordLimiter = require('../middleware/rateLimit');

// THIS IS A MINI EXPRESS APP TIED TO MAIN APP ROUTER
const router = express.Router();

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

router.get('/signup', authController.getSignup);
router.post(
	'/signup',
	// Validation error collector
	check('email').isEmail().withMessage('Please enter a valid email'), // check('email') --> Validate name='email' field entry @ signup.ejs
	authController.postSignup
);

router.get('/reset', authController.getReset);
router.post('/reset', authController.postReset);

router.get('/reset/:token', resetPasswordLimiter, authController.getNewPassword);
router.post('/new-password', authController.postNewPassword);

router.post('/logout', authController.postLogout);

module.exports = router;
