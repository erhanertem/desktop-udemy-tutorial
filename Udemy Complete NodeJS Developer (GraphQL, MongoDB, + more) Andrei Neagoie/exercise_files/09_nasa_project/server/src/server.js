const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;
const MONGO_URL =
  'mongodb+srv://eertem:vGKVAF5WMMchLEWe@nasacluster.uwkt9gn.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster';

// NODEJS HTTP SERVER WRAPS EXPRESS SERVER AND CONSUMES IT AS A LISTENER ARG
// IMPORTANT! STARTING AN EXPRESS SERVER LIKE THIS ENABLES NOT ONLY RESPONDING HTTP REQ VIA EXPRESS BUT ALSO UTILIZE WEB SOCKETS
const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
}); //WE CAN USE 'ONCE' INSTEAD OF 'ON' NODEJS EVENT EMITTER THAT WE KNOW IT EXECUTE ONLY ONCE IN ITS LIFETIME. ITS JUSYT BEING EXPLICIT ABOUT IT
mongoose.connection.on('error', (err) => {
  console.error(err);
}); //ERROR COULD BE THROWN MORE THAN ONCE, SO WE GO BY ON EVENT EMITTER FUNCTION

(async () => {
  await mongoose.connect(MONGO_URL);

  await loadPlanetsData();
  server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
})();
