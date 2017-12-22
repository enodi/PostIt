import supertest from 'supertest';
import { expect } from 'chai';

import app from '../../../index';

const request = supertest(app);
let token;

describe('POST /api/v1/group/:groupId/message', () => {
  before((done) => {
    request
      .post('/api/v1/user/signin')
      .send({
        username: 'enodi',
        password: 'password',
      })
      .end((err, response) => {
        expect(response.status).to.equal(200);
        expect(response.body.success).to.equal(true);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.all.keys('success', 'token');
        token = response.body.token;
        done();
      });
  });
  describe('handles posting messages', () => {
    it('should return 201 when a message is posted with priority critical',
      (done) => {
        request
          .post(`/api/v1/group/${1}/message`)
          .set('x-access-token', token)
          .send({
            message: 'hello world',
            priority: 'critical'
          })
          .end((err, response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.be.an('object');
            expect(response.body.message).to
              .equal('message posted successfully');
            expect(response.body.messageCreated.id).to.equal(1);
            expect(response.body.messageCreated.message).to
              .equal('hello world');
            expect(response.body.messageCreated.priority).to.equal('critical');
            expect(response.body).to.have.all.keys('messageCreated', 'message');
            expect(response.body.messageCreated).to.be.an('object');
            expect(response.body.messageCreated)
              .to.have.all.keys('id', 'UserId', 'GroupId',
              'message', 'priority', 'updatedAt', 'createdAt');
            done();
          });
      });

    it('should return 201 when a message is posted with priority urgent',
      (done) => {
        request
          .post(`/api/v1/group/${1}/message`)
          .set('x-access-token', token)
          .send({
            message: 'hello',
            priority: 'urgent'
          })
          .end((err, response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.be.an('object');
            expect(response.body.message).to
              .equal('message posted successfully');
            expect(response.body.messageCreated.id).to.equal(2);
            expect(response.body.messageCreated.message).to
              .equal('hello');
            expect(response.body.messageCreated.priority).to.equal('urgent');
            expect(response.body).to.have.all.keys('messageCreated', 'message');
            expect(response.body.messageCreated).to.be.an('object');
            expect(response.body.messageCreated)
              .to.have.all.keys('id', 'UserId', 'GroupId',
              'message', 'priority', 'updatedAt', 'createdAt');
            done();
          });
      });

    it('should return 400 when no message is supplied', (done) => {
      request
        .post(`/api/v1/group/${1}/message`)
        .set('x-access-token', token)
        .send({
          priority: 'urgent'
        })
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.equal('All fields are required');
          done();
        });
    });

    it('should return 400 when no priority is supplied', (done) => {
      request
        .post(`/api/v1/group/${1}/message`)
        .set('x-access-token', token)
        .send({
          message: 'hello world'
        })
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.equal('All fields are required');
          done();
        });
    });

    it('should return 400 when a string is passed as group id', (done) => {
      request
        .post('/api/v1/group/groupId/message')
        .set('x-access-token', token)
        .send({
          message: 'hello world',
          priority: 'urgent'
        })
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('error');
          expect(response.body.error).to.equal('Invalid Group Id');
          done();
        });
    });

    it('should return 404 when an invalid group id is supplied', (done) => {
      request
        .post(`/api/v1/group/${20}/message`)
        .set('x-access-token', token)
        .send({
          message: 'hello world',
          priority: 'normal'
        })
        .end((err, response) => {
          expect(response.status).to.equal(404);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.equal('Group name doesn\'t exist');
          done();
        });
    });

    it('should return 401 when an unauthenticated user tries to access this route',
      (done) => {
        request
          .post('/api/v1/group/:groupId/message')
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

describe('GET /api/v1/group/:groupId/messages', () => {
  describe('handles retrieving messages', () => {
    it('should return 200 when messages are retrieved', (done) => {
      request
        .get(`/api/v1/group/${1}/messages`)
        .set('x-access-token', token)
        .end((err, response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('object');
          expect(response.body.message).to.equal('messages retrieved');
          expect(response.body.messageRetrieved[0].id).to.equal(2);
          expect(response.body.messageRetrieved[0].message).to.equal('hello');
          expect(response.body.messageRetrieved[0].priority).to.equal('urgent');
          expect(response.body).to.have.all.keys('messageRetrieved', 'message');
          expect(response.body.messageRetrieved).to.be.an('array');
          expect(response.body.messageRetrieved[0])
            .to.have.all.keys('id', 'message', 'priority',
            'GroupId', 'UserId', 'createdAt', 'updatedAt', 'User');
          done();
        });
    });
    it('should return 401 when an unauthenticated user tries to access this route',
      (done) => {
        request
          .get('/api/v1/group/:groupId/messages')
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
