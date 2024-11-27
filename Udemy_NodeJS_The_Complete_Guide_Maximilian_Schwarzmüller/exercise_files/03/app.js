// const file = require('./http.js'); // Import in file
const http = require('http'); // Import in core module

const routes = require('./routes');

// function rqListener(req, res) {
// 	console.log(req);
// }

// // Create server with named function
// http.createServer(rqListener); // Create a http server and execute rqListener on every request
// // Create server with anonymous function
// http.createServer(function (req, res) {
// 	console.log(req);
// });
// Create server with arrow function
const server = http.createServer(routes);

server.listen(3000, () => {
	console.log('Listening on port 3000');
});
