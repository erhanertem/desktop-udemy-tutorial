import { html } from 'code-tag';
import { Request, Response } from 'express';

import { get, controller, post, bodyValidator } from './decorators/index';
// import { get } from './decorators/routes';
// import { controller } from './decorators/controller';

@controller('/auth')
class LoginController {
	@get('/login')
	// @use(logger)
	getLogin(_req: Request, res: Response): void {
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
	}

	@post('/login')
	@bodyValidator('email', 'password')
	postLogin(req: Request, res: Response) {
		const { email, password } = req.body;

		// GUARD CLAUSE
		if (email === 'e@e.com' && password === '1234') {
			// Mark this person as logged in
			req.session = { loggedIn: true };
			// Redirect the user to the root route
			res.redirect('/');
		} else res.send('Invalid email or password');
	}
}
// function logger(req: Request, res: Response, next: NextFunction): void {
// 	console.log('Request was made');
// 	next();
// 	return;
// }
