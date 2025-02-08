const express = require('express');
const { check, param, query, body, header } = require('express-validator');

const authController = require('../controllers/auth');

const resetPasswordLimiterByIP = require('../middleware/rateLimitIP');
const resetPasswordLimiterByUserID = require('../middleware/rateLimitUserID');
const User = require('../models/user');

// THIS IS A MINI EXPRESS APP TIED TO MAIN APP ROUTER
const router = express.Router();

router.get('/login', authController.getLogin);
router.post(
	'/login',
	[
		body('email')
			.isEmail() // Check if email is valid
			.withMessage('Please enter a valid email')
			.normalizeEmail(), // UI Sanitization
		body('password')
			.isLength({ min: process.env.PASSWORD_LENGTH })
			.withMessage(`Please enter a password at least ${process.env.PASSWORD_LENGTH} characters`)
			.isAlphanumeric()
			.withMessage('Please enter a password with only numbers and text')
			.trim(), // UI Sanitization
	],
	authController.postLogin
);

router.get('/signup', authController.getSignup);
router.post(
	'/signup',
	// Validation error collector
	[
		check('email') // Looks anywhere - in the body, cookies, headers of the request - well we know email input exists in the body so check could have been replaced with body as well. check is more generic.
			.isEmail()
			.withMessage('Please enter a valid email') // check('email') --> Validate name='email' field entry @ signup.ejs
			// Custom validation error collector
			.custom((value, { req }) => {
				// -> Sync validation check
				// // Failed custom validation
				// if (value === 'test@test.com') {
				// 	throw new Error('This email address is forbidden');
				// }
				// // Success custom validation
				// return true;
				// -> Async validation check
				return User.findOne({ email: value }).then((userDoc) => {
					// GUARD CLAUSE - If user exists w/ the submitted email bounce back to signup page
					if (userDoc) {
						// If a user olready exists with the posted email, return a rejection in the promise
						return Promise.reject('A user with this email already exists');
					}

					// If no user is found, this point is reached, and validation passes.
				});
			})
			.normalizeEmail(), // UI Sanitization
		// Sync validation
		body(
			'password',
			`Please enter a password with only numbers and text and at least ${process.env.PASSWORD_LENGTH} characters` // Default message for all sub validators
		)
			.isLength({ min: process.env.PASSWORD_LENGTH })
			.isAlphanumeric()
			.trim(), // UI Sanitization
		// Sync validation
		body('confirmPassword')
			.custom((value, { req }) => {
				// Failed custom validation
				if (value !== req.body.password) {
					throw new Error('Passwords do not match');
				}
				// Success custom validation
				return true;
			})
			.trim(), // UI Sanitization
	],
	authController.postSignup
);

router.get('/reset', authController.getReset);
router.post('/reset', resetPasswordLimiterByIP, authController.postReset);

router.get('/reset/:token', authController.getNewPassword);
router.post('/new-password', authController.postNewPassword);

router.post('/logout', authController.postLogout);

module.exports = router;
