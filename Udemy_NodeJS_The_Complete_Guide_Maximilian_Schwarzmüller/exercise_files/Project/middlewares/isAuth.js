module.exports = (req, res, next) => {
	// GUARD CLAUSE - Protect the route for unauthorized access
	if (!req.session.isLoggedIn) {
		return res.redirect('/login'); // Redirect to login page if not logged in
	}
	// NOTE:  The res.locals object in Express.js is a special object that contains local variables scoped to the request. These variables are available to the view templates rendered by the application. By setting a property on res.locals, you make it accessible in the views.

	// Ensure req.session is available before calling generateToken
	// Set Authentication status  for every response
	res.locals.isAuthenticated = !!req.session.isLoggedIn;
	next(); // Call the next middleware function
};
