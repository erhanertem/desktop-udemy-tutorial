const supertest = require('supertest');
const app = require('../../app');

//SINGLE CASE TESTING
describe('Test GET /launches', () => {
  test('It should respond with 200 success', async () => {
    const response = await supertest(app)
      .get('/launches')
      .expect('Content-Type', /json/)
      .expect(200); //via supertest syntax
    // expect(response.statusCode).toBe(200); // via JEST syntax
  });
});

// MULTI CASE TESTING
describe('Test POST /launch', () => {
  const completeLaunchData = {
    mission: 'USS Enterprise',
    rocket: 'NCC 1701-D',
    target: 'Kepler-186 f',
    launchDate: 'January 4, 2028',
  };
  const launchDataWithoutDate = {
    mission: 'USS Enterprise',
    rocket: 'NCC 1701-D',
    target: 'Kepler-186 f',
  };

  test('It should respond with 201 created', async () => {
    // SUPERTEST POST FETCH TEST w/supertest functions
    const response = await supertest(app)
      .post('/launches')
      .send(completeLaunchData)
      .expect('Content-Type', /json/)
      .expect(201);

    // JEST ASSERTION TESTING
    // CHECK DATE ENTERED VERSUS RETURNED RESPONSE DATE IN NUMERIC UNIX VALUE
    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);

    // JEST ASSERTION TESTING
    // CHECK IF CRIPPLED VERSION OF THE LAUNCH DATA MATCHES THE RESPONSE.BODY OBJECT
    expect(response.body).toMatchObject(launchDataWithoutDate);
  });
});

// EXTRA TEST - MDN SHEET EXAMPLE
describe('Test Object Relevance MDN Sheet exercise - Extra ', () => {
  const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
    },
  };
  const desiredHouse = {
    bath: true,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      wallColor: expect.stringMatching(/white|yellow/),
    },
  };

  test('the house has my desired features', () => {
    expect(houseForSale).toMatchObject(desiredHouse);
  });
});
