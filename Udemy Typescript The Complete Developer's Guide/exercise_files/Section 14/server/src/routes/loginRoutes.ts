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
router.post('/login', (req: Request, res: Response) => {
	const { email, password } = req.body;
	res.send(email + password);
});

export { router };
