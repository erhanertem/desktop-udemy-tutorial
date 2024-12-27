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
const Order = require('./models/order');
const OrderItem = require('./models/order-Item');

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

// Define the relationships between the models
// NOTE: In Sequelize, when defining many-to-many relationships, both sides of the relationship need to be explicitly defined to ensure Sequelize understands the relationship fully and generates the appropriate methods, fields, and queries for each side.
// User has one cart - Two way explicit statements
User.hasOne(Cart);
Cart.belongsTo(User);

// User has many orders
User.hasMany(Order);
Order.belongsTo(User);

// User has many products
User.hasMany(Product);
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' }); // Product belongs to a user - if user gets deleted then all products associated with the user will be deleted

// NOTE: By defining the junction associations below, Sequelize will automatically create the necessary foreign keys in the tables and provide the necessary methods to interact with the associated data. CartItem is a junction table to provide a many-to-many connection between Cart and Product - because a cart can have many products and a product can be in many carts

// Cart belongs to many Products through CartItem - Two way explicit statements
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

// Order belongs to many Products through OrderItem - Two way explicit statements
Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Order, { through: OrderItem });

/**
 *
For User: Represents users.

@ Cart:
1. Fetch User's Cart
getCart() – Fetch the cart associated with the user.
2. Replace User's Cart
setCart(cart) – Assign a cart to the user.
3. Create User's Cart
createCart(cartData) – Create a cart and associate it with the user.
@ Products:
1. Fetch User's Products:
getProducts() – Fetch all products created/owned by the user.
2. Add Products to User
addProduct(product) – Associate a product with the user.
addProducts(products) – Associate multiple products with the user.
3. Replace User's Products
setProducts(products) – Replace the user's current products with the given ones.
4. Delete Products from User
removeProduct(product) – Remove the association of a product with the user.
5. Create and Add Product to User
createProduct(productData) – Create a new product and associate it with the user.
6. Check if User has a Product
hasProduct(product) – Check if a specific product is associated with the user.
hasProducts(products) – Check if multiple products are associated with the user.

**************************

For Cart: Represents shopping carts, associated with users.
Cart and Product: Many-to-Many relationship through the CartItem model.

@ User:
getUser() – Fetch the user associated with the cart.
setUser(user) – Assign a user to the cart.
@ Products:
getProducts() – Fetch all products in the cart.
addProduct(product, { through: { quantity } }) – Add a product to the cart with a specific quantity.
addProducts(products) – Add multiple products to the cart.
setProducts(products) – Replace all products in the cart with the given ones.
removeProduct(product) – Remove a specific product from the cart.
hasProduct(product) – Check if a specific product is in the cart.
countProducts() – Count the total products in the cart.

**************************

For Product: Represents products available for purchase.

@ User:
getUser() – Fetch the user associated with the product (the creator/owner).
setUser(user) – Assign a user as the owner of the product.
@Carts:
getCarts() – Fetch all carts containing the product.
addCart(cart) – Add the product to a specific cart.
setCarts(carts) – Associate the product with multiple carts.
removeCart(cart) – Remove the product from a specific cart.
hasCart(cart) – Check if a specific cart contains the product.

**************************

For Order: Represents orders placed by users.
NOTE: Order and Product: Many-to-Many relationship through the OrderItem model.

@Product:
getProducts() - Fetches all products associated with the order
addProduct(product) - Associates a product with the order. Can include additional data like quantity in the junction
removeProduct(product) - Removes the association between a product and the order
setProducts(products) - Replaces all associated products for the order
hasProduct(product) - Checks if a specific product is associated with the order
*/

// Sync/create all sequelize related tables prior to starting server
sequelize
	// // NOTE: The sequelize.sync({ force: true }) option in Sequelize is primarily used during development to drop and recreate the database tables based on your models. Here’s a detailed explanation:
	// .sync({ force: true }) // For developement only
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
		return user.createCart();
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
