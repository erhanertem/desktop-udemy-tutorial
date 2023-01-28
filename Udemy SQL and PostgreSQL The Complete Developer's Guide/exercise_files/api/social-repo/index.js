const app = require('./src/app');
const pool = require('./src/pool');

pool
  .connect({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'postgres',
    password: 'password',
  })
  .then(() => {
    //if success put server online
    app().listen(3005, () => {
      console.log('Listening on port 3005');
    });
  })
  //if test pg query yields error
  .catch(err => console.error(err.message));
