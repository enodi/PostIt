const supertest = require('supertest');
const app = require('../../index.js');
const User = require('../models/user');
// const expect = require('chai').expect;
// const assert = require('chai').assert;

const request = supertest(app);

describe('API Route', () => {
  describe('GET: /', () => {
    it('should return status code 200 when user accesses application index route', (done) => {
      request
      .get('/')
      .expect(200)
      .expect(/Welcome to PostIt Application, Conversation just became easy/)
      .end(done);
    });
  });

  describe('GET: /api', () => {
    it('should return status code 200 when user accesses API index route', (done) => {
      request
      .get('/api')
      .expect(200)
      .expect(/Welcome to PostIt Application API/)
      .end(done);
    });
  });

  describe('GET: /', () => {
    it('should return status code 403 when user wrong route', (done) => {
      request
      .get('/fdhs')
      .expect(403)
      .end(done);
    });
  });

  describe('POST: /api/user/signup', () => {
    it('should return status code 200 when user accesses signup route', (done) => {
      request
      .post('/api/user/signup')
      .expect(200)
      .end(done);
    });
  });

});
