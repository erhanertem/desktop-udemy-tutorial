import { html } from 'code-tag';
import { NextFunction, Request, Response } from 'express';

import { get, controller, use } from './decorators/index';
// import { get } from './decorators/routes';
// import { controller } from './decorators/controller';

@controller('/auth')
class LoginController {
	@get('/login')
	@use(logger)
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
}

function logger(req: Request, res: Response, next: NextFunction): void {
	console.log('Request was made');
	next();
	return;
}
