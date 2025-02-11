const rateLimit = require('express-rate-limit');

// Define the rate limit
const resetPasswordLimiterByIP = rateLimit({
	windowMs: process.env.RATE_LIMITER_BAN_EXTEND_SECS * 1000, // Reset count after 15 minutes
	max: process.env.RATE_LIMITER_TRIAL_COUNT, // Limit each IP to 3~5 requests per `windowMs`
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
module.exports = resetPasswordLimiterByIP;
