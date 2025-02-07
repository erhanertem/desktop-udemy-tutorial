const { promisify } = require('util');
const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');

const html = require('../util/html');
const User = require('../models/user');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASS,
	},
});

exports.getReset = (req, res, next) => {
	const message = req.flash('error');

	res.render('auth/reset', {
		path: '/reset',
		pageTitle: 'Reset Password',
		flashRemoveDelay: process.env.FLASH_REMOVE_DELAY || 3000, // Default to 3000ms if not defined,
		errorMessage: message.length && message,
	});
};

exports.postReset = (req, res, next) => {
	crypto.randomBytes(32, (err, buffer) => {
		// // TEST Mock `crypto.randomBytes` to simulate an error
		// err = true;
		// Handle error
		if (err) {
			req.flash(
				'error', // Flash key written to session temporarily till it gets consumed
				'Reset token creation failed. Try again.' // The message content
			);
			return res.redirect('/reset');
		}

		// Generate a reset token from the buffer
		const token = buffer.toString('hex'); // Convert the binary data stored in a Buffer object into a human-readable hexadecimal string.

		// Find the user with the provided email
		User.findOne({ email: req.body.email })
			// // TEST Mock a DB access error
			// .then((user) => {
			// 	throw new Error('DB access failed');
			// })
			.then((user) => {
				// If no user found, flash an error and redirect to reset page
				if (!user) {
					req.flash(
						'error', // Flash key written to session temporarily till it gets consumed
						'No account with that email found.' // The message content
					);
					return res.redirect('/reset');
				}

				// Set the token and expiration date for the user
				user.resetToken = token;
				user.resetTokenExpiration = Date.now() + Number(process.env.TOKEN_LIFESPAN); // 1 hour from now

				// Save the user with the new token and expiration date
				return user.save();
			})
			.then((result) => {
				// Send a password reset email to the user with the token
				const protocol = req.protocol; // Will return 'http' or 'https'
				const host = req.get('host'); // Will return the host name from the request (e.g., localhost:3000)
				const resetUrl = `${protocol}://${host}/reset/${token}`; // Token url

				req.flash(
					'notify', // Flash key written to session temporarily till it gets consumed
					'A reset email has been sent. Please check your inbox for further instructions.' // The message content
				);

				res.redirect('/');

				// Send password reset email
				return transporter.sendMail({
					to: req.body.email,
					from: process.env.GMAIL_USER,
					subject: 'Password Reset',
					html: html`
						<p>You requested a password reset</p>
						<p>Click this <a href=${resetUrl}>link</a> to set a new password.</p>
					`,
				});
			})
			.catch((err) => {
				// Create custom error object
				const error = new Error('Access to Database is lost.');
				error.httpStatusCode = 500;
				return next(error);
			});
	});
};

exports.getLogin = (req, res, next) => {
	const message = req.flash('error'); // Pass the message received in req.session.error initiated by postLogin controller

	const error = req.query.error; // Extract the error message from the query string passed after a session initialization error during signup process

	res.render('auth/login', {
		pageTitle: 'Login', // Name of the page
		path: '/login', // The path of the current route
		errorMessage: message.length && message, // if message is not an empty array pass in message else pass in null
		oldInput: { email: '', password: '' }, // Pass the old input data to the form @ form initial load - it's always better to pass in empty strings to avoid undefined errors in forms instead of null values
		validationErrors: [],
		sessionInitError: error,
		flashRemoveDelay: process.env.FLASH_REMOVE_DELAY || 3000, // Default to 3000ms if not defined,
	});
};

