const fs = require('fs');
const path = require('path');

const { parse } = require('csv-parse');

const habitablePlanets = [];

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
      .on('data', (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on('error', (err) => {
        console.log(err);
        reject(err);
      })
      .on('end', () => {
        console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve();
      });
  });
}

module.exports = { planets: habitablePlanets, loadPlanetsData };
