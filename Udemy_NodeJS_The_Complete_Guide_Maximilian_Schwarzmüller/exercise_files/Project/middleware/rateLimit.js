const rateLimit = require('express-rate-limit');

// Define the rate limit
const resetPasswordLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 3, // Limit each IP to 3~5 requests per `windowMs`
	// Pass the error to the next middleware
	message: 'Too many password reset requests. Please try again later.',
	handler: (req, res) => {
		res.status(429).render('errors/400', {
			pageTitle: 'Too Many Requests',
			path: '', // Defines the active tab @ navbar
			message: 'Too many password reset requests. Please try again later.',
			isAuthenticated: req.session?.isLoggedIn, // Ensure session exists before accessing
			redirectDelay: process.env.REDIRECT_DELAY,
		});
	},
});

// Export the limiter
module.exports = resetPasswordLimiter;
