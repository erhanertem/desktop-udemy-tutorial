const pg = require('pg');

//NOTE: we wrap up pg pol with an object taking in options so that whenever we crerate a new pool we would have different settings for testing purposes.
class Pool {
  _pool = null;

  //establish connection to database
  connect(options) {
    this._pool = new pg.Pool(options);

    //NOTE: when the app first launches, postgre db is not reached till aquery is sent. In order to test the postgre credentials whether they are correct, we need to send a test query to verify the credentials.
    return this._pool.query('SELECT 1+1;');
  }

  //disconnect from database
  close() {
    return this._pool.end();
  }

  //carry out a query
  query(sql) {
    return this._pool.query(sql);
  }
}

module.exports = new Pool();
