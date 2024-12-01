const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

function html(strings, ...values) {
	return strings.reduce(
		(result, string, i) => result + string + (values[i] || ''),
		''
	);
}

// Middleware to parse application/x-www-form-urlencoded data (expressjs)
app.use(express.urlencoded({ extended: false }));
// Middleware to parse application/json data (expressjs)
app.use(express.json());

// EXPRESSJS MIDDLEWARE
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((err, req, res, next) => {
	// RESPOND INVALID/MALFORNED JSON REQ BODY
	console.log(err);
	if (err) {
		res.status(400).send('Invalid Request Body');
	}

	// RESPOND NON-EXISTING ROUTES`
	res.status(404).send(html`<h1>Page not found</h1>`);
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
