import type { CreateItemAttrs } from '$services/types';
import { client } from '$services/redis';
import { serialize } from './serialize';
import { genId } from '$services/utils';
import { itemsByEndingAtKey, itemsByViewsKey, itemsKey } from '$services/keys';
import { deserialize } from './deserialize';

export const getItem = async (id: string) => {
	const item = await client.hGetAll(itemsKey(id));
	// GUARD CLAUSE - check for {} object RETURNS
	if (Object.keys(item).length === 0) {
		return null;
	}
	// Deserialize results
	return deserialize(id, item);
};

// NOTE: REDIS PIPING FOR MULTIPLE QUERIES
export const getItems = async (ids: string[]) => {
	// PIPELINE FERTCH RESULTS
	const commands = ids.map((id) => {
		return client.hGetAll(itemsKey(id));
	});
	const results = await Promise.all(commands);

	// EVALUATE RESULTS
	return results.map((result, index) => {
		// GUARD CLAUSE - Check if each result returns empty {}
		if (Object.keys(result).length === 0) {
			return null;
		}
		// Deserialize results
		return deserialize(ids[index], result);
	});
};

export const createItem = async (attrs: CreateItemAttrs, userId: string) => {
	const id = genId();
	// Prep JS data for Redis
	const serialized = serialize(attrs);

	// // INDIVIDUAL REDIS OPERATIONS
	// // Create items hash redis table
	// await client.hSet(itemsKey(id), serialized);
	// // Add items:views sorted hash redis table the intiial score
	// await client.zAdd(itemsByViewsKey(), { value: id, score: 0 });
	// PIPELINING REDIS OPERATIONS
	await Promise.all([
		// Create items hash redis table
		client.hSet(itemsKey(id), serialized),
		// Add items:views sorted hash redis table the intiial score
		client.zAdd(itemsByViewsKey(), { value: id, score: 0 }),
		// Add items:ending-at sorted hash redis table
		client.zAdd(itemsByEndingAtKey(), { value: id, score: serialized.endingAt })
	]);

	return id;
};
