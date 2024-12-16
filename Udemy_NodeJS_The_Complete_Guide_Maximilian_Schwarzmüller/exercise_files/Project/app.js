const path = require('path');

const dotenv = require('dotenv');
// Load appropriate .env file based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(__dirname, envFile) });

const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

// const db_pool = require('./util/sqldatabase');
// #1. THEN CATCH VERSION
// db_pool
// 	.execute('SELECT * FROM products')
// 	.then((result) => {
// 		console.log(result[0][0]);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
// #2. TRY-CATCH VERSION
// (async () => {
// 	try {
// 		// Execute the SQL query
// 		const [rows] = await db_pool.execute('SELECT * FROM products');

// 		// Log the first row or all results as needed
// 		console.log(rows[0]); // Logs the first product
// 	} catch (err) {
// 		// Handle any errors that occur during execution
// 		console.error('Error fetching products:', err);
// 	}
// })();

// Middleware to parse application/x-www-form-urlencoded data (expressjs)
app.use(express.urlencoded({ extended: true }));
// Middleware to parse application/json data (expressjs)
app.use(express.json());

// Desiginate a template engine to use
app.set('view engine', 'ejs');
// Tell where the template engine files are located
app.set('views', path.join(__dirname, 'views'));

// Serve static content folder
app.use(express.static(path.join(__dirname, 'public')));

// EXPRESSJS MIDDLEWARE
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// ERROR HANDLING
// > 404 Middleware for non-existent routes
app.use(errorController.get404);

// > Error-handling middleware
app.use(errorController.get500);

app.listen(process.env.PORT, process.env.DB_HOST, () => {
	console.log(
		`Listening on port ${process.env.PORT}, running on DB_HOST:${process.env.DB_HOST} in ${
			process.env.NODE_ENV || 'development'
		} mode`
	);
});
