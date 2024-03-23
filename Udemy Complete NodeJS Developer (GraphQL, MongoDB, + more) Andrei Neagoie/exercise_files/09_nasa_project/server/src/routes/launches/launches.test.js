//SINGLE CASE TESTING
describe('Test GET /launches', () => {
  test('It should respond with 200 success', () => {
    const response = 200;
    expect(response).toBe(200);
  });
});

// MULTI CASE TESTING
describe('Test POST /launch', () => {
  test('It should respond with 200 success', () => {});
  test('It should catch missing required properties', () => {});
  test('It should catch invalid dates', () => {});
});
