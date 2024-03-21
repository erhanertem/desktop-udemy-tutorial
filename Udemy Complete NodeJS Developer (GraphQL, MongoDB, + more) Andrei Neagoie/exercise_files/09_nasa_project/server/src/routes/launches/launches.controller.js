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

  //GUARD CLAUSE - REQUIRED INPUTS VALIDATION
  // If any of these properties missing, we don not wish to register this input and send 4xx CLIENT induced error
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.destination
  ) {
    return res.status(400).json({ error: 'Missing required launch property' });
  }

  launch.launchDate = new Date(launch.launchDate);
  // GUARD CLAUSE - DATE VALIDATION
  // Option #1 - Check if entry is a date
  // Explanation: Invalid date returns date.valueOf() as NaN. If isNaN checks true, its an invalid date, else it returns a UNISYS number of date which renders isNaN false.
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({ error: 'Invalid launch date' });
  }
  // // Option #2 - Check if entry is a date
  // const date = new Date("Jan 121212, 2000") is an invalid entry and date.valueOf() returns Invalid Date response object.
  // if (launch.launchDate.toString() === 'Invalid Date') {
  //   return res.status(400).json({ error: 'Invalid launch date' });
  // }

  addNewLaunch(launch);

  res.status(201).json(launch);
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch };
