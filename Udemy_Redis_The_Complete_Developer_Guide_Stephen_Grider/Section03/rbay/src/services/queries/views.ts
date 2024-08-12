import { client } from '$services/redis';
import { itemsKey, itemsByViewsKey, itemsViewsKey } from '$services/keys';

export const incrementView = async (itemId: string, userId: string) => {
	// IMPORTANT NOTE: This block of code is a good candidate for using LUA scripting to get all processed in one go @ redis. Because, we get response from redis, and dependign on that response we proceed w/ additional redis tasks.
	// // Attempt to insert userId inside the hyperlolog data table called items:views#itemId - if already added return 0 else 1
	// const inserted = await client.pfAdd(itemsViewsKey(itemId), userId);
	// // If not inserted before yields 1 which is truthy and proceeds w/ increment operations
	// if (inserted) {
	// 	return Promise.all([
	// 		// Increment 'views' value inside the items#[itemId] hash table by 1
	// 		client.hIncrBy(itemsKey(itemId), 'views', 1),
	// 		// Apply the increment change on items:views sorted set table
	// 		client.zIncrBy(itemsByViewsKey(), 1, itemId)
	// 	]);
	// }

	/**
	 * KEYS I NEED TO ACCESS
	 * 1. itemsViewsKey
	 * 2. itemsKey
	 * 3. itemsByViewsKey
	 * EVALSHA <ID> 3 ....
	 *
	 * ARGUMENTS I NEED TO ACCEPT
	 * 1. itemId
	 * 2. userId
	 * */

	// CALL THE LUA SCRIPT FUNCTION
	return client.incrementView(itemId, userId);
};
