const mongoose = require('mongoose');

const MONGO_URL =
  'mongodb+srv://eertem:vGKVAF5WMMchLEWe@nasacluster.uwkt9gn.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster';

// > MONGOOSE EVENT LISTENERS
mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
}); //WE CAN USE 'ONCE' INSTEAD OF 'ON' NODEJS EVENT EMITTER THAT WE KNOW IT EXECUTE ONLY ONCE IN ITS LIFETIME. ITS JUSYT BEING EXPLICIT ABOUT IT
mongoose.connection.on('error', (err) => {
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
