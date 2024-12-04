const path = require('path');

const express = require('express');

const app = express();

// Desiginate a template engine to use
app.set('view engine', 'ejs');
// Tell where the template engine files are located
app.set('views', path.join(__dirname, 'views'));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

// Middleware to parse application/x-www-form-urlencoded data (expressjs)
app.use(express.urlencoded({ extended: true }));
// Middleware to parse application/json data (expressjs)
app.use(express.json());

// Serve static content folder
app.use(express.static(path.join(__dirname, 'public')));

// EXPRESSJS MIDDLEWARE
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// ERROR HANDLING
// > 404 Middleware for non-existent routes
app.use(errorController.get404);

// > Error-handling middleware
app.use(errorController.get500);

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
