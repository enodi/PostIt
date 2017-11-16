import supertest from 'supertest';
import { expect } from 'chai';
import dotenv from 'dotenv';
import app from '../../index';
import db from '../models';

const request = supertest(app);
dotenv.config();
let token;

describe('POST /api/v1/group/:groupId/message', () => {
  before((done) => {
    request
    .post('/api/v1/user/signup')
    .send({
      username: 'enodi000',
      email: 'enodiaudu5@gmail.co.uk',
      fullname: 'Enodi Audu',
      password: 'password',
    })
    .end((err, res) => {
      token = res.body.token;
      done();
    });
  });
  describe('handles posting messages', () => {
    it('should return 201 when a message is posted successfully', (done) => {
      request
      .post(`/api/v1/group/${1}/message`)
      .set('x-access-token', token)
      .send({
        message: 'hello world',
        priority: 'critical'
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.message).to.equal('message posted successfully');
        done();
      });
    });

    it('should return 400 when no message is supplied', (done) => {
      request
      .post(`/api/v1/group/${1}/message`)
      .set('x-access-token', token)
      .send({
        priority: 'critical'
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
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
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
    });

    it('should return 401 when an unauthenticated user tries to access this route', (done) => {
      request
      .post('/api/v1/group/:groupId/message')
      .end((err, res) => {
        expect(res.status).to.equal(401);
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
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
    });
    it('should return 401 when an unauthenticated user tries to access this route', (done) => {
      request
      .get('/api/v1/group/:groupId/messages')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
    });
  });
});

describe('Message Model', () => {
  describe('handles creating new message', () => {
    it('should create a message', (done) => {
      db.Message.create({
        message: 'hello all',
        priority: 'normal',
      })
      .then((message) => {
        if (message) {
          expect('hello all').to.equal(message.message);
          expect('normal').to.equal(message.priority);
        }
        done();
      })
      .catch((error) => {
        done(error);
      });
    });
  });

  describe('handles null input', () => {
    it('should return message cannot be null when user passes null input', (done) => {
      db.Message.create({
        message: null,
      })
      .then(() => {
        done();
      })
      .catch((error) => {
        expect(error.errors[0].message).to.equal('message cannot be null');
        done();
      });
    });
  });

  describe('handles updating messages', () => {
    it('should update messages in the database', (done) => {
      db.Message.update({
        message: 'hello all',
      }, {
        where: {
          message: 'sorry about that'
        }
      })
      .then(() => {
        done();
      })
      .catch((error) => {
        done(error);
      });
    });
  });

  describe('handles deleting messages', () => {
    it('should delete messages from the database', (done) => {
      db.Message.destroy({
        where: {
          message: 'hello all'
        }
      })
      .then(() => {
        done();
      })
      .catch((error) => {
        done(error);
      });
    });
  });
});
