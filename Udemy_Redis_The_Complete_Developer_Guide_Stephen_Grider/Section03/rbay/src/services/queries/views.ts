import { client } from '$services/redis';
import { itemsKey, itemsByViewsKey, itemsViewsKey } from '$services/keys';

export const incrementView = async (itemId: string, userId: string) => {
	// Attemp to insert userId inside the hyperlolog data table called items:views#itemId - if already added return 0 else 1
	const inserted = await client.pfAdd(itemsViewsKey(itemId), userId);

	// If not inserted before yields 1 which is truthy and proceeds w/ increment operations
	if (inserted) {
		return Promise.all([
			// Increment 'views' value inside the items#[itemId] hash table by 1
			client.hIncrBy(itemsKey(itemId), 'views', 1),
			// Apply the increment change on items:views sorted set table
			client.zIncrBy(itemsByViewsKey(), 1, itemId)
		]);
	}
};
