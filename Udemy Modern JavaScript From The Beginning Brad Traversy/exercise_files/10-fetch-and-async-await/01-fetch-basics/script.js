// > ACCESS LOCAL FILES - FETCHING A JSON FILE
fetch('./movies.json')
	.then((res) => {
		console.log(res);
		return res.json();
	})
	.then((data) => console.log(data));

// > ACCESS LOCAL FILES - FETCHING A TXT FILE
fetch('./test.txt')
	.then((res) => {
		console.log(res);
		return res.text();
	})
	.then((data) => console.log(data));

// > FETCHING API
fetch('https://api.github.com/users/erhanertem')
	.then((res) => {
		console.log(res);
		return res.json();
	})
	.then((data) => console.log(data));
