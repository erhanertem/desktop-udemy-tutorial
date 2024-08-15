import { client } from './client';
import { SchemaFieldTypes } from 'redis';
import { itemsIndexKey, itemsKey } from '$services/keys';

export const createIndexes = async () => {
	// Implement indexes creation logic here
	return client.ft.create(
		itemsIndexKey(),
		{
			name: { type: SchemaFieldTypes.TEXT },
			description: { type: SchemaFieldTypes.TEXT }
		},
		{
			ON: 'HASH',
			PREFIX: itemsKey('') // 'items#'
		}
	);
};
