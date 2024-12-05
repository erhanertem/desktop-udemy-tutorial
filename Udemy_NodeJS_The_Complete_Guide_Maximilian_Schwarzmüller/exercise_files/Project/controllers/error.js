const html = require('../util/html');

exports.get404 = (req, res, next) => {
	res.render('errors/404', {
		pageTitle: 'Page Not Found',
		layout: false,
		path: '',
		styles: '<link rel="stylesheet" href="/css/main.css" >',
	});
};

exports.get500 = (err, req, res, next) => {
	console.error(err.stack); // Log the error

	// Check for specific errors, like JSON parsing issues
	if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
		return res.status(400).send(html`
			<html>
				<head>
					<title>Error</title>
				</head>
				<body>
					<h1>Invalid Request Body</h1>
					<p>You will be redirected shortly...</p>
					<script>
						setTimeout(() => {
							window.location.href = '/';
						}, 1500);
					</script>
				</body>
			</html>
		`);
	}

	res.status(500).send('Internal Server Error'); // Generic error response
};
