// const path = require('path');
const express = require('express');

// const rootDir = require('../util/path');
// THIS IS A MINI EXPRESS APP TIOED TO MAIN APP ROUTER
const router = express.Router();

const { products } = require('./admin');

router.get('/', (req, res, next) => {
	console.log(products);
	// SERVE STATIC HTML FILE CONTENT
	// res.sendFile(path.join(rootDir, 'views', 'shop.html'));
	// SERVE DYNAMIC HTML TEMPLATE FILE BASED ON DEFAULT TEMPLATE ENGINE
	// w/ PUG
	res.render('shop', {
		prods: products,
		pageTitle: 'My Shop',
		hasProducts: products.length > 0,
		path: '/',
		pathRoot: true,
		styles: '<link rel="stylesheet" href="/css/main.css" ><link rel="stylesheet" href="/css/forms.css" >',
	});
});

module.exports = router;
