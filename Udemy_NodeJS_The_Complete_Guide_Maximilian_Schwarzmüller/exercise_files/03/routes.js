const fs = require('fs');

function html(strings, ...values) {
	return strings.reduce(
		(result, string, i) => result + string + (values[i] || ''),
		''
	);
}

const reqHandler = function (req, res) {
	// -> IF HIT ROOT ENDPOINT AND GET METHOD BY DEFAULT
	if (req.url === '/') {
		// >#2. RESPONSE BODY / FILL IN SOME HTML RESPONSE
		res.write('<html>');
		res.write('<head><title>Enter Message</title></head>');
		res.write(
			html`<body>
				<form
					action="/message"
					method="POST"
				>
					<input
						type="text"
						name="message"
					/><button type="submit">Send</button>
				</form>
			</body>`
		);
		res.write('</html>');
		// >#3. END RESPONSE
		return res.end(); //Quits from the function - doesnt proceed with the rest of the code
	}

	// -> IF HIT /MESSAGE ENDPOINT WITH POST METHOD
	if (req.url === '/message' && req.method === 'POST') {
		// LISTEN ON DATA STREAM EVENT - NODE THRU DATA STREAM GETS CHUNKS OF DATA A PIECE MEAL AND COLLECTS THEM IN THE BODY
		const body = [];
		req.on('data', (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});
		// LISTEN ON STREAM END EVENT - BUFFER ALL THESE STREAMED CHUNKS AND MANTLE THEM BEFORE WE CAN START READ/SAVE THE FILE
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			const message = parsedBody.split('=')[1];
			fs.writeFile('message.txt', message, (err) => {
				// GUARD CLAUSE
				if (err) throw new Error(err.message);

				res.statusCode = 302; // Report status code
				res.setHeader('Location', '/'); // Redirect user to root endpoint
				return res.end(); // Quits from the function - doesnt proceed with the rest of the code }); // Create a file
			});
		});
	}

	// SENDIGN A RESPONSE
	// >#1. START RESPONSE / CONFIGURE RESPONSE HEADER
	res.setHeader('Content-Type', 'text/html');

	// >#2. RESPONSE BODY / FILL IN SOME HTML RESPONSE
	res.write('<html>');
	res.write('<head><title>My First Page</title></head>');
	res.write('<body><h1>Hello from Node.js Server!</h1></body>');
	res.write('</html>');
	// >#3. END RESPONSE
	res.end();
};

module.exports = reqHandler;
