const http = require('http');

function html(strings, ...values) {
	return strings.reduce(
		(result, string, i) => result + string + (values[i] || ''),
		''
	);
}

function handleRoutes(req, res) {
	if (req.url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write(
			html`<html>
				<head>
					<title>HELLO DEAR</title>
				</head>
				<p>Please submit a user</p>
				<body>
					<form
						action="/create-user"
						method="POST"
					>
						<input
							type="text"
							name="username"
						/>
						<button type="submit">Send</button>
					</form>
				</body>
			</html>`
		);
		return res.end();
	}
	if (req.url === '/create-user' && req.method === 'POST') {
		const dataChunks = [];
		req.on('data', (chunk) => {
			dataChunks.push(chunk);
		});

		return req.on('end', () => {
			const parsedData = Buffer.concat(dataChunks).toString();
			const username = parsedData.split('=')[1];
			console.log(username);
			res.statusCode = 302; // Redirect
			res.setHeader('Location', '/'); // Redirect user to root endpoint
			return res.end();
		});
		console.log();
	}
	if (req.url === '/users') {
		res.setHeader('Content-Type', 'text/html');
		res.write(
			html`<html>
				<ul>
					<li>User #1</li>
					<li>User #2</li>
					<li>User #3</li>
				</ul>
			</html>`
		);
		return res.end();
	}
}

const server = http.createServer(handleRoutes);
server.listen(3000, () => {
	'Server listening @ port 3000';
});
