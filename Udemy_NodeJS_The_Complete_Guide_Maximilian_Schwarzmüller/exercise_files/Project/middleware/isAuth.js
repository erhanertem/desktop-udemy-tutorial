module.exports = (req, res, next) => {
	// GUARD CLAUSE - Protect the route for unauthorized access
	if (!req.session.isLoggedIn) {
		return res.redirect('/login'); // Redirect to login page if not logged in
	}

	next(); // Call the next middleware function
};
