import { client } from '$services/redis';
import { itemsKey, itemsByViewsKey } from '$services/keys';

export const itemsByViews = async (order: 'DESC' | 'ASC' = 'DESC', offset = 0, count = 10) => {
	// NOTE: Here sort command pulls each record of items#**.name and items#**.views properties and publish aside the matching member ids in items:view. We make sure the array includes the member ids via '#' annotation.
	const results = await client.sort(itemsByViewsKey(), {
		GET: ['#', `${itemsKey('*')}->name`, `${itemsKey('*')}->views`],
		BY: 'noscore', // We could have put also 'xvgsfdfdgfdfg' . Does not matter. Since items:views sorted set data is already sorted.
		DIRECTION: order,
		LIMIT: { offset, count }
	});

	console.log(results);
};
