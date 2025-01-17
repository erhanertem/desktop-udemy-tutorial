const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const { csrfSync } = require('csrf-sync'); // Serverside sessions version
const MongoDBStore = require('connect-mongodb-session')(session); // Takes express-session as its argument and the result is stored in MongoDBStore
const dotenv = require('dotenv');
// Load appropriate .env file based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(__dirname, envFile) });

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');
const errorController = require('./controllers/error');

const User = require('./models/user');

// Init Express App
const app = express();
// Init Session Storage
// MongoDB URI
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASS}@shop.vs6wu.mongodb.net/shop?retryWrites=true&w=majority`;
const store = new MongoDBStore({ uri: MONGODB_URI, collection: 'sessions' });

// Desiginate a template engine to use
app.set('view engine', 'ejs');
// Tell where the template engine files are located
app.set('views', path.join(__dirname, 'views'));

// Serve static content folder
app.use(express.static(path.join(__dirname, 'public')));
// Middleware to handle URL-encoded data which is typically used when submitting HTML forms with the application/x-www-form-urlencoded content type. Extended set to true, can allow handling complex data structures such as nested objects, arrays in req.body.
app.use(express.urlencoded({ extended: true }));
// Handle user sessions for stateful cookie-based authentication
app.use(
	session({
		secret: process.env.SESSION_SECRET, // Session secret
		resave: false, //  The session will not be saved back to the session store on every response, even if the session was never modified during the request. This can help improve performance by reducing unnecessary writes to the session store.
		saveUninitialized: false, // A session will not be created and saved to the session store unless it is modified. This helps reduce storage usage by only saving sessions that have meaningful data.
		store: store, // The session store
	})
);

// Middleware to parse incoming requests with JSON payloads. It parses the body of the request and makes it available under req.body. If located before the session middleware, it might interfere with the session handling, especially if the session data is stored in the request body or if there are any conflicts in how the request body is parsed.
app.use(express.json());

// Init csrf protection middleware
// const csrfProtection = csrf();
// Initialize csrfSync
const { csrfSynchronisedProtection, generateToken } = csrfSync({
	getTokenFromRequest: (req) => {
		return req.body['_csrf'];
	}, // Used to retrieve the token submitted by the user in a form
});

// Apply the CSRF middleware
app.use(csrfSynchronisedProtection);

// Global middleware to inject CSRF token and authentication status
app.use((req, res, next) => {
	// NOTE:  The res.locals object in Express.js is a special object that contains local variables scoped to the request. These variables are available to the view templates rendered by the application. By setting a property on res.locals, you make it accessible in the views.

	// Ensure req.session is available before calling generateToken
	// Set Authentication status  for every response
	res.locals.isAuthenticated = !!req.session.isLoggedIn;
	if (req.session) {
		// Generate CSRF token
		res.locals.csrfToken = generateToken(req, true); // Generate CSRF token - 'true' will force a new token to be generated, even if one already exists
	}
	// Call the next middleware function
	next();
});

// Register the session user as mongoose user with User object methods
app.use((req, res, next) => {
	// GUARD CLAUSE - Pass thru if there is no session user
	if (!req.session.user) {
		return next(); // Need to explicityl return next() to make sure the execution does not continue after this
	}
	// Read the session user id and fetch the corresponding mongoDB User instance
	User.findById(req.session.user._id)
		.then((user) => {
			if (user) {
				console.log('Found user');
				req.user = user; // Assign the matching mongo user for the app @ top level request object as a user attribute - now we have access to all User related methods as defined in the User model
				return next();
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
app.use(authRoutes);

// ERROR HANDLING
// > 404 Middleware for non-existent routes
app.use(errorController.get404);

// > Error-handling middleware
app.use(errorController.get500);

// Server initializer with mongoDB in IEFF style
(async () => {
	try {
		// Global error handlers
		// Handle uncaught exceptions
		process.on('uncaughtException', (err) => {
			console.error('Uncaught Exception:', err);
			process.exit(1); // Exit the process with a failure code
		});

		// Handle unhandled promise rejections
		process.on('unhandledRejection', (reason, promise) => {
			console.error('Unhandled Rejection at:', promise, 'reason:', reason);
			process.exit(1); // Exit the process with a failure code
		});

		// Connect to mongoDB
		await mongoose.connect(MONGODB_URI);
		console.log('Connected to MongoDB');

		// // TEMP - Create a dummy user after connecting to MongoDB
		// const isThereAnyUser = await User.findOne();
		// if (!isThereAnyUser) {
		// 	// Create a new dummy user
		// 	const user = new User({
		// 		name: 'Ernie',
		// 		email: 'e@e.com',
		// 		cart: { items: [] },
		// 	});
		// 	// Save to DB
		// 	await user.save();
		// }

		// Start the server
		const PORT = process.env.PORT || 3000;
		const DB_HOST = process.env.DB_HOST || 'localhost';
		const NODE_ENV = process.env.NODE_ENV || 'development';

		app.listen(PORT, DB_HOST, () => {
			console.log(`Listening on port ${PORT}, running on DB_HOST:${DB_HOST} in ${NODE_ENV} mode`);
		});
	} catch (err) {
		// Log database connection errors and exit
		console.error('Failed to start the server due to a database connection error:', err);
		process.exit(1); // Exit the process with a failure code
	}
})();
