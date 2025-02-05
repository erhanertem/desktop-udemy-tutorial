// CUSTOM EXPRESS ERROR HANDLING
exports.get404 = (req, res, next) => {
	res.status(404).render('errors/404', {
		pageTitle: 'Page Not Found',
		path: '', // Defines the active tab @ navbar
		// styles: '<link rel="stylesheet" href="/css/main.css" >', // Provide additional styles to header layout
		isAuthenticated: req.session.isLoggedIn, // Check if user is authenticated for nav bar display on/off
		// layout: false, // Turns on/off layouts - replaced by isAuthenticated
	});
};

// CUSTOM EXPRESS ERROR HANDLING FOR MANUAL REDIRECTS
exports.get500Manual = (req, res, next) => {
	res.status(500).render('errors/500', {
		pageTitle: 'Server Error',
		path: '', // Defines the active tab @ navbar
		message: 'Internal Server Error',
		isAuthenticated: req.session.isLoggedIn, // Check if user is authenticated for nav bar display on/off
		// layout: false, // Turns on/off layouts - replaced by isAuthenticated
	});
};

// GLOBAL EXPRESS ERROR HANDLING
exports.get500 = (err, req, res, next) => {
	console.error(err.stack); // Log the error

	// Check for specific errors, like JSON parsing issues
	if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
		return res.status(400).render('errors/400', {
			pageTitle: 'Error',
			path: '', // Defines the active tab @ navbar
			message: 'Invalid Request Body',
			isAuthenticated: req.session.isLoggedIn, // Check if user is authenticated for nav bar display on/off
		});
	}

	res.status(500).render('errors/500', {
		pageTitle: 'Server Error',
		path: '', // Defines the active tab @ navbar
		message: 'Internal Server Error',
		isAuthenticated: req.session.isLoggedIn, // Check if user is authenticated for nav bar display on/off
		// layout: false, // Turns on/off layouts - replaced by isAuthenticated
	});
};
