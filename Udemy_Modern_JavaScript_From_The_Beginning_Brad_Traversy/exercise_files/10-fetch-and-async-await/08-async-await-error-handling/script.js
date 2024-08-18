// > #1. ASYNC AWAIT ERROR HANDLING - internall try...catch
const getUsers = async () => {
	try {
		// const response = await fetch('https://jsonplaceholder.typicode.com/users');
		// const data = await response.json();

		const response = await fetch('https://httpstat.us/404');

		// GUARD CLAUSE - ERROR HANDLING
		if (!response.ok) {
			throw new Error('Request Failed');
		}

		const data = await response.text();

		console.log(data);
	} catch (err) {
		console.log(err);
	} finally {
		console.log('Whooo');
	}
};
// getUsers();

// > #2. ASYNC AWAIT ERROR HANDLING - external .catch
const getPosts = async () => {
	const response = await fetch('https://httpstat.us/500');

	// GUARD CLAUSE - ERROR HANDLING
	if (!response.ok) {
		throw new Error('👉 Request Failed');
	}

	const data = await response.text();
	console.log(data);
};
getPosts().catch((err) => console.log(err));
