import supertest from 'supertest';
import { expect } from 'chai';
import dotenv from 'dotenv';
import app from '../index';
import db from '../server/models';

const request = supertest(app);
dotenv.config();
let token;

describe('POST /api/v1/user/signup', () => {
  before((done) => {
    db.sequelize.sync({ force: true })
      .then(() => {
        done(null);
      })
      .catch((error) => {
        done(error);
      });
  });
  describe('handles user registration', () => {
    it('should return 201 when user signs up successfully', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'enodi',
          email: 'enodi@gmail.com',
          fullname: 'Enodi Audu',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body.message).to.equal('User created successfully');
          done();
        });
    });

    it('should return 409 when user signs up with existing username', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'enodi',
          email: 'julian@gmail.com',
          fullname: 'Julian Audu',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.status).to.equal(409);
          expect(res.body.message).to.equal('Email or Username already exist');
          done();
        });
    });

    it('should return 409 when user signs up with existing email', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'julian',
          email: 'enodi@gmail.com',
          fullname: 'Clara Audu',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.status).to.equal(409);
          expect(res.body.message).to.equal('Email or Username already exist');
          done();
        });
    });

    it('should return 400 when user doesn\'t provide a username', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          email: 'enodi@gmail.com',
          fullname: 'Clara Audu',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should return 400 when user doesn\'t provide an email', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'enodi',
          fullname: 'Clara Audu',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should return 400 when user doesn\'t provide fullname', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'enodi',
          email: 'enodi@gmail.com',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should return 400 when user doesn\'t provide password', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'enodi',
          email: 'enodi@gmail.com',
          fullname: 'Clara Audu',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should return 400 when user doesn\'t provide any information', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should return 400 when user provides wrong email', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'enodi',
          email: 'enodi',
          fullname: 'Clara Audu',
          password: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should return 400 when user provides username with less than 4 characters', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'en',
          email: 'enodi@gmail.com',
          fullname: 'Clara Audu',
          password: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should return 400 when user passes whitespace into username field', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: '       ',
          email: 'enodi@gmail.com',
          fullname: 'Clara Audu',
          password: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should return 400 when user passes whitespace into email field', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'enodi',
          email: '      ',
          fullname: 'Clara Audu',
          password: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should return 400 when user passes whitespace into fullname field', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'enodi',
          email: 'enodi@gmail.com',
          fullname: '     ',
          password: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should return 400 when user passes whitespace into password field', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'enodi',
          email: 'enodi@gmail.com',
          fullname: 'Enodi Audu',
          password: '    '
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });
  });
});

describe('POST /api/v1/user/signin', () => {
  describe('handles user signin', () => {
    it('should return 200 when user signs in successfully', (done) => {
      request
        .post('/api/v1/user/signin')
        .send({
          username: 'enodi',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should return 404 when user signs in with invalid username', (done) => {
      request
        .post('/api/v1/user/signin')
        .send({
          username: 'enodi5',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });

    it('should return 422 when user signs in with wrong password', (done) => {
      request
        .post('/api/v1/user/signin')
        .send({
          username: 'enodi',
          password: 'password12345',
        })
        .end((err, res) => {
          expect(res.status).to.equal(422);
          done();
        });
    });

    it('should return 400 when no username is supplied', (done) => {
      request
        .post('/api/v1/user/signin')
        .send({
          password: 'password',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Invalid credentials');
          done();
        });
    });

    it('should return 400 when no password is supplied', (done) => {
      request
        .post('/api/v1/user/signin')
        .send({
          username: 'enodi',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Invalid credentials');
          done();
        });
    });

    it('should return 400 when user passes whitespace into username field', (done) => {
      request
        .post('/api/v1/user/signin')
        .send({
          username: ' ',
          password: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should return 400 when user passes whitespace into password field', (done) => {
      request
        .post('/api/v1/user/signin')
        .send({
          username: 'enodi',
          password: ' '
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });
  });
});


describe('GET /api/v1/user/users', () => {
  before((done) => {
    request
    .post('/api/v1/user/signin')
    .send({
      username: 'enodi',
      password: 'password',
    })
    .end((err, res) => {
      token = res.body.token;
      done();
    });
  });

  describe('handles retrieving users', () => {
    it('should return 200 when user is retrieved successfully', (done) => {
      request
        .get('/api/v1/user/users')
        .set('x-access-token', token)
        .query({ q: 'enodi' })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should return 422 when a query param isn\'t passed', (done) => {
      request
        .get('/api/v1/user/users')
        .set('x-access-token', token)
        .end((err, res) => {
          expect(res.status).to.equal(422);
          done();
        });
    });

    it('should return 401 when an unauthenticated user tries to access this route', (done) => {
      request
      .get('/api/v1/user/users')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
    });
  });
});


describe('GET /api/v1/user/:user_id/group', () => {
  describe('handles retrieving groups', () => {
    it('should return 200 when group is retrieved successfully', (done) => {
      request
        .get(`/api/v1/user/${1}/group`)
        .set('x-access-token', token)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should return 400 when a wrong value is passed', (done) => {
      request
        .get(`/api/v1/user/${' '}/group`)
        .set('x-access-token', token)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should return 401 when an unauthenticated user tries to access this route', (done) => {
      request
      .get('/api/v1/user/:user_id/group')
      .end((err, res) => {
        expect(res.status).to.equal(401);
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
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.message).to.equal('Group created successfully');
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
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should return 401 when an unauthenticated user tries to access this route', (done) => {
      request
      .post('/api/v1/group')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
    });
  });
});

describe('POST /api/v1/group/:group_id/user', () => {
  it('should return 401 when an unauthenticated user tries to access this route', (done) => {
    request
    .post('/api/v1/group/:group_id/user')
    .end((err, res) => {
      expect(res.status).to.equal(401);
      done();
    });
  });
});

describe('GET /api/v1/group/:group_id/user', () => {
  it('should return 401 when an unauthenticated user tries to access this route', (done) => {
    request
    .get('/api/v1/group/:group_id/user')
    .end((err, res) => {
      expect(res.status).to.equal(401);
      done();
    });
  });
});

describe('POST /api/v1/group/:group_id/message', () => {
  before((done) => {
    request
    .post('/api/v1/user/signin')
    .send({
      username: 'enodi',
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
      .post('/api/v1/group/:group_id/message')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
    });
  });
});

describe('GET /api/v1/group/:group_id/messages', () => {
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
      .get('/api/v1/group/:group_id/messages')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
    });
  });
});