exports.postLogin = (req, res, next) => {
	// Check if posted login credentials matches credentials stored @ DB
	const { email, password } = req.body;

	// Extract the validation results from the request object
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).render('auth/login', {
			pageTitle: 'Login', // Name of the page
			path: '/login', // The path of the current route
			errorMessage: errors.array()[0].msg, // if message is not an empty array pass in message else pass in null
			validationErrors: errors.array(), // Pass the validation errors
			oldInput: { email, password }, // Pass the old input data to the form
			sessionInitError: null, // No error during session initialization since this is a login request
			flashRemoveDelay: process.env.FLASH_REMOVE_DELAY || 3000, // Default to 3000ms if not defined,
		});
	}

	// Search for a user with the provided email
	User.findOne({ email: email }).then((user) => {
		// GUARD CLAUSE - If no user found, bounce back to login page with error message
		// if (!user) {
		// 	req.flash(
		// 		'error', // Flash key written to session temporarily till it gets consumed
		// 		'Invalid credentials.' // The message content
		// 	);
		// 	return res.redirect('/login');
		// }
		if (!user) {
			return res.status(422).render('auth/login', {
				path: '/login',
				pageTitle: 'Login',
				errorMessage: 'Invalid email or password',
				validationErrors: [],
				oldInput: { email, password },
				sessionInitError: null,
				flashRemoveDelay: process.env.FLASH_REMOVE_DELAY || 3000,
			});
		}

		// Compare submitted password with the hashed password stored in the DB
		bcrypt
			// // TEST MOCK ERROR
			// .compare(undefined, user.password)
			.compare(password, user.password)
			.then((doMatch) => {
				// If pass are same proceed with session creation
				if (doMatch) {
					// Create user session
					req.session.isLoggedIn = true; // Add authorization info
					req.session.user = user; // Add user data
					return req.session.save((err) => {
						console.log(err);
						res.redirect('/');
					}); // Save the session data before continuing with re-direct to avoid incomplete async session save while redirecting - We need to return this to make sure this asyc operation completes the promise and returns as a response to the next middleware
				}
				// If pass are not same bounce back to login page
				// req.flash(
				// 	'error', // Flash key written to session temporarily till it gets consumed
				// 	'Invalid credentials.' // The message content
				// );
				// res.redirect('/login');
				return res.status(422).render('auth/login', {
					path: '/login',
					pageTitle: 'Login',
					errorMessage: 'Invalid email or password',
					validationErrors: [],
					oldInput: { email, password },
					sessionInitError: null,
					flashRemoveDelay: process.env.FLASH_REMOVE_DELAY || 3000,
				});
			})
			.catch((err) => {
				console.log(err.message);
				res.redirect('/login');
			});
	});
};

exports.getSignup = (req, res, next) => {
	const message = req.flash('error'); // Pass the message received in req.session.error initiated by postLogin controller

	res.render('auth/signup', {
		path: '/signup',
		pageTitle: 'Signup', // Name of the page
		errorMessage: message.length && message, // if message is not an empty array pass in message else pass in null
		oldInput: { email: '', password: '', confirmPassword: '' }, // Pass the old input data to the form @ form initial load - it's always better to pass in empty strings to avoid undefined errors in forms instead of null values
		validationErrors: [], // Pass the validation errors
		sessionInitError: null, // No error during session initialization since this is a signup request
		flashRemoveDelay: process.env.FLASH_REMOVE_DELAY || 3000, // Default to 3000ms if not defined,
	});
};

// Triggered via POST req @ signup.ejs
exports.postSignup = (req, res, next) => {
	// Create a new user with the provided data per input name of the form fields
	const { email, password, confirmPassword } = req.body;

	// Extract the validation results from the request object
	const errors = validationResult(req);
	// Check if there are any validation errors
	if (!errors.isEmpty()) {
		// If there are validation errors, render the signup page again with the errors
		return res.status(422).render('auth/signup', {
			path: '/signup',
			pageTitle: 'Signup', // Name of the page
			errorMessage: errors.array()[0].msg, // if message is not an empty array pass in message else pass in null
			validationErrors: errors.array(), // Pass the validation errors
			oldInput: { email, password, confirmPassword }, // Pass the old input data to the form
			sessionInitError: null, // No error during session initialization since this is a login request
			flashRemoveDelay: process.env.FLASH_REMOVE_DELAY || 3000, // Default to 3000ms if not defined,
		});
	}

	// Crypt the user password - takes some time async nature so we need to return a promise and handle the result on the next then block
	bcrypt
		.hash(password, 12)
		.then((hashedPass) => {
			// Create a new user with submitted form data and crypted pass
			const newUser = new User({
				email: email,
				password: hashedPass,
				cart: { items: [] },
			});
			// Save the user data to DB
			return newUser.save();
		})
		.then((user) => {
			// Set session after successful signup
			req.session.user = user;
			req.session.isLoggedIn = true;

			// // Mock the session save to simulate an error
			// req.session.save = (callback) => {
			// 	callback(new Error('Simulated session save error'));
			// };

			// Convert session.save to a promise
			const saveSession = promisify(req.session.save).bind(req.session);
			return saveSession()
				.then((session) => {
					// Redirect to login after successful signup
					res.redirect('/');

					// Send confirmation email
					return transporter
						.sendMail({
							to: email,
							from: process.env.GMAIL_USER,
							subject: 'Signup succeeded!',
							html: html`<h1>You successfully signed up!</h1>`,
						})
						.catch((err) => {
							// Do not block the user signup flow due to email failure
							console.error('Failed to send email:', err.message);
							return;
						});
				})
				.catch((err) => {
					// Handle session save errors explicitly
					console.error('Session save failed:', err.message);
					// NOTE: req.flash('error', 'An error occurred during login. Please try again.'); --> Since session creation fails, flash does not show as flash depends on a valid session. Therefore, you need to pass in the failure warning gracegully to URL of the redirect as a query string - encodeURIComponent ensures the query string is properly formatted for special characters.
					return res.redirect(
						`/login?error=${encodeURIComponent('An error occurred during login. Please try again.')}`
					);
				});
		})
		.catch((err) => {
			console.error('Error during signup:', err);
			req.flash('error', 'An error occurred during signup. Please try again.');
			// Optional: Handle the error gracefully by redirecting or showing an error page
			res.redirect('/signup');
		});
};

