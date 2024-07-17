const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = false;

		if (!error) {
			resolve({ name: 'John', age: 30 });
		} else {
			reject('Error: Something went wrong');
		}
	}, 1000);
});

promise
	.then((user) => {
		console.log(user);
		return user.name;
	})
	.then((name) => {
		console.log(name);
		return name.length;
	})
	.then((nameLength) => {
		console.log(nameLength, 'Hohohohoho!!');
	})
	.catch((error) => console.log(error));
