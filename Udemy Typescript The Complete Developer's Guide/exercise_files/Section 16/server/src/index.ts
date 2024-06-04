import express from 'express';
import cookieSession from 'cookie-session';

import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

// Body parser in express
app.use(express.urlencoded({ extended: true }));
// Resolves received json responses
app.use(express.json());
// Like req.body, req.session property is provided via cookiesession middleware
app.use(cookieSession({ keys: ['erhanertem'] }));

app.use(AppRouter.getInstance());

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
