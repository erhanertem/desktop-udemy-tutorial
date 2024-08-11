import type { CreateBidAttrs, Bid } from '$services/types';
import { client } from '$services/redis';
import { bidHistoryKey } from '$services/keys';
import { DateTime } from 'luxon';

// Adds a bid to bid histogram redis list
export const createBid = async (attrs: CreateBidAttrs) => {
	// Serialize bid for inserting into redis list
	const serializedBid = serializeHistory(attrs.amount, attrs.createdAt.toMillis());

	// Insert serialized bid into redis list to the right hand
	return client.rPush(bidHistoryKey(attrs.itemId), serializedBid);
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
