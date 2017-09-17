const supertest = require('supertest');
const expect = require('expect');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
const app = require('../../index.js');
const db = require('../models');

const request = supertest(app);
const User = require('../models/user');
// const expect = require('chai').expect;
// const assert = require('chai').assert;


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

  describe('POST: /api/user/signup', () => {
    it('should return status code 200 when user accesses signup route', (done) => {
      request
        .post('/api/user/signup')
        .expect(200)
        .end(done);
    });
  });
});

describe('POST: /api/user/signin', () => {
  describe('when user tries to login with incomplete information', () => {
    it('should return status code 401 when no username and password are supplied', (done) => {
      request
        .post('/api/user/signin')
        .expect(401)
        .end((err, res) => {
          expect(res.body.message).toBe('Invalid credentials');
          done();
        });
    });
    it('should return status code 401 when no password is supplied', (done) => {
      request
        .post('/api/user/signin')
        .send({
          username: 'user',
        })
        .expect(401)
        .end((err, res) => {
          expect(res.body.message).toBe('Invalid credentials');
          done();
        });
    });
    it('should return status code 401 when no username is supplied', (done) => {
      request
        .post('/api/user/signin')
        .send({
          password: 'password',
        })
        .expect(401)
        .end((err, res) => {
          expect(res.body.message).toBe('Invalid credentials');
          done();
        });
    });
    it('should return status code  when no username is supplied', (done) => {
      request
        .post('/api/user/signin')
        .send({})
        .expect()
        .end((err, res) => {
          expect(res.body.message).toBe('Invalid credentials');
          done();
        });
    });
  });
});

describe('POST: /api/user/signup', () => {
  describe('when user tries to signup with no information', () => {
    it('should return status code 200 when all fields are empty', (done) => {
      request
        .post('/api/user/signup')
        .expect(200)
        .end(done);
    });
  });
});

describe('POST: /api/group', () => {
  describe('when an unauthenticated user tries to create a group', () => {
    it('should return status code 403', (done) => {
      request
        .post('/api/group')
        .expect(403)
        .end(done);
    });
  });
});

describe('POST: /api/group/:group_id/message', () => {
  describe('when an unauthenticated user tries to post a message to a group', () => {
    it('should return status code 403', (done) => {
      request
        .post('/api/group/:group_id/message')
        .expect(403)
        .end(done);
    });
  });
});

describe('GET: /api/group/:group_id/messages', () => {
  describe('when an unauthenticated user tries to retrieve messages from a group', () => {
    it('should return status code 403', (done) => {
      request
        .get('/api/group/:group_id/messages')
        .expect(403)
        .end(done);
    });
  });
});

describe('POST: /api/group/:group_id/user', () => {
  describe('when an unauthenticated user tries to add users to a group', () => {
    it('should return status code 403', (done) => {
      request
        .post('/api/group/:group_id/user')
        .expect(403)
        .end(done);
    });
  });
});

describe('Model test', () => {
  beforeEach((done) => {
    db.User.destroy({ where: {} }, { truncate: true }).then((destroyed) => {
      if (destroyed) {
        console.log('deleted');
      }
      done();
    });
  });
  it('should create new user', (done) => {
    // Drops table and recreates it afterwards
    db.User.sync({ force: true }).then(() => {
      db.User.create({ username: 'enodi', email: 'enodi@gmail.com', password: 'password', fullname: 'Enodi Audu' })
        .then((user) => {
          if (user) {
            expect('enodi').toBe(user.dataValues.username);
            expect('enodi@gmail.com').toBe(user.dataValues.email);
          }
          done();
        }).catch((err) => { done(err); });
    });
  });
  it('should create a new group', (done) => {
    db.Group.sync({ force: true }).then(() => {
      db.Group.create({ name: 'general', description: 'general channel' })
        .then((group) => {
          if (group) {
            expect('general').toBe(group.dataValues.name);
          }
          done();
        }).catch((err) => { done(err); });
    });
  });
  it('should create a new message', (done) => {
    db.Message.sync({ force: true }).then(() => {
      db.Message.create({ message: 'hello', sender: 1, groupId: 1 })
        .then((message) => {
          if (message) {
            expect('hello').toEqual(message.dataValues.message);
            expect(1).toEqual(message.dataValues.sender);
            expect(1).toEqual(message.dataValues.groupId);
          }
          done();
        }).catch((err) => { done(err); });
    });
  });
  it('should add user to group', (done) => {
    db.UserGroups.sync({ force: true }).then(() => {
      db.UserGroups.create({ userId: 1, groupId: 1 })
        .then((usergroup) => {
          if (usergroup) {
            expect(1).toEqual(usergroup.dataValues.userId);
            expect(1).toEqual(usergroup.dataValues.groupId);
          }
          done();
        }).catch((err) => { done(err); });
    });
  });
});
