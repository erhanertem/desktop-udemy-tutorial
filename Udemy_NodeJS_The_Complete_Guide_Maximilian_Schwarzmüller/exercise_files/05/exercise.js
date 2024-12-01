const express = require('express');

const app = express();

app.use('/', function (req, res, next) {
	console.log('In the first middleware');
	next(); // Shoot it to the next middleware down below
});

app.use('/', function (req, res, next) {
	console.log('In the second middleware');
	next(); // Shoot it to the next middleware down below
});

app.get('/users', (req, res) => {
	console.log('@users');
	res.send('<h1>Hello from the users!</h1>');
});
app.get('/', (req, res) => {
	console.log('@/');
	res.send('<h1>Hello from the root endpoint!</h1>');
});

app.listen(3000, () => {
	console.log('Serving @ port 3000');
});
