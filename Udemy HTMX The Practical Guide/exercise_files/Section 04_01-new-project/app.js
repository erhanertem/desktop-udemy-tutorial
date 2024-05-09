import express from 'express';

import { html } from './prettierhtmx.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send(html`
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>Learn HTMX</title>
				<link rel="icon" href="/images/logo.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
				<link rel="stylesheet" href="/main.css" />
				<script src="/htmx.js" defer></script>
				<script src="/htmx-ext-response_target.js" defer></script>
			</head>
			<body>
				<main>
					<form
						hx-ext="response-targets"
						hx-post="/login"
						hx-headers='{"x-csrf-token": "abc"}'
						hx-target-422="#extra-information"
						hx-target-500="#server-side-error"
						hx-sync="this:replace"
					>
						<div>
							<img src="/images/auth-icon.jpg" alt="A lock icon" />
						</div>
						<div id="server-side-error"></div>
						<div class="control">
							<label for="email">Email</label>
							<input
								type="email"
								hx-post="/validate"
								hx-target="next p"
								hx-params="email_"
								hx-headers='{"x-csrf-token": "abc"}'
								autocomplete="username"
								name="email_"
								id="email"
							/>
							<p class="error"></p>
						</div>
						<div class="control">
							<label for="pwd">Password</label>
							<input
								type="password"
								hx-post="/validate"
								hx-target="next p"
								hx-params="pwd_"
								autocomplete="current-password"
								hx-headers='{"x-csrf-token": "abc"}'
								name="pwd_"
								id="pwd"
							/>
							<p class="error"></p>
						</div>
						<div id="extra-information"></div>
						<p>
							<button type="submit">Login</button>
						</p>
					</form>
				</main>
			</body>
		</html>
	`);
});

app.post('/validate', (req, res) => {
	console.log(req.body);
	if ('email_' in req.body && !req.body.email_.includes('@')) {
		return res.send(`
      E-Mail address is invalid.
    `);
	} else if ('email_' in req.body && req.body.email_.includes('@')) {
		return res.send();
	} else if ('pwd_' in req.body && req.body.pwd_.trim().length < 8) {
		return res.send(`
      Password must be at least 8 characters long.
    `);
	} else if ('pwd_' in req.body && req.body.pwd_.trim().length >= 8) {
		return res.send();
	}
	res.send();
});

app.post('/login', (req, res) => {
	const email = req.body.email_;
	const password = req.body.pwd_;

	let errors = {};

	if (!email || !email.includes('@')) {
		errors.email_ = 'Please enter a valid email address.';
	}

	if (!password || password.trim().length < 8) {
		errors.pwd_ = 'Password must be at least 8 characters long.';
	}

	if (Object.keys(errors).length > 0) {
		res.status(422).send(html`
			<div id="extra-information">
				<ul id="form-errors">
					${Object.keys(errors)
						.map((key) => html`<li>${errors[key]}</li>`)
						.join('')}
				</ul>
			</div>
		`);
	}

	// Simulate random server-side error
	// NOTE: WE DO NOT WANT TO DISPALY THIS ERROR MESSAGE @ TARGET hx-target="#extra-information" AS SHOWEN ON THE FORM ELEMENT. SO WE NEED RETARGETTING SPECIFICALLY HERE.
	if (Math.random() > 0) {
		// --> #1. Select the first element with 'control' class and override Target to this element.
		// -> #1. via nodejs method
		// res.setHeader('HX-Retarget', '.control');
		// -> #2. handle via response-targets extension
		// --> #2. Place it infront of the 'control' class element.
		// -> #1. via nodejs method
		// res.setHeader('HX-Reswap', 'beforebegin');
		// -> #2. Introduce a new element to target and swap - <div id="server-side-error"></div>
		return res
			.status(500)
			.send(
				html`<p class="error">
					A server-side error has occured. Please try again.
				</p>`
			);
	}

	// Once credentials validated, we redirect to authenticated endpoint
	// WARNING :  res.redirect('/authenticated'); --> NOT POSSIBLE THIS WAY!!!
	// -> Prep htmx to respond page redirect in the header
	res.setHeader('HX-Redirect', '/authenticated');
	// -> Initiate a redirect w/ the set HX-Redirect headerw embedded within the empty response object
	res.send();
});

app.get('/authenticated', (req, res) => {
	res.send(html`
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>Learn HTMX</title>
				<link rel="icon" href="/images/logo.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
				<link rel="stylesheet" href="/main.css" />
				<script src="/htmx.js" defer></script>
			</head>
			<body>
				<main>
					<h1>Authenticated!</h1>
				</main>
			</body>
		</html>
	`);
});

app.listen(3000);
