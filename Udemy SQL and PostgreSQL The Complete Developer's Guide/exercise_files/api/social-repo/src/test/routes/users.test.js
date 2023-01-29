const request = require('supertest');
const testApp = require('../../app');
const pool = require('../../pool');
const UserRepo = require('../../repos/user-repo');

const { randomBytes } = require('crypto'); //node.js module
const { default: migrate } = require('node-pg-migrate');
const format = require('pg-format');

//--->CONNECT TO DB
beforeAll(async () => {
  //Randomly generate a user/role name to connect to PG as
  const roleName = 'a' + randomBytes(4).toString('hex');
  // Connect to PG as usual
  await pool.connect({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork-test',
    user: 'postgres',
    password: 'password',
  });
  //Create a new user/role
  await pool.query(
    `CREATE ROLE ${roleName} WITH LOGIN PASSWORD '${roleName}';`
  );
  //Create a schema with the same name
  await pool.query(`CREATE SCHEMA ${roleName} AUTHORIZATION ${roleName};`);
  //Disconnect entirely from PG
  await pool.close();
  //Initiate schema migration for the new schema
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
  //Connect to PG as the new user/role
  await pool.connect({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork-test',
    user: roleName,
    password: roleName,
  });
});
//--->DISCONNECT FROM DB
afterAll(() => {
  return pool.close();
});
//--->TEST
describe('POST /users', function () {
  it('create a user', async () => {
    const startingCount = await UserRepo.count();
    // expect(startingCount).toEqual(0);

    await request(testApp()) //supertest passes a http server
      .post('/users') //supertest post
      .send({ username: 'testuser', bio: 'test bio' })
      .expect(200);

    const finishCount = await UserRepo.count();
    expect(finishCount - startingCount).toEqual(1);
  });
});
