import { client } from '$services/redis';
import { itemsKey, itemsByViewsKey } from '$services/keys';
import { deserialize } from './deserialize';

export const itemsByViews = async (order: 'DESC' | 'ASC' = 'DESC', offset = 0, count = 10) => {
	// NOTE: Here sort command pulls each record of items#**.name and items#**.views properties and publish aside the matching member ids in items:view. We make sure the array includes the member ids via '#' annotation.
	let results: any = await client.sort(itemsByViewsKey(), {
		GET: [
			'#',
			`${itemsKey('*')}->name`,
			`${itemsKey('*')}->views`,
			`${itemsKey('*')}->endingAt`,
			`${itemsKey('*')}->imageUrl`,
			`${itemsKey('*')}->price`
		],
		BY: 'noscore', // We could have put also 'xvgsfdfdgfdfg' . Does not matter. Since items:views sorted set data is already sorted.
		DIRECTION: order,
		LIMIT: { offset, count }
	});
	console.log(results);

	const items = [];
	while (results.length) {
		// Strip the first set of items
		const [id, name, views, endingAt, imageUrl, price, ...rest] = results;
		// Deserialize given data
		const item = deserialize(id, { name, views, endingAt, imageUrl, price });
		// Drop in the temporary array
		items.push(item);
		// Assign the remainder data as the new array set to extract data for the next item recursivly
		results = rest;
	}

	// Return the rebuilt-deserailized items
	return items;
};
