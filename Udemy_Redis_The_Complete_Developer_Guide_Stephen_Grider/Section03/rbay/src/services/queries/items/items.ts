import type { CreateItemAttrs } from '$services/types';
import { client } from '$services/redis';
import { serialize } from './serialize';
import { genId } from '$services/utils';
import { itemsKey } from '$services/keys';
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
	const serialized = serialize(attrs);
	await client.hSet(itemsKey(id), serialized);

	return id;
};
