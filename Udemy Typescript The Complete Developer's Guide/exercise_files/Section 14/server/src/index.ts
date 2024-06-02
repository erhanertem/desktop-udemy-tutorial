import { html } from 'code-tag';

import express, { Request, Response } from 'express';

import { router } from './routes/LoginRoutes';

const app = express();

app.use(router);
// app.get('/', (req: Request, res: Response) => {
// 	res.send(html`
// 		<div>
// 			<h1>Hi there!</h1>
// 		</div>
// 	`);
// });

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
