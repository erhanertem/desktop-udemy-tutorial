import { html } from 'code-tag';
import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

// When hit post request on this end point, do....
interface HttpBody extends Request {
	body: {
		[key: string]: string | undefined;
	};
}

// Protected route handler middleware
function requireAuth(req: Request, res: Response, next: NextFunction): void {
	if (req.session?.loggedIn) {
		next();
		return;
	}
	res.status(403).send('Not permitted');
}

router.get('/protected', requireAuth, (req: Request, res: Response) => {
	res.send('Welcome to protected route, logged in user');
});

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
