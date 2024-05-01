import express from 'express';

import { HTMX_KNOWLEDGE } from './data/htmx-info.js';

/**
 * html wrapper is needed for prettier formatting
 */
const html = String.raw;

const app = express();

// request.body receives form-input-name attributes -> <input ... name="note" /> accessed as const enteredNote = req.body.note;
app.use(express.urlencoded({ extended: false }));
// Serves files as public treated root
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send(html`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTMX Essentials</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/icon.png" />
				<link rel="stylesheet" href="/main.css" />
				<script src="/htmx.js" defer></script>
			</head>
			<body>
				<header id="main-header">
					<img src="/htmx-logo.jpg" alt="HTMX Logo" />
					<h1>Essentials</h1>
				</header>

				<main>
					<p>
						HTMX is a JavaScript library that you use without writing
						JavaScript code.
					</p>
					<form hx-post="/note" hx-target="ul" hx-swap="outerHTML">
						<p>
							<label for="note">Your note</label>
							<input type="text" id="note" name="note" />
						</p>
						<p>
							<button>Save Note</button>
						</p>
					</form>
					<ul>
						${HTMX_KNOWLEDGE.map((info) => `<li>${info}</li>`).join('')}
					</ul>
				</main>
			</body>
		</html>
	`);
});

app.post('/note', (req, res) => {
	const enteredNote = req.body.note;
	HTMX_KNOWLEDGE.unshift(enteredNote);
	// res.redirect('/'); // IMPORTANT!! We can't just redirect to the homepage again as it would render it twice one over another, but we should return a fragment from the location its been called and rebuild the entire list @ the targeted page element
	res.send(html`
		<ul>
			${HTMX_KNOWLEDGE.map((info) => `<li>${info}</li>`).join('')}
		</ul>
	`);
});

app.listen(3000);
