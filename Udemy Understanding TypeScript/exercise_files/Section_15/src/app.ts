import express from 'express';
// import { json } from 'body-parser';

import todoRoutes from './routes/todos';

const app = express();

// // -> Alt#1: Run body-parser for converting json responses
// app.use(json());
// -> Alt#2 Express built-in body parser
app.use(express.json());

// Handle todos Route endpoint
app.use('/todos', todoRoutes);

// Error handling middleware
app.use(
	(
		err: Error,
		req: express.Request,
		res: express.Response,
		next: express.NextFunction,
	) => {
		res.status(500).json({ message: err.message });
	},
);

app.listen(3000);
