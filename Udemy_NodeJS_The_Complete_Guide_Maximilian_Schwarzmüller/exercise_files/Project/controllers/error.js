exports.get404 = (req, res, next) => {
	res.status(404).render('errors/404', {
		pageTitle: 'Page Not Found',
		layout: false,
		path: '',
		styles: '<link rel="stylesheet" href="/css/main.css" >',
		// isAuthenticated: !!req.session.isLoggedIn, // Per postLogin value @ auth.js
	});
};

exports.get500 = (err, req, res, next) => {
	console.error(err.stack); // Log the error

	// Check for specific errors, like JSON parsing issues
	if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
		return res.status(400).render('errors/400', {
			pageTitle: 'Error',
			path: '',
			message: 'Invalid Request Body',
			// isAuthenticated: !!req.session.isLoggedIn, // Per postLogin value @ auth.js
		});
	}

	res.status(500).send('Internal Server Error'); // Generic error response
};
