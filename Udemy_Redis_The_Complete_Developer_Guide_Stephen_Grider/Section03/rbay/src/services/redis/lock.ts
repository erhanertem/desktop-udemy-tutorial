import { randomBytes } from 'crypto';
import { client } from './client';

export const withLock = async (key: string, cb: () => any) => {
	// Initialize a few variables to control retry behavior
	const retryDelayMs = 100;
	let retries = 20;

	// Generate a random value to store at the lock key
	const token = randomBytes(6).toString('hex');
	// Create the lock key
	const lockKey = `lock:${key}`;
	// Setup a while loop to implmement the rety behavior
	while (retries >= 0) {
		retries--;
		// Try to do a SET NX operation
		const acquired = await client.set(lockKey, token, { NX: true });
		// GUARD CLAUSE - If not able to set, brief pause(retryDelayMs) and then retry
		if (!acquired) {
			await pause(retryDelayMs);
			continue;
		}
		// If the set is succesfull, then run the callback
		const result = await cb();
		// Unset the lock key
		await client.del(lockKey);
		// If the callback finished successfully, return the result
		return result;
	}
};

const buildClientProxy = () => {};

const pause = (duration: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
};
