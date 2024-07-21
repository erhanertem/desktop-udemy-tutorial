const http = require('http');
const fs = require('fs');

const posts = [
	{ id: 1, title: 'Post one', body: 'This is post 1 ' },
	{ id: 2, title: 'Post two', body: 'This is post 2 ' },
];

const server = http.createServer((req, res) => {
	// url request coming from the client
	const url = req.url;
	console.log(url);

	// Responding various endpoints from the client
	if (url === '/') {
		fs.readFile('index.html', (err, file) => {
			if (err) {
				// Create header for the response to client
				res.writeHead(500, { 'content-type': 'text/html' });
				// Create the content for the requested url
				res.end('<h1>A problem has occurred</h1>');
			}
			// Create header for the response to client
			res.writeHead(200, { 'content-type': 'text/html' });
			// Create the content for the requested url
			res.end(file);
		});
	} else if (url === '/about') {
		// Create header for the response to client
		res.writeHead(200, { 'content-type': 'text/html' });
		// Create the content for the requested url
		res.end('<h1>About me</h1>');
	} else if (url === '/api/posts') {
		// Create header for the response to client
		res.writeHead(200, { 'content-type': 'application/json' });
		// Create the content for the requested url
		res.end(JSON.stringify({ success: true, data: posts }));
	} else {
		// Create header for the response to client
		res.writeHead(404, { 'content-type': 'text/html' });
		// Create the content for the requested url
		res.end('<h1>No such endpoint - You looser!!!</h1>');
	}
});

server.listen(8000, () => {
	console.log('Server is listening on port 8000');
});
