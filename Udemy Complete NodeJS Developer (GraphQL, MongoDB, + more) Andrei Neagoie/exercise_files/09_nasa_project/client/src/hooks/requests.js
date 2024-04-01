const API_URL = 'http://localhost:8000/v1';

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

//
// CALLED @ useLaunches.js - launch is an JS formdata object
async function httpSubmitLaunch(launch) {
  // try catch needs to be established in order to catch error if we were not even able to connect  to backend. There is no code in try block to respond such scenario.
  try {
    // Submit given launch data to launch system.
    // FETCH FUNCTIONS DEFAULTS TO GET BY DEFAULT
    return await fetch(`${API_URL}/launches`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' }, //Sending JSON in the body requires a header
      body: JSON.stringify(launch), //We need to turn JS object to JSON when passing data along the req body
    });
  } catch (err) {
    // Return ourselves a response object with ok property that is false inorder to manually trigger error handling on the useLaunches.js
    return { ok: false };
  }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, { method: 'DELETE' });
  } catch (err) {
    console.log(err);
    // Return ourselves a response object with ok property that is false inorder to manually trigger error handling on the useLaunches.js
    return { ok: false };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
