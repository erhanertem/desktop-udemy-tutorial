export async function get<T>(url: string) {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Failed to fetch data.');
	}
	// OPT#1 Weak typing - TYPE ASSERTION
	// const data = (await response.json()) as unknown; // unknown is better than type any
	// OPT#2 Similarly better typing - TYPE CASTING
	const data: unknown = await response.json();
	return data as T;
}

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
