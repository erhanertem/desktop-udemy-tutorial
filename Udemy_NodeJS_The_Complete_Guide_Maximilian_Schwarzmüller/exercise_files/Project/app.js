const path = require('path');

const dotenv = require('dotenv');
// Load appropriate .env file based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(__dirname, envFile) });

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

const User = require('./models/user');

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

// Manage a dummy user till authentication is established
app.use((req, res, next) => {
	User.findById('67818dc96d1f446bb00f1402')
		.then((user) => {
			if (user) {
				console.log('Found user');
				req.user = new User(user.name, user.email, user.cart, user._id); // Create a user object from the fetched user data help us solicit User object functions as well.
				next();
			} else {
				throw new Error('User not found');
			}
		})
		.catch((err) => {
			console.log(err);
			next(err); // Pass error to error-handling middleware
		});
});

// Express Routers
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// ERROR HANDLING
// > 404 Middleware for non-existent routes
app.use(errorController.get404);

// > Error-handling middleware
app.use(errorController.get500);

// Server initializer with mongoDB in IEFF style
(async () => {
	try {
		// Connect to mongoDB
		await mongoose.connect(
			`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASS}@shop.vs6wu.mongodb.net/shop?retryWrites=true&w=majority`
		);

		// TEMP - Create a dummy user after connecting to MongoDB
		const isThereAnyUser = await User.findOne();
		if (!isThereAnyUser) {
			// Create a new dummy user
			const user = new User({
				name: 'Ernie',
				email: 'e@e.com',
				cart: { items: [] },
			});
			// Save to DB
			await user.save();
		}

		// Initialize backend server
		app.listen(process.env.PORT, process.env.DB_HOST, () => {
			console.log(
				`Listening on port ${process.env.PORT}, running on DB_HOST:${process.env.DB_HOST} in ${
					process.env.NODE_ENV || 'development'
				} mode`
			);
		});
	} catch (err) {
		console.error('Failed to start the server due to a database connection error:', err);
		process.exit(1); // Exit the process with a failure code
	}
})();
