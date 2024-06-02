import { html } from 'code-tag';
import { Router, Request, Response } from 'express';

const router = Router();

// When hit this endpoint, provide this layout
router.get('/login', (req: Request, res: Response) => {
	res.send(html`
		<form method="POST">
			<div>
				<label>Email</label>
				<input name="email" />
			</div>
			<div>
				<label>Password</label>
				<input name="password" type="password" />
			</div>
			<button>Submit</button>
		</form>
	`);
});

// When hit post request on this end point, do....

interface HttpBody extends Request {
	body: {
		[key: string]: string | undefined;
	};
}

router.post(
	'/login',
	(
		// Manupulate type definition provided
		req: HttpBody,
		res: Response,
	) => {
		const { email, password } = req.body;

		// GUARD CLAUSE
		if (email && password && email === 'e@e.com' && password === '1234') {
			// Mark this person as logged in
			req.session = { loggedIn: true };
			// Redirect the user to the root route
			res.redirect('/');
		} else res.send('Invalid email or password');
	},
);

router.get('/', (req: Request, res: Response) => {
	//Read req.session
	if (req.session?.loggedIn) {
		res.send(html`
			<div>
				<div>You are logged in</div>
				<a href="/logout">Logout</a>
			</div>
		`);
	} else {
		res.send(html`
			<div>
				<div>You are not logged in</div>
				<a href="/login">Login</a>
			</div>
		`);
	}
});

router.get('/logout', (req: Request, res: Response) => {
	// Reset cookiesession
	req.session = undefined;
	// Redirect to root route
	res.redirect('/');
});
export { router };
