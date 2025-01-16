const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
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

// EXPRESSJS MIDDLEWARE

// // Manage a dummy user till authentication is established
// // Warning: Once this is disabled, the use will have no access to the user model methods since the authentication process only fetches user information from the mongoDB server, but does not initialize user based on our User model Object.
// Middleware to manage a dummy user till authentication is established
// app.use((req, res, next) => {
// 	User.findById('67818dc96d1f446bb00f1402')
// 		.then((user) => {
// 			if (user) {
// 				console.log('Found user');
// 				req.user = user;
// 				next();
// 			} else {
// 				throw new Error('User not found');
// 			}
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			next(err); // Pass error to error-handling middleware
// 		});
// });

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
		// Connect to mongoDB
		await mongoose.connect(MONGODB_URI);

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
