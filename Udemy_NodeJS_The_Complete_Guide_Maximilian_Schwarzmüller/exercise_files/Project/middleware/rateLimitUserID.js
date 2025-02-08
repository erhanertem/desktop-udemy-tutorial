const Redis = require('ioredis');
const redis = new Redis();

async function resetPasswordLimiterByUserID(userId) {
	const exists = await redis.exists(`reset-password:${userId}`);
	const value = await redis.get(`reset-password:${userId}`);
	const ttl = await redis.ttl(`reset-password:${userId}`);

	console.log(exists ? `Key exists ✅ | Value: ${value} | Expires in: ${ttl} seconds` : 'Key does not exist ❌');
	const key = `reset-password:${userId}`;
	const attempts = await redis.incr(key);

	if (attempts === 1) {
		await redis.set(key, attempts, 'EX', RATE_LIMITER_BAN_EXTEND_SECS); // Reset count after 15 minutes
	}

	if (attempts > process.env.RATE_LIMITER_TRIAL_COUNT) {
		console.log('process.env.RATE_LIMITER_TRIAL_COUNT :', process.env.RATE_LIMITER_TRIAL_COUNT);
		// TEST - Mock rate limit error
		// if (attempts > 2) {
		// Create custom error object
		const error = new Error('Too many password reset requests. Please try again later.');
		error.httpStatusCode = 429;
		throw error;
	}
}

module.exports = resetPasswordLimiterByUserID;
