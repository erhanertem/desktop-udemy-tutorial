function getData(endpoint) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open('GET', endpoint);

		xhr.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status === 200) {
					resolve(JSON.parse(this.responseText));
				} else {
					reject('Something went wrong');
				}
			}
		};

		setTimeout(() => {
			xhr.send();
		}, Math.floor(Math.random() * 3000) + 1000);
	});
}

const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');
const dummyPromise = new Promise((resolve, reject) => {
	resolve(['Hello World']);
});

Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
	.then((dataArr) => dataArr.forEach((data) => console.log(data)))
	.catch((err) => console.log(err));
