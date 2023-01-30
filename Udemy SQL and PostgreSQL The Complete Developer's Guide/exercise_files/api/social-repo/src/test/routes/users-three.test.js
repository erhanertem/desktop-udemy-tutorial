const request = require('supertest');
const testApp = require('../../app');
const pool = require('../../pool');
const UserRepo = require('../../repos/user-repo');
const Context = require('../context');

//NOTE: globalize the scope for context so we have access to object both @ before and after operations
let context;

//--->CONNECT TO DB
beforeAll(async () => {
  context = await Context.build();
});
//--->DISCONNECT FROM DB
afterAll(() => {
  return context.close();
});
//--->TEST
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
