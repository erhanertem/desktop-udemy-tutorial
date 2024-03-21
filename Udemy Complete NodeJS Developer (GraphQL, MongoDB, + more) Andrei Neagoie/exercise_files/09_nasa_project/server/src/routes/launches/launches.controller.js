// const { launches } = require('../../models/launches.model');

// function getAllLaunches(_req, res) {
//   return res.status(200).json(Array.from(launches.values()));
// }
// NOTE: WE DO WANT SEPERATION OF CONCERN. THESE FUNCTIONS SHOULD BE PURE AND FREE OF ANY DATA PREP

const { getAllLaunches, addNewLaunch } = require('../../models/launches.model');

function httpGetAllLaunches(_req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  //NOTE!! since @app we have used  express.json() MIDDLEWARE , any incoming req body is parsed to JS object that we can make use of.
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);
  addNewLaunch(launch);

  res.status(201).json(launch);
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch };
