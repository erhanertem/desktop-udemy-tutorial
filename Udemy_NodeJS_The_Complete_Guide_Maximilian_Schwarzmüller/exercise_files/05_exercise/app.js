const path = require('path');

const express = require('express');

const app = express();

// STATIC SERVING
app.use(express.static(path.join(__dirname, 'public')));

// DYNAMIC SERVING
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'h1.html'));
});
app.get('/users', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'h2.html'));
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
