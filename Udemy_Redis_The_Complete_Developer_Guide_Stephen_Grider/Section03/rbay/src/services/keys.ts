export const pageCacheKeys = (id: string) => `pagecache#${id}`;
export const sessionsKey = (sessionId: string) => `sessions#${sessionId}`;
export const bidHistoryKey = (itemId: string) => `history#${itemId}`;

// Users
export const usersKey = (userId: string) => `users#${userId}`;
export const usernamesUniqueKey = () => 'usernames:unique';
export const userLikesKey = (userId: string) => `userLikes#${userId}`;
export const usernamesKey = () => 'usernames';

// Items
export const itemsKey = (itemId: string) => `items#${itemId}`;
export const itemsByViewsKey = () => 'items:views';
export const itemsByEndingAtKey = () => 'items:ending-at';
export const itemsViewsKey = (itemId: string) => `items:views#${itemId}`;
export const itemsByPriceKey = () => 'items:price';
