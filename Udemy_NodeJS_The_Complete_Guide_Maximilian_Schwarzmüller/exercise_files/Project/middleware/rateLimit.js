const rateLimit = require('express-rate-limit');

// Define the rate limit
const resetPasswordLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 5 requests per `windowMs`
	// Pass the error to the next middleware
	message: {
		status: 429,
		error: 'Too many password reset requests. Please try again later.',
	},
	handler: (req, res, next, options) => {
		const error = new Error(options.message.error);
		error.status = options.message.status;
		next(error); // Forward the error to the next middleware
	},
});

// Export the limiter
module.exports = resetPasswordLimiter;
