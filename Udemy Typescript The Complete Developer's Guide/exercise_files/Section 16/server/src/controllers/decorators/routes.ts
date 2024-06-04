import 'reflect-metadata';
import { RequestHandler } from 'express';

import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

interface RouteHandlerDescriptor extends PropertyDescriptor {
	value?: RequestHandler; // NOTE: RequestHandler is an express function that bears Request, Responde as arguments....
}

// Respond to get/post/etc. functionality in one go.
function routeBinder(method: string) {
	// Factory decorator
	return function (path: string) {
		// Actual decorator
		return function (
			target: any,
			name: string,
			descriptor: RouteHandlerDescriptor, // IMPORTANT: We provide provision to route handler function desc otherwise it could be any function other than what express can handle
		) {
			Reflect.defineMetadata(MetadataKeys.path, path, target, name); // Create a metadata called 'path' based on path arg provided @ factory decorator, which gets defined onto 'target' object with 'name' property
			Reflect.defineMetadata(MetadataKeys.method, method, target, name);
		};
	};
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const del = routeBinder(Methods.delete);
export const patch = routeBinder(Methods.patch);

// // Factory decorator
// export function get(path: string) {
// 	// Actual decorator
// 	return function (
// 		target: any,
// 		name: string,
// 		_descriptor: PropertyDescriptor,
// 	) {
// 		Reflect.defineMetadata('path', path, target, name); // Create a metadata called 'path' based on path arg provided @ factory decorator, which gets defined onto 'target' object with 'name' property
// 		Reflect.defineMetadata('method', 'get', target, name);
// 	};
// }
// // Factory decorator
// export function post(path: string) {
// 	// Actual decorator
// 	return function (
// 		target: any,
// 		name: string,
// 		_descriptor: PropertyDescriptor,
// 	) {
// 		Reflect.defineMetadata('path', path, target, name); // Create a metadata called 'path' based on path arg provided @ factory decorator, which gets defined onto 'target' object with 'name' property
// 		Reflect.defineMetadata('method', 'post', target, name);
// 	};
// }
