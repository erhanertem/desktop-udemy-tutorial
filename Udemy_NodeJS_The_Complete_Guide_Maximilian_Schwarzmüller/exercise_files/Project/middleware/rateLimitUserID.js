const Redis = require('ioredis');
const redis = new Redis();

async function resetPasswordLimiterByUserID(userId) {
	// const exists = await redis.exists(`reset-password:${userId}`);
	// const value = await redis.get(`reset-password:${userId}`);
	// const ttl = await redis.ttl(`reset-password:${userId}`);

	const key = `reset-password:${userId}`;
	await redis.setnx(key, 1); // Only sets if key does not exist
	await redis.expire(key, process.env.RATE_LIMITER_BAN_EXTEND_SECS); // Ensure expiry
	const attempts = await redis.incr(key);

	// console.log(exists ? `Key exists ✅ | Value: ${value} | Expires in: ${ttl} seconds` : 'Key does not exist ❌');

	if (attempts > process.env.RATE_LIMITER_TRIAL_COUNT) {
		// Create custom error object
		const error = new Error('Too many password reset requests. Please try again later.');
		error.httpStatusCode = 429;
		throw error;
	}
}

module.exports = resetPasswordLimiterByUserID;
