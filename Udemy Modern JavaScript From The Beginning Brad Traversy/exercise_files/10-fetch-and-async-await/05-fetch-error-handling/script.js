// SUCCESS STATUS
// fetch('http://httpstat.us/200').then((res) => console.log(res.statusText));

// // GENERAL ERROR STATUS HANDLING
// fetch('http://httpstat.us/404')
// 	.then((res) => {
// 		if (!res.ok) {
// 			throw new Error('Request Failed');
// 		}
// 		return res;
// 	})
// 	.then(() => console.log('success'))
//    .catch((err) => console.log(err));

// SPECIFIC ERROR STATUS HANDLING
fetch('http://httpstat.us/500')
	.then((res) => {
		if (res.status === 404) {
			throw new Error('Not Found');
		} else if (res.status === 500) {
			throw new Error('Server Error');
		} else if (res.status !== 200) {
			throw new Error('Request Failed');
		}
		return res;
	})
	.then(() => console.log('success'))
	.catch((err) => console.log(err));

// // Catch runs on network error - NO STATUS
// fetch('https://hello1234.net')
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => console.log(err, 'Not a valid site'));
