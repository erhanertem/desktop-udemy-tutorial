const express = require('express');

// > IMPORT ROUTERS
const planetsRouter = require('./planets/planets.router');
const launchesRouter = require('./launches/launches.router');

// > CREATE CUSTOM API ROUTER
const api = express.Router();

// > FLEXIBLE API VERSIONING
api.use('/planets', planetsRouter);
api.use('/launches', launchesRouter);

module.exports = api;
