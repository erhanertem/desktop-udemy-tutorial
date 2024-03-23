const express = require('express');

const {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

// launchesRouter.get('/launches', httpGetAllLaunches);
// launchesRouter.post('/launches', httpAddNewLaunch);
// NOTE!! /launches BECOMES REPITATIVE. @app.js we can add this route to launcgesRouter middleware so that we do not need to specify it here.
launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.delete('/:id', httpAbortLaunch); // express param syntax ':'

module.exports = launchesRouter;
