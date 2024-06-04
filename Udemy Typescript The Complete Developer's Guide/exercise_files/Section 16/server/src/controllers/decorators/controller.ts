import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

// Factory decorator
export function controller(routePrefix: string) {
	// Actual decorator function
	// Aims the constructor function as its applied onto a class so target is either Function / typeof <Class?>
	return function (constructor: Function) {
		const router = AppRouter.getInstance();
		// > ES5
		for (let key in constructor.prototype) {
			console.log(key, constructor);
			const routeHandler = constructor.prototype[key];
			const path = Reflect.getMetadata(
				MetadataKeys.path,
				constructor.prototype,
				key,
			);
			const method: Methods = Reflect.getMetadata(
				MetadataKeys.method,
				constructor.prototype,
				key,
			);

			// Get a hold of the key that only bears the path metadata
			if (path) {
				router[method](`${routePrefix}${path}`, routeHandler);
			}
		}

		// // > ES2016
		// Object.getOwnPropertyNames(constructor.prototype).forEach((key) => {
		// 	const routeHandler = constructor.prototype[key];
		//    const path = Reflect.getMetadata(MetadataKeys.path, constructor.prototype, key);

		// 	if (path) {
		// 		router.get(`${routePrefix}${path}`, routeHandler);
		// 	}
		// });
	};
}
