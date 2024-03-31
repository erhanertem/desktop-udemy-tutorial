const launches = require('./launches.mongo');
const planets = require('./planets.mongo');

// const launches = new Map();

// let latestFlightNumber = 100;
const DEFAULT_FLIGHT_NUMBER = 100;

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

// launches.set(launch.flightNumber, launch);
saveLaunch(launch);

async function saveLaunch(launch) {
  // GUARD CLAUSE - checking referential integrity - aka.SQL foreign key
  const planet = await planets.findOne({ keplerName: launch.target });
  if (!planet) {
    throw new Error('No matching planet found'); //Built-in generic JS and node Error class
  }

  // VERY IMPORTANT!! WE REPLACED UPDATEONE WITH FINDONEANDUPDATE SINCE IT WAS RETURNING EXTRA INFORMATION ON RESPONSE TRIGGERED DUE TO SETTING UPSERT:TRUE OPTION.
  await launches.findOneAndUpdate(
    {
      flightNumber: launch.flightNumber,
    }, // filter object
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

async function addNewLaunch(launch) {
  const nextFlightNumber = (await getLatestFlightNumber()) + 1;

  const newLaunch = Object.assign(launch, {
    success: true,
    upcoming: true,
    customers: ['Zero To Mastery', 'NASA'],
    flightNumber: nextFlightNumber,
  });

  await saveLaunch(newLaunch);
}
// function addNewLaunch(launch) {
//   latestFlightNumber++;
//   launches.set(
//     latestFlightNumber,
//     Object.assign(launch, {
//       upcoming: true,
//       customers: ['Zero To Mastery', 'NASA'],
//       flightNumber: latestFlightNumber,
//     })
//   );
// }

async function existsLaunchWithId(launchId) {
  return await launches.findOne({ flightNumber: launchId });
}

async function getLatestFlightNumber() {
  const latestLaunch = await launches.findOne().sort('-flightNumber');

  // GUARD CLAUSE
  if (!latestLaunch) {
    return DEFAULT_FLIGHT_NUMBER;
  }

  return latestLaunch.flightNumber;
}

async function abortLaunchById(launchId) {
  // VERY IMPORTANT!! WE HAVE USED UPDATEONE HERE INSTEAD OF FINDONEANDUPDATE AS WE ARE NOT USING UPSERT:TRUE OPTIONAL SETTING. MOREOVER, UPDATEONE IS REQUIRED AS WE ARE FIST CHECKING IF LAUNCH EXISTS IN HTTPABORTLAUNCH @ LAUNCHES CONTROLLER. IF ANYTHING GOT DELETED IN BETWEEN, UPDATEONE WILL NOT CREATE A NEW ENTRY AS ITS NOT AN UPSERT OPERATION
  const abortedLaunch = await launches.updateOne(
    { flightNumber: launchId },
    { upcoming: false, success: false }
  );
  /*
	Returned abortedLaunch object:
	{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
  }
	*/
  return abortedLaunch.modifiedCount === 1;
  // // launches.delete(launchId);
  // // INSTEAD OF DELETING THE LAUNCH WE MARK IT AS ABORTED
  // const abortedLaunch = launches.get(launchId);
  // abortedLaunch.upcoming = false;
  // abortedLaunch.success = false;
  // return abortedLaunch;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
};
