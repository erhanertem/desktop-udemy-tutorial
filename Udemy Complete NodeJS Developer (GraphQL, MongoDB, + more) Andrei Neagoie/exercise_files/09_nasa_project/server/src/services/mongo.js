const mongoose = require("mongoose");

require("dotenv").config(); // NOTE: USE THE CONFIGURATION, IF SERVER IS NOT RUN BUT A TEST IS MADE

const MONGO_URL = process.env.MONGO_URL;

// > MONGOOSE EVENT LISTENERS
mongoose.connection.once("open", () => {
	console.log("MongoDB connection ready!");
}); //WE CAN USE 'ONCE' INSTEAD OF 'ON' NODEJS EVENT EMITTER THAT WE KNOW IT EXECUTE ONLY ONCE IN ITS LIFETIME. ITS JUSYT BEING EXPLICIT ABOUT IT
mongoose.connection.on("error", (err) => {
	console.error(err);
}); //ERROR COULD BE THROWN MORE THAN ONCE, SO WE GO BY ON EVENT EMITTER FUNCTION

// > ESTABLISH MONGO CONNECTION BASED ON URL
async function mongoConnect() {
	await mongoose.connect(MONGO_URL);
}
// > ESTABLISH MONGO DISCONNECTION
async function mongoDisconnect() {
	await mongoose.disconnect();
}

module.exports = {
	mongoConnect,
	mongoDisconnect,
};
