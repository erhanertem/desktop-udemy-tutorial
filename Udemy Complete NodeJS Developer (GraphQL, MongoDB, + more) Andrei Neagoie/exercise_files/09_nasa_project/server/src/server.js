const http = require('http');

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchesData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

// NODEJS HTTP SERVER WRAPS EXPRESS SERVER AND CONSUMES IT AS A LISTENER ARG
// IMPORTANT! STARTING AN EXPRESS SERVER LIKE THIS ENABLES NOT ONLY RESPONDING HTTP REQ VIA EXPRESS BUT ALSO UTILIZE WEB SOCKETS
const server = http.createServer(app);

(async () => {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchesData();

  server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
})();
