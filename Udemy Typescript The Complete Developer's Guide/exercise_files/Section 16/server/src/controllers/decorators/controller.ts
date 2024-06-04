import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { NextFunction, Request, RequestHandler, Response } from 'express';

// req.body validator middleware
function bodyValidators(keys: string[]): RequestHandler {
	return function (req: Request, res: Response, next: NextFunction) {
		// GUARD CLAUSE -if there is no body, we can't proceed firther with this middleware
		if (!req.body) {
			res.status(422).send('Invalid request');
			return;
		}

		// GUARD CLAUSE - if any of the keys do not exist we can't proceed further with this middleware
		for (let key of keys) {
			if (!(key in req.body)) {
				res.status(422).send('Invalid request');
				return;
			}
		}

		// Proceed w/ the next middleware
		next();
	};
}

// Factory decorator
export function controller(routePrefix: string) {
	// Actual decorator function
	// Aims the constructor function as its applied onto a class so target is either Function / typeof <Class?>
	return function (constructor: Function) {
		const router = AppRouter.getInstance();
		// > ES5
		for (let key in constructor.prototype) {
			// console.log(key, constructor);
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
			const middlewares =
				Reflect.getMetadata(
					MetadataKeys.middleware,
					constructor.prototype,
					key,
				) || []; // Incase it is undefined return empty []
			const requiredReqBodyProps =
				Reflect.getMetadata(
					MetadataKeys.validator,
					constructor.prototype,
					key,
				) || []; // Incase it is undefined return empty []

			const validatorMiddleware = bodyValidators(requiredReqBodyProps);

			// Get a hold of the key that only bears the path metadata
			if (path) {
				router[method](
					`${routePrefix}${path}`,
					...middlewares,
					validatorMiddleware,
					routeHandler,
				);
			}
		}

		// // > ES2016
		// Object.getOwnPropertyNames(constructor.prototype).forEach((key) => {
		// 	const routeHandler = constructor.prototype[key];
		// 	const path = Reflect.getMetadata(
		// 		MetadataKeys.path,
		// 		constructor.prototype,
		// 		key,
		// 	);
		// 	const method: Methods = Reflect.getMetadata(
		// 		MetadataKeys.method,
		// 		constructor.prototype,
		// 		key,
		// 	);
		// 	if (path) {
		// 		router[method](`${routePrefix}${path}`, routeHandler);
		// 	}
		// });
	};
}
