const User = require('../models/user');

exports.getLogin = (req, res, next) => {
	res.render('auth/login', {
		pageTitle: 'Login', // Name of the page
		path: '/login', // The path of the current route
		isAuthenticated: !!req.session.isLoggedIn, // Per postLogin value @ auth.js
	});
};

exports.getSignup = (req, res, next) => {
	res.render('auth/signup', {
		path: '/signup',
		pageTitle: 'Signup', // Name of the page
		isAuthenticated: false, // Not authenticated yet prior to signup
	});
};

exports.postLogin = (req, res, next) => {
	// TEMP - Retrieve the dummy user
	User.findById('67818dc96d1f446bb00f1402').then((user) => {
		req.session.isLoggedIn = true; // Add authorization info to the session object
		req.session.user = user; // Add user data to the session object
		req.session.save((err) => {
			console.log(err);
			res.redirect('/');
		}); // Save the session data before continuing with re-direct to avoid incomplete async session save while redirecting
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
				return res.redirect('/signup');
			}

			// Create a new user with submitted form data
			const newUser = new User({
				email: email,
				password: password,
				cart: { items: [] },
			});
			// Save the user to DB
			return newUser.save();
		})
		// Redirect to login page upon successful signup
		.then((result) => res.redirect('/login'))
		.catch((err) => console.log(err));
};
