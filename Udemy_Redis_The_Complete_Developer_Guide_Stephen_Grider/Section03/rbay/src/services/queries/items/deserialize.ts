import type { Item } from '$services/types';
import { DateTime } from 'luxon';

export const deserialize = (id: string, item: { [key: string]: string }): Item => {
	// RETURN A USABLE DATA FROM REDIS WITH PROPER TYPES
	return {
		id,
		name: item.name,
		ownerId: item.ownerId,
		imageUrl: item.imageUrl,
		description: item.description,
		createdAt: DateTime.fromMillis(parseInt(item.createdAt)),
		endingAt: DateTime.fromMillis(parseInt(item.endingAt)),
		views: parseInt(item.views),
		likes: parseInt(item.likes),
		price: parseFloat(item.price),
		bids: parseInt(item.bids),
		highestBidUserId: item.highestBidUserId
	};
};
