// const { launches } = require('../../models/launches.model');

// function getAllLaunches(_req, res) {
//   return res.status(200).json(Array.from(launches.values()));
// }
// NOTE: WE DO WANT SEPERATION OF CONCERN. THESE FUNCTIONS SHOULD BE PURE AND FREE OF ANY DATA PREP

const { getAllLaunches } = require('../../models/launches.model');

function httpGetAllLaunches(_req, res) {
  return res.status(200).json(getAllLaunches());
}

module.exports = { httpGetAllLaunches };
