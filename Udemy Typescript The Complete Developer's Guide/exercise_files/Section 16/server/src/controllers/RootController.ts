import { html } from 'code-tag';

import { use, get, controller } from './decorators/index';
import { Request, Response, NextFunction } from 'express';

// Protected route handler middleware
function requireAuth(req: Request, res: Response, next: NextFunction): void {
	if (req.session?.loggedIn) {
		next();
		return;
	}
	res.status(403).send('Not permitted');
}

@controller('')
class RootController {
	@get('/')
	getRoot(req: Request, res: Response) {
		//Read req.session
		if (req.session?.loggedIn) {
			res.send(html`
				<div>
					<div>You are logged in</div>
					<a href="/auth/logout">Logout</a>
				</div>
			`);
		} else {
			res.send(html`
				<div>
					<div>You are not logged in</div>
					<a href="/auth/login">Login</a>
				</div>
			`);
		}
	}

	@get('/protected')
	@use(requireAuth)
	getProtected(req: Request, res: Response) {
		res.send('Welcome to protected route, logged in user');
	}
}
