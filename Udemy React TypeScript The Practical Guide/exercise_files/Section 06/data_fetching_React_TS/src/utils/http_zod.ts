import { z } from 'zod';

// > http_no_zod w/Generic get function with internally handled parsed data solution
export async function get<T>(url: string, zodSchema: z.ZodType<T>) {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Failed to fetch data.');
	}
	// OPT#1 Weak typing - TYPE ASSERTION
	// const data = (await response.json()) as unknown; // unknown is better than type any
	// OPT#2 Similarly better typing - TYPE CASTING
	const data: unknown = await response.json();

	try {
		return zodSchema.parse(data);
	} catch (err) {
		throw new Error('Invalid data recevied from the server');
	}
}

// // > http_no_zod w/Generic get function solution
// export async function get<T>(url: string) {
// 	const response = await fetch(url);

// 	if (!response.ok) {
// 		throw new Error('Failed to fetch data.');
// 	}
// 	// OPT#1 Weak typing - TYPE ASSERTION
// 	// const data = (await response.json()) as unknown; // unknown is better than type any
// 	// OPT#2 Similarly better typing - TYPE CASTING
// 	const data: unknown = await response.json();

// 	return data as T;
// }

// > http_no_zod w/as type precursor solution
// export async function get(url: string) {
// 	const response = await fetch(url);

// 	if (!response.ok) {
// 		throw new Error('Failed to fetch data.');
// 	}
// 	// OPT#1 Weak typing - TYPE ASSERTION
// 	// const data = (await response.json()) as unknown; // unknown is better than type any
// 	// OPT#2 Similarly better typing - TYPE CASTING
// 	const data: unknown = await response.json();
// 	return data;
// }