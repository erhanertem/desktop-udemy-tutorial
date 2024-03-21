const API_URL = 'http://localhost:5000';

async function httpGetPlanets() {
  // Load planets
  const response = await fetch(`${API_URL}/planets`);
  // Parse JSON response into a usable JavaScript object literal or array
  return await response.json();
}

async function httpGetLaunches() {
  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${API_URL}/launches`);
  // Parse JSON response into a usable JavaScript object literal or array
  const fetchedLaunches = await response.json();
  // Return the object in ASC order
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
