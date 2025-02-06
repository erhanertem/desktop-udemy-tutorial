// CUSTOM ERROR HANDLERS

exports.get400 = (req, res, next) => {
	res.status(400).render('errors/400', {
		pageTitle: 'Error',
		path: '', // Defines the active tab @ navbar
		message: 'Invalid Request Body',
		isAuthenticated: req.session.isLoggedIn, // Check if user is authenticated for nav bar display on/off
	});
};

exports.get404 = (req, res, next) => {
	res.status(404).render('errors/404', {
		pageTitle: 'Page Not Found',
		path: '', // Defines the active tab @ navbar
		isAuthenticated: req.session.isLoggedIn, // Check if user is authenticated for nav bar display on/off
		redirectDelay: process.env.REDIRECT_DELAY,
	});
};

exports.get500 = (req, res, next) => {
	// Use stored message or fallback
	const message = req.session.errorMessage || 'Internal Server Error';

	// Clear session message after use
	req.session.errorMessage = null;

	res.status(500).render('errors/500', {
		pageTitle: 'Server Error',
		path: '', // Defines the active tab @ navbar
		message: message,
		isAuthenticated: req.session.isLoggedIn, // Check if user is authenticated for nav bar display on/off
	});
};

// GLOBAL EXPRESS ERROR HANDLER
exports.getGlobalErrorHandler = (err, req, res, next) => {
	// Log the error
	console.error('👉', err.httpStatusCode || err.status, err.message);

	// Handle JSON parsing errors
	if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
		return res.redirect('/400');
	}

	// > OPTION#1. LOG CRITICAL ERROR BUT RESPOND WITH A GENERIC PAGE BASED ON RECEIVED ERROR STATUS CODE
	// switch (err.httpStatusCode) {
	// 	case 500:
	// 		res.redirect('/500');
	// 		break;
	// 	default:
	// }
	// > OPTION#2. CARRY THE ERROR MESSAGE ONTO GENERIC PAGE VIA SESSION UPON REDIRECT
	// Pass error message via session
	req.session.errorMessage = err.message; // Store in session
	// > OPTION#2.1 CB VERSION FOR SAVING SESSION BEFORE PRIOCEEDING WITH A REDIRECT
	// Ensures session is saved before redirecting
	req.session.save(() => {
		// Wait until session is saved
		switch (err.httpStatusCode) {
			case 500:
				res.redirect('/500');
				break;
			default:
				console.warn('Unknown error code');
		}
	});
	// > OPTION#2.2 USE AWAIT/PROMISE FOR SAVING SESSION SINCE IT DOES NOT NATIVELY SUPPORT A PROMISE.
	// // Convert session.save() to a promise
	// await new Promise((resolve, reject) => {
	// 	req.session.save((err) => {
	// 		if (err) reject(err);
	// 		else resolve();
	// 	});
	// });
	// // Now it's safe to redirect after session is saved
	// switch (err.httpStatusCode) {
	// 	case 500:
	// 		return res.redirect('/500');
	// 	default:
	// 		return res.redirect('/');
	// }
};
