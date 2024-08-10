import { client } from '$services/redis';
import { itemsKey, itemsByEndingAtKey } from '$services/keys';
import { deserialize } from './deserialize';

export const itemsByEndingTime = async (order: 'DESC' | 'ASC' = 'DESC', offset = 0, count = 10) => {
	// Get an sorted array of all item Ids from now and then with a limit of first 10 items retrieved from items:ending-at sorted set Redis table
	const ids = await client.zRange(itemsByEndingAtKey(), Date.now(), '+inf', {
		BY: 'SCORE',
		LIMIT: {
			offset,
			count
		}
	});
	// console.log(ids);

	// Retieve each item with their key/value contents from the items' Redis hash tables
	const results = await Promise.all(
		ids.map((id) => {
			// Return an array of all key/value pairs from the hash table of the item
			return client.hGetAll(itemsKey(id));
		})
	);
	// console.log(results);

	// Change the data to be used within the app
	return results.map((item, index) => deserialize(ids[index], item));
};
