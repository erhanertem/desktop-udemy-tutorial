const path = require('path');
const express = require('express');

const dotenv = require('dotenv');
// Load appropriate .env file based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(__dirname, envFile) });

const feedRoutes = require('./routes/feed');

// Init Express App
const app = express();

// Text type only form submission parser
app.use(express.urlencoded({ extended: false }));
// Req Body Parser
app.use(express.json());

// App Routes
app.use('/feed', feedRoutes); // Prefixes the endpoint URL with /feed

// Start the server
const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'localhost';
const NODE_ENV = process.env.NODE_ENV || 'development';
app.listen(PORT, DB_HOST, () => {
	console.log(`Listening on port ${PORT}, running on DB_HOST:${DB_HOST} in ${NODE_ENV} mode`);
});
