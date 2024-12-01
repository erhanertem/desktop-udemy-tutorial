const http = require('http');

const express = require('express');

const app = express();

// EXPRESSJS MIDDLEWARE
// FIRST MIDDLEWARE
app.use((req, res, next) => {
	console.log('In the middleware');
	// EITHER YOU PROVIDE NEXT() TO LINK TO THE NEXT MIDDLEWARE OR PROVIDE RESPONSE
	next(); // Shoot it to the next middleware down below
});
// SECOND MIDDLEWARE
app.use((req, res, next) => {
	console.log('In another middleware');
	// INSTEAD OF WRITE, SETHEADER, RES.END() CLUTTERED NODEJS CODE EXPRESSJS PROVIDES A UTILITY FUNCTION CALLED SEND()
	res.send('<p>Hello from Express!</p>');
});

// REPLACED BY listen() EXPRESS.JS FUNCTION
// const server = http.createServer(app);
// server.listen(3000, () => {
// 	console.log('Listening on port 3000');
// });
app.listen(3000, () => {
	console.log('Listening on port 3000');
});
