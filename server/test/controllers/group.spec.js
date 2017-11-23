import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../../index';

const request = supertest(app);
let token;

describe('GET /api/v1/user/:userId/group', () => {
  before((done) => {
    request
    .post('/api/v1/user/signup')
    .send({
      username: 'enodi',
      email: 'enodiaudu5@gmail.com',
      fullname: 'Enodi Audu',
      password: 'password',
    })
    .end((err, response) => {
      token = response.body.token;
      done();
    });
  });
  describe('handles retrieving groups', () => {
    it('should return 200 when group is retrieved successfully', (done) => {
      request
        .get(`/api/v1/user/${1}/group`)
        .set('x-access-token', token)
        .end((err, response) => {
          expect(response.status).to.equal(200);
          done();
        });
    });

    it('should return 400 when a wrong value is passed', (done) => {
      request
        .get(`/api/v1/user/${' '}/group`)
        .set('x-access-token', token)
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(response.body.error).to.equal('Invalid User Id');
          done();
        });
    });

    it('should return 401 when an unauthenticated user tries to access this route', (done) => {
      request
      .get('/api/v1/user/:userId/group')
      .end((err, response) => {
        expect(response.status).to.equal(401);
        expect(response.body.message).to.equal('Access denied, Authentication token does not exist');
        expect(response.body.success).to.equal(false);
        done();
      });
    });
  });
});

describe('POST /api/v1/group', () => {
  describe('handles creating group', () => {
    it('should return 201 when a group is created successfully', (done) => {
      request
      .post('/api/v1/group')
      .set('x-access-token', token)
      .send({
        name: 'andela',
        description: 'andela fellows'
      })
      .end((err, response) => {
        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal('Group created successfully');
        done();
      });
    });

    it('should return 400 when whitspaces are supplied', (done) => {
      request
        .post('/api/v1/group')
        .set('x-access-token', token)
        .send({
          name: '    ',
          description: 'andela fellows'
        })
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(typeof response.body.message).to.equal('object');
          done();
        });
    });

    it('should return 401 when an unauthenticated user tries to access this route', (done) => {
      request
      .post('/api/v1/group')
      .end((err, response) => {
        expect(response.status).to.equal(401);
        expect(response.body.message).to.equal('Access denied, Authentication token does not exist');
        expect(response.body.success).to.equal(false);
        done();
      });
    });
  });
});

describe('POST /api/v1/group/:groupId/user', () => {
  it('should return 401 when an unauthenticated user tries to access this route', (done) => {
    request
    .post('/api/v1/group/:groupId/user')
    .end((err, response) => {
      expect(response.status).to.equal(401);
      expect(response.body.message).to.equal('Access denied, Authentication token does not exist');
      expect(response.body.success).to.equal(false);
      done();
    });
  });
});

describe('GET /api/v1/group/:groupId/user', () => {
  it('should return 401 when an unauthenticated user tries to access this route', (done) => {
    request
    .get('/api/v1/group/:groupId/user')
    .end((err, response) => {
      expect(response.status).to.equal(401);
      expect(response.body.message).to.equal('Access denied, Authentication token does not exist');
      expect(response.body.success).to.equal(false);
      done();
    });
  });
});
