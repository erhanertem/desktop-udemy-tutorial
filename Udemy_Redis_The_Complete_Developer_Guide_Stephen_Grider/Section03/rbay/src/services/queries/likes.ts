import { client } from '$services/redis';
import { itemsKey, userLikesKey } from '$services/keys';

export const userLikesItem = async (itemId: string, userId: string) => {
	// Check if the user has already liked the item
	return client.sIsMember(userLikesKey(userId), itemId); // Reddis command : SISMEMBER 'userlikes:userId' itemId
};

export const likedItems = async (userId: string) => {};

export const likeItem = async (itemId: string, userId: string) => {
	// Add liked item to the user's like set data list
	const inserted = await client.sAdd(userLikesKey(userId), itemId);
	// If Set accepts uniqiue input, go ahead with incrementing like count in the correspondign item
	if (inserted) {
		return client.hIncrBy(itemsKey(itemId), 'likes', 1);
	}
};

export const unlikeItem = async (itemId: string, userId: string) => {
	// Remove liked item from the user's like set data list
	const removed = await client.sRem(userLikesKey(userId), itemId);
	// If Set accepts removal of the uniqiue item, go ahead with decrementing like count in the corresponding item
	if (removed) {
		return client.hIncrBy(itemsKey(itemId), 'likes', -1);
	}
};

export const commonLikedItems = async (userOneId: string, userTwoId: string) => {};
