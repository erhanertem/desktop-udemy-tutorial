import { client } from '$services/redis';
import { deserialize } from './deserialize';
import { itemsIndexKey } from '$services/keys';

export const searchItems = async (term: string, size: number = 5) => {
	// Pre-process for Fuzzy Search - Cleanup the input for alphanumeric inputs
	const cleanedTerm = term
		.replaceAll(/[^a-zA-Z0-9 ]/g, '')
		// ^ negates the regex pattern
		.trim()
		.split(' ')
		.map((word) => (word ? `%${word}%` : ''))
		.join(' ');

	// GUARD CLAUSE - Look at cleaned TERM and make sure its valid
	if (cleanedTerm.length === 0) {
		return [];
	}

	// Prioritized/weight search @ search result attributes
	const query = `(@name:(${cleanedTerm}) => {$weight:5.0}) | (@description:(${cleanedTerm}))`;

	// Use the redis client to do an actual search
	/* const results = await client.ft.search(itemsIndexKey(), cleanedTerm, { */
	const results = await client.ft.search(itemsIndexKey(), query, {
		LIMIT: { from: 0, size: size },
	});
	/* console.log(results.documents[0].value); */

	// Deserialize and return the research results to app
	return results.documents.map(({ id, value }) => deserialize(id, value as any));
};
