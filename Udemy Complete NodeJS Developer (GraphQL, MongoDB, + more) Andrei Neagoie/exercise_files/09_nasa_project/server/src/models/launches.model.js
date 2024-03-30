const launches = require('./launches.mongo');

// const launches = new Map();

// let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customers: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

saveLaunch(launch);

// launches.set(launch.flightNumber, launch);

async function saveLaunch(launch) {
  await launches.updateOne(
    {
      flightNumber: launch.flightNumber,
    }, //if it does not exist here does not do anything unless upsert is marked true on options object
    launch, //if the preceding data exists here is the data to update with
    { upsert: true } //allow upserting
  );
}

async function getAllLaunches() {
  return await launches.find(
    {}, //select all
    { _id: 0, __v: 0 } //projection argument for exclusion
  );
  // return Array.from(launches.values()); //Transforms map array into an array
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      upcoming: true,
      customers: ['Zero To Mastery', 'NASA'],
      flightNumber: latestFlightNumber,
    })
  );
}

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}
function abortLaunchById(launchId) {
  // launches.delete(launchId);
  // INSTEAD OF DELETING THE LAUNCH WE MARK IT AS ABORTED
  const abortedLaunch = launches.get(launchId);
  abortedLaunch.upcoming = false;
  abortedLaunch.success = false;
  return abortedLaunch;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
};
