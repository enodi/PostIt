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
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('groups');
          expect(response.body.groups).to.be.an('object');
          expect(response.body.groups)
            .to.have.all.keys('id', 'email', 'username', 'fullname', 'Groups');
          done();
        });
    });

    it('should return 400 when a wrong value is passed', (done) => {
      request
        .get(`/api/v1/user/${' '}/group`)
        .set('x-access-token', token)
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('error');
          expect(response.body.error).to.equal('Invalid User Id');
          done();
        });
    });

    it('should return 401 when an unauthenticated user tries to access this route',
      (done) => {
        request
          .get('/api/v1/user/:userId/group')
          .end((err, response) => {
            expect(response.status).to.equal(401);
            expect(response.body).to.be.an('object');
            expect(response.body.message)
              .to.equal('Access denied, Authentication token does not exist');
            expect(response.body.success).to.equal(false);
            expect(response.body).to.have.all.keys('success', 'message');
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
          expect(response.body).to.be.an('object');
          expect(response.body)
            .to.have.all.keys('id', 'message', 'name', 'description', 'createdAt');
          expect(response.body.message).to.equal('Group created successfully');
          done();
        });
    });

    it('should return 409 when a user tries to create an existing group',
      (done) => {
        request
          .post('/api/v1/group')
          .set('x-access-token', token)
          .send({
            name: 'andela',
            description: 'andela fellows'
          })
          .end((err, response) => {
            expect(response.status).to.equal(409);
            expect(response.body).to.equal('Group name already exists');
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
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.have.property('name');
          expect(response.body.message.name).to.be.an('array');
          expect(response.body.message.name[0])
            .to.equal('The name field is required.');
          done();
        });
    });

    it(`should return 401 when an unauthenticated user
    tries to access this route`, (done) => {
        request
          .post('/api/v1/group')
          .end((err, response) => {
            expect(response.status).to.equal(401);
            expect(response.body).to.be.an('object');
            expect(response.body.message)
              .to.equal('Access denied, Authentication token does not exist');
            expect(response.body.success).to.equal(false);
            expect(response.body).to.have.all.keys('success', 'message');
            done();
          });
      });
  });
});

describe('POST /api/v1/group/:groupId/user', () => {
  it(`should return 401 when an unauthenticated user
  tries to access this route`, (done) => {
      request
        .post('/api/v1/group/:groupId/user')
        .end((err, response) => {
          expect(response.status).to.equal(401);
          expect(response.body).to.be.an('object');
          expect(response.body.message)
            .to.equal('Access denied, Authentication token does not exist');
          expect(response.body.success).to.equal(false);
          expect(response.body).to.have.all.keys('success', 'message');
          done();
        });
    });
});

describe('GET /api/v1/group/:groupId/user', () => {
  it(`should return 401 when an unauthenticated user
  tries to access this route`, (done) => {
      request
        .get('/api/v1/group/:groupId/user')
        .end((err, response) => {
          expect(response.status).to.equal(401);
          expect(response.body).to.be.an('object');
          expect(response.body.message)
            .to.equal('Access denied, Authentication token does not exist');
          expect(response.body.success).to.equal(false);
          expect(response.body).to.have.all.keys('success', 'message');
          done();
        });
    });
});
