import 'reflect-metadata';

import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

// Note: We would like to call this many times
// Factory Decorator
export function use(middleware: RequestHandler) {
	return function (target: any, name: string, descriptor: PropertyDescriptor) {
		// iF MIDDLEWARES EXIST @ MIDDLEWARE METADATA, GET IT OR ASSIGN BLANK [] TO INSERT INTO MIDDLEWARE ENUMERABLE
		const middlewares =
			Reflect.getMetadata(MetadataKeys.middleware, target, name) || [];
		// INSERT ONTO ARRAY
		middlewares.push(middleware);
		// SAVE ONTO MIDDLEWARE METADATA
		Reflect.defineMetadata(
			MetadataKeys.middleware,
			middlewares,
			target,
			name,
		);
	};
}
