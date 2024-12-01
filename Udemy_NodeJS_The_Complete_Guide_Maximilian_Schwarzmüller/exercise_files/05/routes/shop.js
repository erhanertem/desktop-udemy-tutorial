const express = require('express');

// THIS IS A MINI EXPRESS APP TIOED TO MAIN APP ROUTER
const router = express.Router();

function html(strings, ...values) {
	return strings.reduce(
		(result, string, i) => result + string + (values[i] || ''),
		''
	);
}

router.get('/', (req, res, next) => {
	// console.log('In another middleware');
	res.send(html`<h1>Hello from Express!</h1>`);
});

module.exports = router;
