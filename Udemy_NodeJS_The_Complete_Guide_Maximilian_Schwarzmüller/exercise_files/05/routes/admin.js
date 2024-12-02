const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
// THIS IS A MINI EXPRESS APP TIOED TO MAIN APP ROUTER
const router = express.Router();

function html(strings, ...values) {
	return strings.reduce((result, string, i) => result + string + (values[i] || ''), '');
}

// > THIS MIDDLEWARE ONLY RUNS @ /add-product ROUTE AND STOPS FURTHER EXECUTION
// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
	// SERVE STATIC HTML FILE CONTENT
	// // SPECIFY FOLDER MANUALLY
	// res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
	// SPECIFY FOLDER AUTOMATICALLY
	res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// POST /admin/add-product
router.post('/add-product', (req, res, next) => {
	console.log(req.body);

	res.redirect('/'); // Redirect from /add-product to / route
});

module.exports = router;
