exports.getLogin = (req, res, next) => {
	res.render('auth/login', {
		pageTitle: 'Login', // Name of the page
		path: '/login', // The path of the current route
		isAuthenticated: req.session.isLoggedIn, // Per postLogin value @ auth.js
	});
};

exports.postLogin = (req, res, next) => {
	req.session.isLoggedIn = true;
	res.redirect('/');
};
