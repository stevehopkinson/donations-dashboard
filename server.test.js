require('dotenv').config();

const axios = require('axios');
const request = require('supertest');
const mockAdapter = require('axios-mock-adapter');
const server = require('./server');

const charityId = 2116;

const mockApi = new mockAdapter(axios);

mockApi.onGet(`/${process.env.JUST_GIVING_APP_ID}/v1/charity/${charityId}`)
	.reply(200, {});

mockApi.onGet(`/${process.env.JUST_GIVING_APP_ID}/v1/charity/${charityId}/donations`)
	.reply(200, {
		donations: [
			{},
			{}
		]
	});

describe('Test that the server starts', () => {
  test('It should listen without throwing an error', done => {
  	const testServer = server.listen(() => {
  		testServer.close(done);
  	});
  })
});

describe('Test the root path', () => {
  test('Server should respond to / route with a 200 status code', done => {
    request(server)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('Test API endpoints', () => {
  test('Server should respond to /api/charities/2116 route with a 200 status code', done => {
    request(server)
      .get(`/api/charities/${charityId}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
