const path = require('path');
const express = require('express');

const dotenv = require('dotenv');
// Load appropriate .env file based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(__dirname, envFile) });

const feedRoutes = require('./routes/feed');

// Init Express App
const app = express();

// // Text type only form submission parser
// app.use(express.urlencoded({ extended: false }));
// Req Body Parser - application/json
app.use(express.json());

// 1️⃣ Handle CORS for normal requests - Allow communication between server and client domains
app.use((req, res, next) => {
	// Allow all origins
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Allow only these HTTP methods
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
	// Allow these headers
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

// 2️⃣ Handle CORS preflight (OPTIONS) requests explicitly
app.options('*', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', 'https://example.com:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.setHeader('Access-Control-Max-Age', '600'); // Cache for 10 minutes
	res.sendStatus(204); // No content for OPTIONS reqs
});

// App Routes
app.use('/feed', feedRoutes); // Prefixes the endpoint URL with /feed

// Start the server
const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'localhost';
const NODE_ENV = process.env.NODE_ENV || 'development';
app.listen(PORT, DB_HOST, () => {
	console.log(`Listening on port ${PORT}, running on DB_HOST:${DB_HOST} in ${NODE_ENV} mode`);
});