exports.postLogout = (req, res, next) => {
	req.session.destroy((err) => {
		console.log(err);
		res.redirect('/login');
	}); // destroy function is provided by express-session module. It takes in a cb once the session is destroyed
};

exports.getNewPassword = (req, res, next) => {
	const message = req.flash('error');
	const token = req.params.token; // Extract the token from the URL
	User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
		.then((user) => {
			// // TEST - Mock error
			// throw new Error('Test Error');
			res.render('auth/new-password', {
				path: '/new-password',
				pageTitle: 'Reset Password', // Name of the page
				errorMessage: message.length && message, // if message is not an empty array pass in message else pass in null
				flashRemoveDelay: process.env.FLASH_REMOVE_DELAY || 3000, // Default to 3000ms if not defined,
				sessionInitError: null,
				userId: user._id.toString(),
				passwordToken: token,
			});
		})
		.catch((err) => {
			// Create custom error object
			const error = new Error('Fetching user failed.');
			error.httpStatusCode = 500;
			return next(error);
		});
};

exports.postNewPassword = (req, res, next) => {
	const { password: newPassword, userId, passwordToken } = req.body;
	let modUser;

	// console.log('🔹 Request from IP:', req.ip);

	// Find the matching user with the provided token and user ID
	User.findOne({ resetToken: passwordToken, resetTokenExpiration: { $gt: Date.now() }, _id: userId })
		// VERY IMPORTANT: We included userID for several reasons:
		// 1. Security Enhacement: you ensure that only the user who owns the password reset token can change the password. This prevents attackers from using a valid passwordToken belonging to someone else and Randomly guessing or brute-forcing valid tokens without knowing the associated user ID.
		// 2. Limits Scope of the Query: Without the _id: userId condition, the query would only rely on resetToken and resetTokenExpiration. If there are multiple users with the same token (unlikely but possible due to randomness or a compromised token generator), this might inadvertently affect another user's account.
		// 3. Prevent Abuse: Including _id: userId adds another layer of validation to mitigate abuse. An attacker would need: The exact userId (typically hard to guess since it's a MongoDB ObjectId) and the valid resetToken.
		// 4. Rate-limiting: Since user.id provided automatically, the token brute force attack is possible and restricting number of queries within a certain time frame becomes a necessity.
		// // TEST Mock error message
		// .then((user) => {
		// 	throw new Error('Mock database error'); // 💥 Simulating DB failure
		// })
		.then((user) => {
			// // TEST Mock error message
			// user = null;

			if (!user) {
				// Handle case when no user is found
				// Create custom error object
				const error = new Error('Invalid or expired reset token.');
				error.httpStatusCode = 400;
				throw error;
			}

			modUser = user; // Store the user for later then block
			return bcrypt.hash(newPassword, 12);
		})
		.then((hashedPassword) => {
			modUser.password = hashedPassword; // Change the pqssword
			modUser.resetToken = undefined; // Reset token and expiration
			modUser.resetTokenExpiration = undefined;
			return modUser.save(); // Save the user to DB
		})
		.then((result) => res.redirect('/login'))
		.catch((error) => {
			if (error.httpStatusCode === 400) {
				return next(error);
			} else {
				// Create custom error object
				const error = new Error('Fetching user failed.');
				error.httpStatusCode = 500;
				return next(error);
			}
		});
};
