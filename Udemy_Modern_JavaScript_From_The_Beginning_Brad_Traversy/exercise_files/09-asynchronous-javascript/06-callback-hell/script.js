function getData(endpoint, cb) {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', endpoint);

	setTimeout(() => {
		xhr.send();
	}, Math.floor(Math.random() * 3000) + 1000);

	xhr.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			cb(JSON.parse(this.responseText));
		}
	};
}

// getData('./movies.json');
// getData('./actors.json');
// getData('./directors.json');

getData('./movies.json', (data) => {
	console.log(data);
	getData('./actors.json', (data) => {
		console.log(data);
		getData('./directors.json', (data) => {
			console.log(data);
		});
	});
});
