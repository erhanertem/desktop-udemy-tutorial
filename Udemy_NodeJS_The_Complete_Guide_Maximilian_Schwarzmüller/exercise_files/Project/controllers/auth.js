const User = require('../models/user');

exports.getLogin = (req, res, next) => {
	console.log('🅰️', req.session);
	res.render('auth/login', {
		pageTitle: 'Login', // Name of the page
		path: '/login', // The path of the current route
		isAuthenticated: !!req.session.isLoggedIn, // Per postLogin value @ auth.js
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
