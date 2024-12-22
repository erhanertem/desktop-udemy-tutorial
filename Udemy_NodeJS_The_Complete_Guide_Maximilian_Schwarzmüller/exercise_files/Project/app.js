const path = require('path');

const dotenv = require('dotenv');
// Load appropriate .env file based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(__dirname, envFile) });

const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

// Read the sequeilize DB instance
const sequelize = require('./util/sqldatabase');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

// Middleware to parse application/x-www-form-urlencoded data (expressjs)
app.use(express.urlencoded({ extended: true }));
// Middleware to parse application/json data (expressjs)
app.use(express.json());

// Desiginate a template engine to use
app.set('view engine', 'ejs');
// Tell where the template engine files are located
app.set('views', path.join(__dirname, 'views'));

// Serve static content folder
app.use(express.static(path.join(__dirname, 'public')));

// EXPRESSJS MIDDLEWARE
// Manage a dummy user till authentication is established
app.use((req, res, next) => {
	User.findByPk(1)
		.then((user) => {
			req.user = user;
			next();
		})
		.catch((err) => console.log(err));
});
// Express Routers
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// ERROR HANDLING
// > 404 Middleware for non-existent routes
app.use(errorController.get404);

// > Error-handling middleware
app.use(errorController.get500);

// Setup table associations
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
Cart.belongsTo(User);
// CartItem is a junction table to provide a many-to-many connection between Cart and Product
// NOTE: In Sequelize, when defining many-to-many relationships, both sides of the relationship need to be explicitly defined to ensure Sequelize understands the relationship fully and generates the appropriate methods, fields, and queries for each side.
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
User.hasOne(Cart);
User.hasMany(Product);

// Sync/create all sequelize related tables prior to starting server
sequelize
	// // NOTE: The sequelize.sync({ force: true }) option in Sequelize is primarily used during development to drop and recreate the database tables based on your models. Here’s a detailed explanation:
	// .sync(
	// 	{ force: true } // For developement only
	// )
	.sync() // For production
	.then((result) => User.findByPk(1))
	.then((user) => {
		// GUARD CLAUSE
		if (!user) {
			return User.create({ name: 'Erhan', email: 'e@e.com' });
		}
		return user;
	})
	.then((user) => {
		// Create a Cart instance for the user via Sequelize magic functions created for each user instance based on user-cart association
		user.createCart();
	})
	.then((cart) => {
		app.listen(process.env.PORT, process.env.DB_HOST, () => {
			console.log(
				`Listening on port ${process.env.PORT}, running on DB_HOST:${process.env.DB_HOST} in ${
					process.env.NODE_ENV || 'development'
				} mode`
			);
		});
	})
	.catch((err) => console.log(err));
