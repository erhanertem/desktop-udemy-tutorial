// Alt#1
// const mongodb = require('mongodb');
// // Create mongodb client instance
// const MongoClient = mongodb.MongoClient;

// Alt#2
const { MongoClient } = require('mongodb');

let _db; // Private variable to hold the database instance

const mongoConnect = async () => {
	// Use existing database if there is connection to db
	if (_db) {
		console.log('Reusing existing database connection.');
		return _db; // Return the existing database instance
	}

	// Connect to the database if there is no connection to db
	try {
		const client = await MongoClient.connect(
			`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASS}@shop.vs6wu.mongodb.net/shop?retryWrites=true&w=majority`
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

// // -> Solution #1 - Singleton DB instance getter : requires getDb method called @ place where db access is required then execute mongodb methods cordially.
// const getDb = () => {
// 	if (!_db) {
// 		throw new Error('Database not initialized. Call mongoConnect() first.');
// 	}
// 	return _db;
// };
// module.exports = { mongoConnect, getDb };

// -> Solution #2 - Singleton DB instance getter w/ IIFE Lazy-loading
const db = (() => {
	return () => {
		// Enforce mongoConnect be called before calling DB methods
		if (!_db) {
			throw new Error('Database not initialized! Call mongoConnect() first.');
		}
		return _db;
	};
})();

module.exports = { mongoConnect, db };
