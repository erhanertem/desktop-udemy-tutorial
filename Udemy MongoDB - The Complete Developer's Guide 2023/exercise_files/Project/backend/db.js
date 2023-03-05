const { MongoClient } = require('mongodb');

const mongoDbURL =
  'mongodb+srv://tempuser:bk6StPv7Oz9MOqHS@cluster0.rrttevo.mongodb.net/shop?retryWrites=true&w=majority';
let _db;

//Establishes a connection
const initDb = callback => {
  if (_db) {
    console.log('Database is already initialized!');
    return callback(null, _db);
  } else
    MongoClient.connect(mongoDbURL)
      .then(client => {
        console.log('Database initialized');
        _db = client.db();
        callback(null, _db);
      })
      .catch(err => {
        callback(err);
      });
};

//Get access to existing connection
const getDb = () => {
  if (!_db) {
    throw Error('Database not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
