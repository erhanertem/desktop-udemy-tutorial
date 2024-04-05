const axios = require("axios");

const launches = require("./launches.mongo");
const planets = require("./planets.mongo");

// const launches = new Map();

// let latestFlightNumber = 100;
const DEFAULT_FLIGHT_NUMBER = 100;

// const launch = {
// 	flightNumber: 100, // Corresponds to flight_number in SpaceX DB
// 	mission: "Kepler Exploration X", // Corresponds to name in SpaceX DB
// 	rocket: "Explorer IS1", // Corresponds to rocket.name in SpaceX DB
// 	launchDate: new Date("December 27, 2030"), // Corresponds to date_local in SpaceX DB
// 	target: "Kepler-442 b", // Corresponds to N/A in SpaceX DB
// 	customers: ["ZTM", "NASA"], // Corresponds to payload.customers for each payload arr object in SpaceX DB
// 	upcoming: true, // Corresponds to upcoming in SpaceX DB
// 	success: true, // Corresponds to success in SpaceX DB
// };

// // launches.set(launch.flightNumber, launch);
// saveLaunch(launch);

async function saveLaunch(launch) {
	// VERY IMPORTANT!! WE REPLACED UPDATEONE WITH FINDONEANDUPDATE SINCE IT WAS RETURNING EXTRA INFORMATION ON RESPONSE TRIGGERED DUE TO SETTING UPSERT:TRUE OPTION.
	await launches.findOneAndUpdate(
		{
			flightNumber: launch.flightNumber,
		}, // filter object
		launch, //if the preceding data exists here is the data to update with
		{ upsert: true } //allow upserting
	);
}

const SPACEX_API_URL = "https://api.spacexdata.com/v4/launches/query";

async function populateLaunches() {
	console.log("DOWNLOADING DATA...");
	const response = await axios.post(SPACEX_API_URL, {
		query: {},
		options: {
			pagination: false,
			populate: [
				{
					path: "rocket",
					select: {
						name: 1,
					},
				},
				{
					path: "payloads",
					select: {
						customers: 1,
					},
				},
			],
		},
	});

	if (response.status !== 200) {
		console.log("Problem downloading launch data");
		throw new Error("Launch data download failed");
	}

	// console.log(response);
	const launchDocs = response.data.docs;
	// console.log(launchDocs);
	for (const launchDoc of launchDocs) {
		// Prepare the array of customers for each launch object retrieved from its payloads key
		const payloads = launchDoc["payloads"];
		const customers = payloads.flatMap((payload) => {
			return payload["customers"];
		});

		// > MAP SPACEX API RESPONSES TO LAUNCH OBJECT
		const launch = {
			flightNumber: launchDoc["flight_number"],
			mission: launchDoc["name"],
			rocket: launchDoc["rocket"]["name"],
			launchDate: launchDoc["date_local"],
			upcoming: launchDoc["upcoming"],
			success: launchDoc["success"],
			customers,
		};
		// console.log(`${launch.flightNumber} ${launch.mission}`);
		await saveLaunch(launch);
	}
}

async function loadLaunchesData() {
	const isPopulated = await findLaunch({
		flightNumber: 1,
		rocket: "Falcon 1",
		mission: "FalconSat",
	});

	if (isPopulated) {
		console.log("Launch data is already populated");
	} else {
		await populateLaunches();
	}
}

async function findLaunch(filter) {
	return await launches.findOne(filter);
}

async function getAllLaunches(skip, limit) {
	return await launches
		.find(
			{}, //select all
			{ _id: 0, __v: 0 } //projection argument for exclusion
		)
		.sort({ flightNumber: 1 }) // -1 FOR DESC , 1 FOR ASC ORDER BASED ON A SELECTED PARAMETER - Order the entire collection based on flightnumbers
		.skip(skip) //pagination starts from...
		.limit(limit); //items per each pagination
	// return Array.from(launches.values()); //Transforms map array into an array
}

async function addNewLaunch(launch) {
	// GUARD CLAUSE - Make sure a valid target planet is included
	const planet = await planets.findOne({ keplerName: launch.target });
	if (!planet) {
		throw new Error("No matching planet found"); //Built-in generic JS and node Error class
	}

	const nextFlightNumber = (await getLatestFlightNumber()) + 1;

	const newLaunch = Object.assign(launch, {
		success: true,
		upcoming: true,
		customers: ["Zero To Mastery", "NASA"],
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
	return await findLaunch({ flightNumber: launchId });
}

async function getLatestFlightNumber() {
	const latestLaunch = await launches.findOne().sort("-flightNumber");

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
	loadLaunchesData,
	getAllLaunches,
	addNewLaunch,
	existsLaunchWithId,
	abortLaunchById,
};
