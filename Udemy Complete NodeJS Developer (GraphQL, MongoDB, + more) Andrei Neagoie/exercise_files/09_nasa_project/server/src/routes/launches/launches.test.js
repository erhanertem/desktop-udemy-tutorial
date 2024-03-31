const supertest = require('supertest');
const app = require('../../app');
const { mongoConnect, mongoDisconnect } = require('../../services/mongo');

describe('Launches API', () => {
  // > PROVIDE CONNECTION BEFORE ALL TESTS START
  beforeAll(async () => {
    await mongoConnect();
  });
  // > PROVIDE DISCONNECTION AFTER ALL TESTS COMPLETED
  afterAll(async () => {
    await mongoDisconnect();
  });

  // > SINGLE CASE TESTING
  describe('Test GET /launches', () => {
    test('It should respond with 200 success', async () => {
      const response = await supertest(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200); //via supertest syntax
      // expect(response.statusCode).toBe(200); // via JEST syntax
    });
  });

  // > MULTI CASE TESTING
  describe('Test POST /launch', () => {
    const launchDataWithInvalidDate = {
      mission: 'USS Enterprise',
      rocket: 'NCC 1701-D',
      target: 'Kepler-62 f',
      launchDate: 'Tombi 4, 2028',
    };
    const completeLaunchData = {
      mission: 'USS Enterprise',
      rocket: 'NCC 1701-D',
      target: 'Kepler-62 f',
      launchDate: 'January 4, 2028',
    };
    const launchDataWithoutDate = {
      mission: 'USS Enterprise',
      rocket: 'NCC 1701-D',
      target: 'Kepler-62 f',
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

    test('It should catch missing required properties', async () => {
      // SUPERTEST POST FETCH TEST w/supertest functions
      const response = await supertest(app)
        .post('/launches')
        .send(launchDataWithoutDate) //Intentionally sendign an incomplete data
        .expect('Content-Type', /json/)
        .expect(400); //via supertest syntax

      // JEST ASSERTION TESTING
      // CHECXK FOR STRICT EQUALITY
      expect(response.body).toStrictEqual({
        error: 'Missing required launch property',
      });
    });

    test('It should catch invalid dates', async () => {
      // SUPERTEST POST FETCH TEST w/supertest functions
      const response = await supertest(app)
        .post('/launches')
        .send(launchDataWithInvalidDate) //Intentionally sendign an incomplete data
        .expect('Content-Type', /json/)
        .expect(400); //via supertest syntax

      // JEST ASSERTION TESTING
      // CHECXK FOR STRICT EQUALITY
      expect(response.body).toStrictEqual({
        error: 'Invalid launch date',
      });
    });
  });
});
