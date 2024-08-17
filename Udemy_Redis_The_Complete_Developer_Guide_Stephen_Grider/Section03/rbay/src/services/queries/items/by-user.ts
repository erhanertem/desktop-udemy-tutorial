import { client } from '$services/redis';
import { itemsIndexKey } from '$services/keys';
import { deserialize } from './deserialize';

interface QueryOpts {
	page: number;
	perPage: number;
	sortBy: string;
	direction: string;
}

export const itemsByUser = async (userId: string, opts: QueryOpts) => {
	// The curlies { ${....} } is because of using TAG schemafield type element
	const query = `@ownerId:{${userId}}`;
	const sortCriteria = opts.sortBy && opts.direction && { BY: opts.sortBy, DIRECTION: opts.direction };
	const { total, documents } = await client.ft.search(itemsIndexKey(), query, {
		ON: 'hash',
		SORTBY: sortCriteria,
		LIMIT: { from: opts.page * opts.perPage, size: opts.perPage },
	} as any);
	console.log(total, documents);
	// Implement the logic to fetch items from the Redis database
	// using the provided userId and query options
	return {
		totalPages: Math.ceil(total / opts.perPage),
		items: documents.map(({ id, value }) => deserialize(id.replace('items#', ''), value as any)),
	};
};
