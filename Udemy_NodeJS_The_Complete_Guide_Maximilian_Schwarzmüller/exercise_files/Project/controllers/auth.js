const { promisify } = require('util');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const User = require('../models/user');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.GMAIL_USER,
		// pass: process.env.GMAIL_PASS,
		pass: 'mockerror',
	},
});

exports.getLogin = (req, res, next) => {
	const message = req.flash('error'); // Pass the message received in req.session.error initiated by postLogin controller

	const error = req.query.error; // Extract the error message from the query string passed after a session initialization error during signup process

	res.render('auth/login', {
		pageTitle: 'Login', // Name of the page
		path: '/login', // The path of the current route
		errorMessage: message.length > 0 && message, // if message is not an empty array pass in message else pass in null
		sessionInitError: error,
		flashRemoveDelay: process.env.FLASH_REMOVE_DELAY || 3000, // Default to 3000ms if not defined,
	});
};

exports.getSignup = (req, res, next) => {
	const message = req.flash('error'); // Pass the message received in req.session.error initiated by postLogin controller

	res.render('auth/signup', {
		path: '/signup',
		pageTitle: 'Signup', // Name of the page
		errorMessage: message.length > 0 && message, // if message is not an empty array pass in message else pass in null
		flashRemoveDelay: process.env.FLASH_REMOVE_DELAY || 3000, // Default to 3000ms if not defined,
	});
};

exports.postLogin = (req, res, next) => {
	// Check if posted login credentials matches credentials stored @ DB
	const { email, password } = req.body;
	// Search for a user with the provided email
	User.findOne({ email: email }).then((user) => {
		// GUARD CLAUSE - If no user found, bounce back to login page with error message
		if (!user) {
			req.flash(
				'error', // Flash key written to session temporarily till it gets consumed
				'Invalid credentials.' // The message content
			);
			return res.redirect('/login');
		}

		// Compare submitted password with the hashed password stored in the DB
		bcrypt
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
				req.flash(
					'error', // Flash key written to session temporarily till it gets consumed
					'Invalid credentials.' // The message content
				);
				res.redirect('/login');
			})
			.catch((err) => {
				console.log(err);
				res.redirect('/login');
			});
	});
};

exports.postLogout = (req, res, next) => {
	req.session.destroy((err) => {
		console.log(err);
		res.redirect('/login');
	}); // destroy function is provided by express-session module. It takes in a cb once the session is destroyed
};

// Triggered via POST req @ signup.ejs
exports.postSignup = (req, res, next) => {
	// Create a new user with the provided data per input name of the form fields
	const { email, password, confirmPassword } = req.body;

	// TEMP- Ignore validation logic

	// Check if submitted email is already reserved
	User.findOne({ email: email })
		.then((userDoc) => {
			// GUARD CLAUSE - If user exists w/ the submitted email bounce back to signup page
			if (userDoc) {
				req.flash(
					'error', // Flash key written to session temporarily till it gets consumed
					'Email already exists.' // The message content
				);
				return res.redirect('/signup');
			}
			// Crypt the user password - takes some time async nature so we need to return a promise and handle the result on the next then block
			return bcrypt
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
									html: '<h1>You successfully signed up!</h1>',
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
							req.flash('error', 'An error occurred during login. Please try again.');
							// Since session creation fails, flash does not show as flash depends on a valid session. Therefore, you need to pass in the failure warning gracegully to URL of the redirect as a query string - encodeURIComponent ensures the query string is properly formatted for special characters.
							return res.redirect(
								`/login?error=${encodeURIComponent('An error occurred during login. Please try again.')}`
							);
						});
				});
		})
		.catch((err) => {
			console.error('Error during signup:', err);
			req.flash('error', 'An error occurred during signup. Please try again.');
			// Optional: Handle the error gracefully by redirecting or showing an error page
			res.redirect('/signup');
		});
};
