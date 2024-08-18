const express = require('express');

const { httpGetAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

// planetsRouter.get('/planets', httpGetAllPlanets);
// NOTE!! /planets BECOMES REPITATIVE. @app.js we can add this route to planetsRouter middleware so that we do not need to specify it here.
planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;
