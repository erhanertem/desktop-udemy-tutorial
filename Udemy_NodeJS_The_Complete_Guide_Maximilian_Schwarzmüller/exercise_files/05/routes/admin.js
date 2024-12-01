const express = require('express');

// THIS IS A MINI EXPRESS APP TIOED TO MAIN APP ROUTER
const router = express.Router();

function html(strings, ...values) {
	return strings.reduce(
		(result, string, i) => result + string + (values[i] || ''),
		''
	);
}

// > THIS MIDDLEWARE ONLY RUNS @ /add-product ROUTE AND STOPS FURTHER EXECUTION
router.get('/add-product', (req, res, next) => {
	// console.log('In another middleware');
	res.send(
		html`<h1>Add product</h1>
			<form
				action="/admin/add-product"
				method="POST"
			>
				<input
					type="text"
					name="title"
				/><button type="submit">Add Product</button>
			</form>`
	);
});

router.post('/add-product', (req, res, next) => {
	console.log(req.body);

	res.redirect('/'); // Redirect from /add-product to / route
});

module.exports = router;
