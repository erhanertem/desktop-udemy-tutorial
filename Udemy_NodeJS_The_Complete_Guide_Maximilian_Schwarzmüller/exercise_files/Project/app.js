const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const { csrfSync } = require('csrf-sync'); // Serverside sessions version
const flash = require('connect-flash'); // Flash messages
const multer = require('multer'); // text/binary data parser for mixed type data forms
const MongoDBStore = require('connect-mongodb-session')(session); // Takes express-session as its argument and the result is stored in MongoDBStore
const dotenv = require('dotenv');
// Load appropriate .env file based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(__dirname, envFile) });

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');
const errorRoutes = require('./routes/error');
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

// Required for rate-limiting behind proxies
app.set('trust proxy', 1);

// Serve static content folder
app.use(express.static(path.join(__dirname, 'public')));

// Form Submission Parsers
// #1. Text type only form submission parser
// Middleware to handle URL-encoded (text) data which is typically used when submitting HTML forms with the application/x-www-form-urlencoded content type. Extended set to true, can allow handling complex data structures such as nested objects, arrays in req.body.
app.use(express.urlencoded({ extended: true }));
// #2. Mixed type multipart form submission parser
// Setup multer storage engine
const fileStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'images'); // Destination folder for uploaded images
	},
	filename: (req, file, cb) => {
		cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname); // Generate unique filename with current timestamp
	},
});
const fileFilter = (req, file, cb) => {
	// Filter out only image files
	if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
		cb(null, true); // Accep that file
	} else {
		cb(null, false); // Don't accept that file
		cb(new Error('Only image files are allowed!'));
	}
};
app.use(multer({ storage: fileStorage, filter: fileFilter }).single('image')); // File picker name is image, single signifies only single binary data submission

// Handle user sessions for stateful cookie-based authentication
app.use(
	session({
		secret: process.env.SESSION_SECRET, // Session secret
		resave: false, //  The session will not be saved back to the session store on every response, even if the session was never modified during the request. This can help improve performance by reducing unnecessary writes to the session store.
		saveUninitialized: false, // A session will not be created and saved to the session store unless it is modified. This helps reduce storage usage by only saving sessions that have meaningful data.
		store: store, // The session store
		cookie: {
			maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
			secure: process.env.NODE_ENV === 'production', // Secure cookies in production
			httpOnly: true, // Protect against XSS
		},
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

// Initialize the flash messages middleware - Needs to be located below session as it writes temporarily the flash message to the session
app.use(flash());

// Register the session user as mongoose user with User object methods
app.use((req, res, next) => {
	// // TEST MOCK ERROR
	// throw new Error('Test Error.');

	// GUARD CLAUSE - Pass thru if there is no session user
	if (!req.session.user) {
		return next(); // Need to explicitly return next() to make sure the execution does not continue after this
	}
	// Read the session user id and fetch the corresponding mongoDB User instance
	User.findById(req.session.user._id)
		.then((user) => {
			// // TEST MOCK ERROR
			// throw new Error('Test Error.');

			if (user) {
				console.log('Found user');
				req.user = user; // Assign the matching mongo user for the app @ top level request object as a user attribute - now we have access to all User related methods as defined in the User model
				return next();
			} else {
				// If the user does not exist, destroy the session and respond with an appropriate message
				req.session.destroy((err) => {
					if (err) {
						// Redirect with an error message in the query parameter
						return res.redirect('/?error=Could not log out. Please try again later.');
					}
					// Redirect with a message indicating the account has been deleted
					return res.redirect('/login?error=User account has been deleted.');
				});
			}
		})
		.catch((err) => {
			// > ❌ DOES NOT WORK
			// throw new Error(err); // IMPORTANT: throw new Error does not work inside async functions like try catch, etc.
			// > OPTION#1. DEAL W/EXPRESS GLOBAL ERROR HANDLER - CREATES INFINITE LOOP IF EXACT ERROR CODE CENTRALLY HANDLED
			// next(new Error(err));
			// Create custom error object
			// const error = new Error('Fetching user for the session failed.');
			// error.httpStatusCode = 500;
			// return next(error);

			// > OPTION#2. DEAL W/IT LOCALLY
			// console.error('Error fetching user:', err);
			// req.flash('error', 'An internal server error occurred. Please try again later.');
			// return res.redirect('/'); // Redirect to home page or an error page
			// Destroy session before rendering error page
			req.session.destroy(() => {
				res.status(500).render('errors/500', {
					pageTitle: 'Server Error',
					path: '', // Defines the active tab @ navbar
					message: 'Fetching user for the session failed.',
					isAuthenticated: req.session?.isLoggedIn, // Check if user is authenticated for nav bar display on/off
				});
			});
		});
});

// Express Routers
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
app.use(errorRoutes);

// ERROR HANDLING
// > 404 Middleware for non-existent routes
// If none of the above routes are hit, |his middleware will return for the reqwuested endpoint
app.use(errorController.get404);

// > Express Global Error-handling middleware - any error thrown via next(err) hits this special middleware
app.use(errorController.getGlobalErrorHandler);

// Server initializer with mongoDB in IEFF style
(async () => {
	try {
		// Non-express Global error handlers
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
