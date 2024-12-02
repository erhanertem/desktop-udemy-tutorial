const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
// THIS IS A MINI EXPRESS APP TIOED TO MAIN APP ROUTER
const router = express.Router();

const { products } = require('./admin');

function html(strings, ...values) {
	return strings.reduce((result, string, i) => result + string + (values[i] || ''), '');
}

router.get('/', (req, res, next) => {
	console.log(products);
	// SERVE STATIC HTML FILE CONTENT
	res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
