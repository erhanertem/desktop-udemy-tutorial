const axios = require('axios');

async function getPost() {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
	console.log(res.data);
}

getPost();
