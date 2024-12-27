const mongodb = require('mongodb');

// Create mongodb client instance
const MongoClient = mongodb.MongoClient;

const mongoConnect = async () => {
	// Connect to the database
	try {
		const client = await MongoClient.connect(
			`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASS}@shop.vs6wu.mongodb.net/?retryWrites=true&w=majority&appName=Shop`
		);
		console.log('Connected to MongoDB!');
		return client;
	} catch (err) {
		console.log(err);
	}
};

module.exports = mongoConnect;
