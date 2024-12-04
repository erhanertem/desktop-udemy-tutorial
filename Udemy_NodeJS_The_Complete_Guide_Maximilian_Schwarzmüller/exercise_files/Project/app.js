const path = require('path');

const express = require('express');
const html = require('./util/html');

const app = express();

// Desiginate a template engine to use
app.set('view engine', 'ejs');
// Tell where the template engine files are located
app.set('views', path.join(__dirname, 'views'));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Middleware to parse application/x-www-form-urlencoded data (expressjs)
app.use(express.urlencoded({ extended: true }));
// Middleware to parse application/json data (expressjs)
app.use(express.json());

// Serve static content folder
app.use(express.static(path.join(__dirname, 'public')));

// EXPRESSJS MIDDLEWARE
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// ERROR HANDLING
// > 404 Middleware for non-existent routes
app.use((req, res, next) => {
	res.render('404', {
		pageTitle: 'Page Not Found',
		layout: false,
		path: '',
		styles: '<link rel="stylesheet" href="/css/main.css" >',
	});
});

// > Error-handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack); // Log the error

	// Check for specific errors, like JSON parsing issues
	if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
		return res.status(400).send(html`
			<html>
				<head>
					<title>Error</title>
				</head>
				<body>
					<h1>Invalid Request Body</h1>
					<p>You will be redirected shortly...</p>
					<script>
						setTimeout(() => {
							window.location.href = '/';
						}, 1500);
					</script>
				</body>
			</html>
		`);
	}

	res.status(500).send('Internal Server Error'); // Generic error response
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
