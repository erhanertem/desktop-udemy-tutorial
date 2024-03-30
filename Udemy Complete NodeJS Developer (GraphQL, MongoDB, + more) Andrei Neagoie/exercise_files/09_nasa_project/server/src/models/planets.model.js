const fs = require('fs');
const path = require('path');

const { parse } = require('csv-parse');

const planets = require('./planets.mongo');

// const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  );
}

/*
const promise = new Promise((resolve, reject)=> {
  resolve(42);
});
promise.then(result=> {

})
const result = await promise;
 */
// WE NEED TO PROMISFY THE FILE READ STREAM. SINCE THIS IS ASYNC PROCESS, MODULE EXPORT WOULD EXECUTE WITH NO RESULT WHILE THIS STREAM IS DOING ITS JOB, MEANING A BLANK ARRAY WILL ALWAYS BE RETURNED.
function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, '..', '..', 'data', 'kepler_data.csv')
    )
      .pipe(
        parse({
          comment: '#',
          columns: true,
        })
      )
      .on('data', async (data) => {
        if (isHabitablePlanet(data)) {
          // > FOR LOCAL MEMORY ARRAY DATA
          // habitablePlanets.push(data);
          // > MONGODB VERSION
          // #1
          // NOTE: SAVING TO MONGODB IS ASYNC OPERATION TO WE HAVE TO USE ASYNC/AWAIT TEMPLATE
          // await planets.create(data);
          // #2
          // IMPORTANT!! WHILE SAVING DATA INTO OUR DB, WE HAVE TO MEET THE BARE MIN TEMPLATE SET BY OUR SCHEMA OTHERWISE IT WONT GO THRU. SO WE CAN'T USE data DIRECTLY. WE HAVE TO PROVIDE THE WAY IT'S REQUIRED FROM US
          // await planets.create({ keplerName: data.kepler_name });
          // IMPORTANT!! EACH TIME SERVER STARTS, KEPLER DATA WILL BE READ FROM THE FILE AND INSERTED TO DB ALONG WITH PREVIOUS ONES. SO DATA DUBLICATES ITSELF. IN ORDER TO AVOID THIS, WE NEED TO UTILIZE UPSERT (INSERT+UPDATE) FETCH
          await savePlanet(data);
        }
      })
      .on('error', (err) => {
        console.log(err);
        reject(err); //IT'S NEW PROMISE'S REJECT() FN
        // WE ARE PASSING ERR OBJECT TO RETURN WHEN REJECTED
      })
      .on('end', async () => {
        const countPlanetsFound = (await getAllPlanets()).length;
        console.log(`${countPlanetsFound} habitable planets found!`);
        // console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve(); //IT'S NEW PROMISE'S RESOLVE() FN
        // WE ARE NOT INCLUDING ANYTHING WITH OUR RESOLVE() FN BECAUSE SAVEPLANET(DATA) IS ALL WE NEED
      });
  });
}

async function getAllPlanets() {
  // > FOR LOCAL MEMORY ARRAY DATA
  // return habitablePlanets;
  // > MONGODB VERSION - async operation
  return await planets.find(
    {}, //return by finding all objects
    { id: 0, __v: 0 } //exclude these returned properties
  );
}

async function savePlanet(planet) {
  try {
    await planets.updateOne(
      { keplerName: planet.kepler_name }, //if it does not exist here does not do anything unless upsert is marked true on options object
      { keplerName: planet.kepler_name }, //if the preceding data exists here is the data to update with
      { upsert: true }
    );
  } catch (err) {
    console.error(`⚠️ Could not save planet ${err}`);
  }
}

module.exports = { getAllPlanets, loadPlanetsData };
