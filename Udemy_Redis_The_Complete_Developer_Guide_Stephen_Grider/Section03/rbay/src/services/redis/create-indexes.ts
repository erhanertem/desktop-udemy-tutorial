import { client } from './client';
import { SchemaFieldTypes } from 'redis';
import { itemsIndexKey, itemsKey } from '$services/keys';

export const createIndexes = async () => {
	// GUARD CLAUSE - if index already exists do not attempt to create a new one else app give give an error for attempting to create an existing one
	const indexes = await client.ft._list();
	const exists = indexes.find((index) => index === itemsIndexKey());
	if (exists) {
		return;
	}

	// Implement indexes creation logic here
	return client.ft.create(
		itemsIndexKey(),
		{
			name: {
				type: SchemaFieldTypes.TEXT,
				sortable: true,
			},
			description: {
				type: SchemaFieldTypes.TEXT,
				sortable: true,
			},
			ownerId: {
				type: SchemaFieldTypes.TAG,
				sortable: false,
			},
			endingAt: {
				type: SchemaFieldTypes.NUMERIC,
				sortable: true,
			},
			bids: {
				type: SchemaFieldTypes.NUMERIC,
				sortable: true,
			},
			views: {
				type: SchemaFieldTypes.NUMERIC,
				sortable: true,
			},
			price: {
				type: SchemaFieldTypes.NUMERIC,
				sortable: true,
			},
		} as any,
		{
			ON: 'HASH',
			PREFIX: itemsKey(''), // 'items#'
		}
	);
};
