import supertest from 'supertest';
import expect from 'expect';
import app from '../index';
import db from '../server/models/index';

const request = supertest(app);

describe('POST: /api/v1/user/signup', () => {
  it('should return status code 200 when user accesses signup route', (done) => {
    request
      .post('/api/v1/user/signup')
      .expect(200)
      .end(done);
  });
});

describe('POST: /api/v1/user/signin', () => {
  describe('when user tries to login with incomplete information', () => {
    it('should return status code 401 when no username and password are supplied', (done) => {
      request
        .post('/api/v1/user/signin')
        .expect(401)
        .end((err, res) => {
          expect(res.body.message).toBe('Invalid credentials');
          done();
        });
    });
    it('should return status code 401 when no password is supplied', (done) => {
      request
        .post('/api/v1/user/signin')
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
        .post('/api/v1/user/signin')
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
        .post('/api/v1/user/signin')
        .send({})
        .expect()
        .end((err, res) => {
          expect(res.body.message).toBe('Invalid credentials');
          done();
        });
    });
  });
});

describe('POST: /api/v1/user/signup', () => {
  describe('when user tries to signup with no information', () => {
    it('should return status code 200 when all fields are empty', (done) => {
      request
        .post('/api/v1/user/signup')
        .expect(200)
        .end(done);
    });
  });
});

describe('POST: /api/v1/group', () => {
  describe('when an unauthenticated user tries to create a group', () => {
    it('should return status code 403', (done) => {
      request
        .post('/api/v1/group')
        .expect(401)
        .end(done);
    });
  });
});

describe('POST: /api/v1/group/:group_id/message', () => {
  describe('when an unauthenticated user tries to post a message to a group', () => {
    it('should return status code 403', (done) => {
      request
        .post('/api/v1/group/:group_id/message')
        .expect(401)
        .end(done);
    });
  });
});

describe('GET: /api/v1/group/:group_id/messages', () => {
  describe('when an unauthenticated user tries to retrieve messages from a group', () => {
    it('should return status code 401', (done) => {
      request
        .get('/api/v1/group/:group_id/messages')
        .expect(401)
        .end();

      done();
    });
  });
});

describe('POST: /api/v1/group/:group_id/user', () => {
  describe('when an unauthenticated user tries to add users to a group', () => {
    it('should return status code 403', (done) => {
      request
        .post('/api/v1/group/:group_id/user')
        .expect(401)
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
});
