const express = require('express');

const feedRoutes = require('./routes/feed');

// Init Express App
const app = express();

// Text type only form submission parser
app.use(express.urlencoded({ extended: false }));
// Req Body Parser
app.use(express.json());

// App Routes
app.use('/feed', feedRoutes); // Prefixes the endpoint URL with /feed

app.listen(PORT, DB_HOST, () => {
	console.log(`Listening on port ${PORT}, running on DB_HOST:${DB_HOST} in ${NODE_ENV} mode`);
});
