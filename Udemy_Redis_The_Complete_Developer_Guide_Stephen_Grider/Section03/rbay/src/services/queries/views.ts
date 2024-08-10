import { client } from '$services/redis';
import { itemsKey, itemsByViewsKey } from '$services/keys';

export const incrementView = async (itemId: string, userId: string) => {
	return Promise.all([
		// Increment 'views' value inside the items#[itemId] hash table by 1
		client.hIncrBy(itemsKey(itemId), 'views', 1),
		// Apply the increment change on items:views sorted set table
		client.zIncrBy(itemsByViewsKey(), 1, itemId)
	]);
};
