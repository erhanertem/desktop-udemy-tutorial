const path = require('path');
const express = require('express');

const app = express();

function html(strings, ...values) {
	return strings.reduce((result, string, i) => result + string + (values[i] || ''), '');
}

// Desiginate a template engine to use
app.set('view engine', 'ejs');
// Tell where the template engine files are located
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse application/x-www-form-urlencoded data (expressjs)
app.use(express.urlencoded({ extended: true }));
// Middleware to parse application/json data (expressjs)
app.use(express.json());

const userNames = [];

app.get('/', (req, res, next) => {
	res.render('form', {
		pageTitle: 'User Name Submission Form',
		enableLink: false,
		background: '#7c8679',
	});
});

app.post('/', (req, res, next) => {
	if (!req.body.username) {
		return res.status(400).send(
			html`
				<html>
					<head>
						<title>Error</title>
					</head>
					<body>
						<h1>Username is required</h1>
						<p>You will be redirected shortly...</p>
						<script>
							setTimeout(() => {
								window.location.href = '/';
							}, 1500); // 3 seconds delay
						</script>
					</body>
				</html>
			`
		);
	}
	userNames.push(req.body.username);

	res.redirect('/users');
});

app.get('/users', (req, res, next) => {
	res.render('userlist', {
		pageTitle: 'User List View',
		enableLink: true,
		users: userNames,
	});
});

// Error Handling
// Non-exisitng path error handling
app.use((req, res, next) => {
	res.render('404', {
		enableLink: true,
		pageTitle: 'Page Not Found',
	});
});
// Generic Server error handling
app.use((err, req, res, next) => {
	console.error(err.stack);

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
						}, 1500); // 3 seconds delay
					</script>
				</body>
			</html>
		`);
	}

	res.status(500).send('Internal server error');
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
