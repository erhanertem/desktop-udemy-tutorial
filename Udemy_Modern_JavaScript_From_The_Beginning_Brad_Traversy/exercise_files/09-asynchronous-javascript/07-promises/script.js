const promise = new Promise((resolve, reject) => {
	// DO SOME ASYNC TASK
	setTimeout(() => {
		console.log('Async task complete');
		resolve();
	}, 1000);
});

promise.then(() => {
	console.log('Promise consumed...');
});

const promise2 = new Promise((resolve, reject) => {
	// DO SOME ASYNC TASK
	setTimeout(() => {
		let error = true;

		if (!error) {
			console.log('Async task complete');
			resolve({ name: 'John', age: 30 });
		} else {
			reject('Error: !!Something went wrong');
		}
	}, 1000);
})
	.then((user) => {
		console.log(`Promise 2 consumed by ${user.name} @ age of ${user.age}`);
	})
	.catch((error) => console.log(error))
	.finally(() => console.log('The promise has been resolved or rejected, whatever!!'));

console.log('Hello from global scope');
