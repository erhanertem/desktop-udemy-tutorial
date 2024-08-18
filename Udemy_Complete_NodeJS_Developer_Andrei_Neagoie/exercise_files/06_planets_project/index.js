const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  );
}

fs.createReadStream('kepler_data.csv')
  // The habitablePlanets array only comprised of the read buffers of RAW data, they need to be transformed to reradable data
  // pipe nodejs function pipes the readstream data to parse function
  .pipe(
    parse({
      comment: '#',
      columns: true,
    })
  )
  // events for createReadStream() @ https://nodejs.org/dist/latest-v10.x/docs/api/stream.html#stream_class_stream_readable
  .on('data', (data) => {
    if (isHabitablePlanet(data)) habitablePlanets.push(data);
  })
  .on('error', (err) => {
    console.log(err);
  })
  .on('end', () => {
    console.log(
      habitablePlanets.map((planet) => {
        return planet['kepler_name'];
      })
    );
    console.log(`${habitablePlanets.length} habitable planets found!`);
  });
