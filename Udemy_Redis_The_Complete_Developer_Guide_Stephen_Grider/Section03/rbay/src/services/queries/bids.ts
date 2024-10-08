import type { CreateBidAttrs, Bid } from '$services/types';
import { client, withLock } from '$services/redis';
import { bidHistoryKey, itemsByPriceKey, itemsKey } from '$services/keys';
import { DateTime } from 'luxon';
import { getItem } from './items';

// FOR TESTING PURPOSES ONLY
// const pause = (duration: number) => {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, duration);
// 	});
// };

// Adds a bid to bid histogram redis list
export const createBid = async (attrs: CreateBidAttrs) => {
	// --> CONCURRENCY ISSUE : Solving via locks
	// NOTE: attrs.itemId is the item we want to apply lock onto, cb fn as the second arg in the withLock is logic we want to implement with the locked item
	// return withLock(attrs.itemId, async (lockedClient: typeof client, signal: any) => {
	return withLock(attrs.itemId, async (lockedClient: typeof client) => {
		// 1. Fetching the item
		const item = await getItem(attrs.itemId);

		// // force processing session pass the expired signal threshold for testing purposes
		// await pause(5000);

		// 2. Doing Validation
		// GUARD CLAUSE Validation Stack
		if (!item) {
			throw new Error('Item does not exist');
		}
		if (item.price >= attrs.amount) {
			throw new Error('Bid too low');
		}
		if (item.endingAt.diff(DateTime.now()).toMillis() < 0) {
			throw new Error('Item closed to bidding');
		}
		// Serialize bid for inserting into redis list
		const serializedBid = serializeHistory(attrs.amount, attrs.createdAt.toMillis());

		// // GUARD CLAUSE - Check for expired signal
		// if (signal.expired) {
		// 	throw new Error("Lock expired, can't proceed");
		// }

		// 3. Writing some data
		return Promise.all([
			lockedClient.rPush(bidHistoryKey(attrs.itemId), serializedBid),
			lockedClient.hSet(itemsKey(item.id), {
				bids: item.bids + 1, //Increment bid count
				price: attrs.amount, // Update the current biddign amount`
				highestBidUserId: attrs.userId // New biddign user is always the higher
			}),
			lockedClient.zAdd(itemsByPriceKey(), { value: item.id, score: attrs.amount })
		]);
	});

	// // --> CONCURRENCY ISSUE : Solving via transaction
	// // Crete a new connection just for the transaction
	// return client.executeIsolated(async (isolatedClient) => {
	// 	// Add a watch statement on a property
	// 	await isolatedClient.watch(itemsKey(attrs.itemId));

	// 	// GUARD CLAUSE Validation Stack
	// 	const item = await getItem(attrs.itemId);
	// 	if (!item) {
	// 		throw new Error('Item does not exist');
	// 	}
	// 	if (item.price >= attrs.amount) {
	// 		throw new Error('Bid too low');
	// 	}
	// 	if (item.endingAt.diff(DateTime.now()).toMillis() < 0) {
	// 		throw new Error('Item closed to bidding');
	// 	}

	// 	// Serialize bid for inserting into redis list
	// 	const serializedBid = serializeHistory(attrs.amount, attrs.createdAt.toMillis());

	// 	// Execute the transaction
	// 	/*
	//    Call multi
	//    Insert serialized bid into redis list to the right hand
	// 	Update the item hash table attributes
	//    Update 'items:price' sorted hash table for max bid the item received
	//    Call exec
	//    */
	// 	return isolatedClient
	// 		.multi()
	// 		.rPush(bidHistoryKey(attrs.itemId), serializedBid)
	// 		.hSet(itemsKey(item.id), {
	// 			bids: item.bids + 1, //Increment bid count
	// 			price: attrs.amount, // Update the current biddign amount`
	// 			highestBidUserId: attrs.userId // New biddign user is always the higher
	// 		})
	// 		.zAdd(itemsByPriceKey(), { value: item.id, score: attrs.amount })
	// 		.exec();
	// });
};

// Retrieves the bid history for a given item in the redis list and retuns to app with proper time stamp format and onyl the items within certain range
export const getBidHistory = async (itemId: string, offset = 0, count = 10): Promise<Bid[]> => {
	// LRANGE history#a1 -3(start index) -1(end index)
	const history = await client.lRange(
		bidHistoryKey(itemId),
		-1 * (offset + count), // start index
		-1 * (1 + offset) // end index
	);
	// Map the redis data to the app-friendly format
	return history.map((bid) => deserializeHistory(bid));
};

// Make it fit for redis storing - format is ->  50:1223342322
const serializeHistory = (amount: number, createdAt: number) => {
	return `${amount}:${createdAt}`;
};
// Make it fit for app use
const deserializeHistory = (data: string) => {
	const [amount, createdAt] = data.split(':'); // amount: string, createdAt is string as rteturned from redis

	return { amount: parseFloat(amount), createdAt: DateTime.fromMillis(parseInt(createdAt)) };
};
