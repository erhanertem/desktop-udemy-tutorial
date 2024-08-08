import { pageCacheKeys } from '$services/keys';
import { client } from '$services/redis';

const cacheRoutes = ['/about', '/privacy', '/auth/signin', '/auth/singup'];

export const getCachedPage = (route: string) => {
	if (cacheRoutes.includes(route)) {
		return client.get(pageCacheKeys(route)); // Reddis command : GET 'pagecache#/about'
	}
	return null;
};

export const setCachedPage = (route: string, page: string) => {
	if (cacheRoutes.includes(route)) {
		return client.set(pageCacheKeys(route), page, { EX: 2 }); // Reddis command : SET 'pagecache#/about', '<p><h1>....</h1></p>' , EX: 2
	}
};
