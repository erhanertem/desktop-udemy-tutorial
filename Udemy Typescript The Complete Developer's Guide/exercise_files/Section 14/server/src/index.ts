import express from 'express';

import { router } from './routes/loginRoutes';

const app = express();

// Body parser in express
app.use(express.urlencoded({ extended: true }));
//
app.use(express.json());

app.use(router);

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
