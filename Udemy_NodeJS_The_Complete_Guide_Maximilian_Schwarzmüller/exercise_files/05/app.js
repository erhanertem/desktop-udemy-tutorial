const path = require('path');

const express = require('express');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

function html(strings, ...values) {
	return strings.reduce((result, string, i) => result + string + (values[i] || ''), '');
}

// Middleware to parse application/x-www-form-urlencoded data (expressjs)
app.use(express.urlencoded({ extended: true }));
// Middleware to parse application/json data (expressjs)
app.use(express.json());

// Serve static content folder
app.use(express.static(path.join(__dirname, 'public')));

// EXPRESSJS MIDDLEWARE
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// ERROR HANDLING
// > 404 Middleware for non-existent routes
app.use((req, res, next) => {
	// RESPOND NON-EXISTING ROUTES`
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// > Error-handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack); // Log the error

	// Check for specific errors, like JSON parsing issues
	if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
		return res.status(400).send('Invalid Request Body');
	}

	res.status(500).send('Internal Server Error'); // Generic error response
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
