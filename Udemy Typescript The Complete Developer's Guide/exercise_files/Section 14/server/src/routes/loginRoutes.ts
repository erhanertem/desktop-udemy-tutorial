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

		if (email !== undefined) {
			res.status(200).send(email.toUpperCase());
		} else res.send('You must provide an email property');
	},
);

export { router };
