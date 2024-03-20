const http = require('http');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

// NODEJS HTTP SERVER WRAPS EXPRESS SERVER AND CONSUMES IT AS A LISTENER ARG
// IMPORTANT! STARTING AN EXPRESS SERVER LIKE THIS ENABLES NOT ONLY RESPONDING HTTP REQ VIA EXPRESS BUT ALSO UTILIZE WEB SOCKETS
const server = http.createServer(app);

(async () => await loadPlanetsData())();

server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
