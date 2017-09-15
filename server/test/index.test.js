const supertest = require('supertest');
const expect = require('expect');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
const app = require('../../index.js');
const db = require('../models');

const request = supertest(app);
// const User = require('../models/user');
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

  describe('POST: /api/group', () => {
    describe('when user access route without token', () => {
      it('should return status code 403 No token provided', (done) => {
        request
        .post('/api/group')
        .expect(403)
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
});

// describe('User Model test', () => {
//   beforeEach((done) => {
//     db.User.destroy({ where: {} }, { truncate: true }).then((destroyed) => {
//       if (destroyed) {
//         console.log('deleted');
//       }
//       done();
//     });
//   });
//   it('should create new user', (done) => {
//     // Drops table and recreates it afterwards
//     db.User.sync({ force: true }).then(() => {
//       db.User.create({ username: 'enodi', email: 'enodi@gmail.com', password: 'password' })
//         .then((user) => {
//           if (user) {
//             expect('enodi').toBe(user.dataValues.username);
//             expect('enodi@gmail.com').toBe(user.dataValues.email);
//           }
//           done();
//         }).catch((err) => { done(err); });
//     });
//   });
//   it('should create a new group', (done) => {
//     db.Group.sync({ force: true }).then(() => {
//       db.Group.create({ groupName: 'general' })
//       .then((group) => {
//         if (group) {
//           expect('general').toBe(group.dataValues.groupName);
//         }
//         done();
//       }).catch((err) => { done(err); });
//     });
//   });
//   it('should create a new message', (done) => {
//     db.Message.sync({ force: true }).then(() => {
//       db.Message.create({ message: 'hello', userId: 1, groupId: 1 })
//       .then((message) => {
//         if (message) {
//           expect('hello').toBe(message.dataValues.message);
//           expect(1).toBe(message.dataValues.userId);
//           expect(1).toBe(message.dataValues.groupId);
//         }
//         done();
//       }).catch((err) => { done(err); });
//     });
//   });
//   it('should add user to group', (done) => {
//     db.UserGroup.sync({ force: true }).then(() => {
//       db.UserGroup.create({ userId: 1, groupId: 1 })
//       .then((usergroup) => {
//         if (usergroup) {
//           expect(1).toBe(usergroup.dataValues.userId);
//           expect(1).toBe(usergroup.dataValues.groupId);
//         }
//         done();
//       }).catch((err) => { done(err); });
//     });
//   });
// });
