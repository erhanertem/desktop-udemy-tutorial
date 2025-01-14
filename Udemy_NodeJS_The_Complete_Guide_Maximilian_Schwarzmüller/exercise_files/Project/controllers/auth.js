exports.getLogin = (req, res, next) => {
	// Read the cookie header on client-side
	const isLoggedIn = req
		.get('Cookie')
		.split(';')
		.find((item) => item.trim().startsWith('loggedIn'))
		.trim()
		.split('=')
		.pop();
	// console.log('isLoggedIn :', isLoggedIn);

	res.render('auth/login', {
		pageTitle: 'Login', // Name of the page
		path: '/login', // The path of the current route
		isAuthenticated: isLoggedIn, // Per postLogin value @ auth.js
		// errorMessage: req.flash('error'),
		// successMessage: req.flash('success'),
	});
};

exports.postLogin = (req, res, next) => {
	// /*
	// NOTE:
	// * The req object is created anew for each incoming HTTP request to your server.
	// * The isLoggedIn property will exist only for the lifetime of the current request.Once the request is processed and a response is sent back to the client, the req object(and thus the isLoggedIn property) is discarded.
	// * If you want to persist the login state across multiple requests, you would typically use sessions or tokens.
	// */
	// req.isLoggedIn = true;

	// Create a cookie
	res.setHeader('Set-Cookie', 'loggedIn=true');

	// For now, we'll just redirect to the home page
	res.redirect('/');
};
