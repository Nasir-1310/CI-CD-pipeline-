const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return Hello World2!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World!');
  });

//   it('should fail if the response is not Hello World!', async () => {
//     const res = await request(app).get('/');
//     expect(res.text).toBe('Hello Universe!'); // Intentional failing test
//   });
});