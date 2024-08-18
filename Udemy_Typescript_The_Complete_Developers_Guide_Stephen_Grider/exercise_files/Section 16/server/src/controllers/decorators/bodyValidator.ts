import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

// Factory decorator
// NOTE: We will check @loginpost for existance of email and password entries @ req.body which would replace guard clause and interface defintion exclusive to this endpoint
export function bodyValidator(...keys: string[]) {
	// Actual decorator
	return function (
		target: any,
		name: string,
		_descriptor: PropertyDescriptor,
	) {
		// Inject validator metadata
		Reflect.defineMetadata(MetadataKeys.validator, keys, target, name);
	};
}
