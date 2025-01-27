const express = require('express');
const { check, param, query, body, header } = require('express-validator');

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
	[
		check('email') // Looks anywhere - in the body, cookies, headers of the request - well we know email input exists in the body so check could have been replaced with body as well. check is more generic.
			.isEmail()
			.withMessage('Please enter a valid email') // check('email') --> Validate name='email' field entry @ signup.ejs
			// Custom validation error collector
			.custom((value, { req }) => {
				// Failed custom validation
				if (value === 'test@test.com') {
					throw new Error('This email address is forbidden');
				}
				// Success custom validation
				return true;
			}),
		body(
			'password',
			`Please enter a password with only numbers and text and at least ${process.env.PASSWORD_LENGTH} characters` // Default message for all sub validators
		)
			.isLength({ min: process.env.PASSWORD_LENGTH })
			.isAlphanumeric(),
	],
	authController.postSignup
);

router.get('/reset', authController.getReset);
router.post('/reset', authController.postReset);

router.get('/reset/:token', resetPasswordLimiter, authController.getNewPassword);
router.post('/new-password', authController.postNewPassword);

router.post('/logout', authController.postLogout);

module.exports = router;
