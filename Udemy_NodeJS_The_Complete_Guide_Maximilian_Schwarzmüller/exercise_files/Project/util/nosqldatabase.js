// Alt#1
// const mongodb = require('mongodb');
// // Create mongodb client instance
// const MongoClient = mongodb.MongoClient;

// Alt#2
const { MongoClient } = require('mongodb');

let _db; // Private variable to hold the database instance

const mongoConnect = async () => {
	if (_db) {
		console.log('Reusing existing database connection.');
		return _db; // Return the existing database instance
	}

	// Connect to the database
	try {
		const client = await MongoClient.connect(
			`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASS}@shop.vs6wu.mongodb.net/?retryWrites=true&w=majority&appName=Shop`
		);
		console.log('Connected to MongoDB!');
		// Store the database instance
		_db = client.db();
		return _db;
	} catch (err) {
		console.error('Failed to connect to MongoDB:', err);
		throw err; // Bubble up the error for handling
	}
};

// Singleton DB instance getter function
const getDb = () => {
	// Enforce mongoConnect be called before calling DB methods
	if (!_db) {
		throw new Error('Database not initialized!');
	}
	return _db;
};

module.exports = { mongoConnect, getDb };
