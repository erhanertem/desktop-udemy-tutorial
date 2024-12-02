const path = require('path');

const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

// // >#1. w/PUG
// // Desiginate a template engine to use
// app.set('view engine', 'pug');
// // Tell where the template engine files are located
// app.set('views', path.join(__dirname, 'views'));
// >#2. W/HANDLEBARS
// NOTE: We define the engine manually, as its is not supported by express like pug right out of the box
app.engine(
	'hbs', //name of the engine - whatever you want
	engine({ extname: 'hbs', layoutsDir: 'views/layouts', defaultLayout: 'main-layout' }) // node module for hbs
);
// Desiginate a template engine to use
app.set('view engine', 'hbs');
// Tell where the template engine files are located
app.set('views', path.join(__dirname, 'views'));

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

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
	// res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
	// // >#1. w/PUG
	// res.render('404', { pageTitle: 'Page Not Found' });
	// >#2. w/HANDLEBAR
	res.render('404', {
		pageTitle: 'Page Not Found',
		layout: false,
		styles: '<link rel="stylesheet" href="/css/main.css" >',
	});
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
