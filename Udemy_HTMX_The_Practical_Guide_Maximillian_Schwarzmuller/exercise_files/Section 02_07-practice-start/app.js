import express from 'express';

/**
 * html wrapper is needed for prettier formatting
 */
const html = String.raw;

const courseGoals = [];

function renderGoalListItem(id, text) {
	return html` <li id="goal-${id}">
		<span>${text}</span>
		<button
			hx-delete="/goals/${id}"
			hx-target="closest li"
			hx-confirm="Are you sure?"
		>
			Remove
		</button>
	</li>`;
	// return html` <li id="goal-${id}">
	// 	<span>${text}</span>
	// 	<button hx-delete="/goals/${id}" hx-target="#goal-${id}">Remove</button>
	// </li>`;
}

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
				<link rel="stylesheet" href="/main.css" />
				<script src="/htmx.js" defer></script>
			</head>
			<body>
				<main>
					<h1>Manage your course goals</h1>
					<section>
						<form
							id="goal-form"
							hx-post="/goals"
							hx-target="#goals"
							hx-swap="beforeend"
							hx-on::after-request="this.reset()"
							hx-disabled-elt="form button"
						>
							<div>
								<label htmlFor="goal">Goal</label>
								<input type="text" id="goal" name="goal" />
							</div>
							<button type="submit">Add goal</button>
						</form>
					</section>
					<section>
						<ul id="goals" hx-swap="outerHTML">
							${courseGoals
								.map((goal) => renderGoalListItem(goal.id, goal.text))
								.join('')}
						</ul>
					</section>
				</main>
			</body>
		</html>
	`);
});

app.post('/goals', (req, res) => {
	const goalText = req.body.goal;
	const id = new Date().getTime().toString(); //should be saved in a string as req.params.id returns a string
	courseGoals.push({ id: id, text: goalText });
	// Simulate a slower backend to test hx-on::after-request="this.reset()" applied @ the form element
	setTimeout(() => {
		res.send(renderGoalListItem(id, goalText));
	}, 4000);
});

app.delete('/goals/:id', (req, res) => {
	const id = req.params.id; //Received as a String type
	const index = courseGoals.findIndex((goal) => goal.id === id);
	courseGoals.splice(index, 1);
	res.send(); //Sends empty object to the targetted element to erase it essentially
});

app.listen(3000);
