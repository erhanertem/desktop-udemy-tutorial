const { randomBytes } = require('crypto'); //node.js module
const format = require('pg-format'); //NOTE: Parameters for users, database, etc are not allowerd per node-pg. Therefore we would need this module to be able create parameterized input for these special cases
const { default: migrate } = require('node-pg-migrate');
const pool = require('../pool');

const DEFAULT_DB = {
  host: 'localhost',
  port: 5432,
  database: 'socialnetwork-test',
  user: 'postgres',
  password: 'password',
};

class Context {
  constructor(roleName) {
    this.roleName = roleName;
  }

  static async build() {
    //->Randomly generate a user/role name to connect to PG as
    const roleName = 'a' + randomBytes(4).toString('hex');
    //->Connect to PG as usual
    await pool.connect(DEFAULT_DB);
    //->Create a new user/role
    // await pool.query(
    //   `CREATE ROLE ${roleName} WITH LOGIN PASSWORD '${roleName}';`
    // );
    await pool.query(
      format('CREATE ROLE %I WITH LOGIN PASSWORD %L;', roleName, roleName)
    );
    //->Create a schema with the same name
    // await pool.query(`CREATE SCHEMA ${roleName} AUTHORIZATION ${roleName};`);
    await pool.query(
      format('CREATE SCHEMA %I AUTHORIZATION %I;', roleName, roleName)
    );
    //->Disconnect entirely from PG
    await pool.close();
    //->Initiate schema migration for the new schema
    await migrate({
      schema: roleName,
      direction: 'up', //up migrate
      log: () => {}, //dont do any logging
      noLock: true, //do not lockup database when doing multiple migrations
      dir: 'migrations',
      databaseUrl: {
        host: 'localhost',
        port: 5432,
        database: 'socialnetwork-test',
        user: roleName,
        password: roleName,
      },
    });
    //->Connect to PG as the new user/role
    await pool.connect({
      host: 'localhost',
      port: 5432,
      database: 'socialnetwork-test',
      user: roleName,
      password: roleName,
    });

    return new Context(roleName);
  }

  async close() {
    //->Disconnect from PG
    await pool.close();
    //->Reconnect as our root user
    await pool.connect(DEFAULT_DB);
    //->Delete the schema we created
    await pool.query(format('DROP SCHEMA %I CASCADE;', this.roleName));
    //->Delete the role we created
    await pool.query(format('DROP ROLE %I;', this.roleName));
    //->Disconnect
    await pool.close();
  }
}

module.exports = Context;
