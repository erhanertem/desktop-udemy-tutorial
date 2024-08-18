const pg = require('pg');

// connect to postgre server
const pool = new pg.Pool({
  host: 'localhost',
  prompt: 5432,
  database: 'socialnetwork',
  user: 'postgres',
  password: 'password',
});

pool
  .query(
    `
UPDATE posts
SET loc = POINT(lng,lat)
WHERE loc IS NULL;
`
  )
  .then(() => {
    console.log('Update complete');
    pool.end();
  })
  .catch(err => console.error(err.message));
