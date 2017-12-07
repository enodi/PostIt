import supertest from 'supertest';
import { expect } from 'chai';

import app from '../../../index';
import db from '../../models';

const request = supertest(app);
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
          email: 'enodiaudu5@gmail.com',
          fullname: 'Enodi Audu',
          password: 'password',
        })
        .end((err, response) => {
          expect(response.status).to.equal(201);
          expect(response.body.message).to.equal('Signup successful');
          expect(response.body.username).to.equal('enodi');
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message')
            .but.not.property('password');
          done();
        });
    });

    it('should return 201 when user signs up successfully', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'agnes',
          email: 'agnes@gmail.com',
          fullname: 'Agnes Audu',
          password: 'password',
        })
        .end((err, response) => {
          expect(response.status).to.equal(201);
          expect(response.body.message).to.equal('Signup successful');
          expect(response.body.username).to.equal('agnes');
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('username')
            .but.not.property('password');
          done();
        });
    });

    it('should return 409 when user signs up with existing username',
      (done) => {
        request
          .post('/api/v1/user/signup')
          .send({
            username: 'enodi',
            email: 'julian@gmail.com',
            fullname: 'Julian Audu',
            password: 'password',
          })
          .end((err, response) => {
            expect(response.status).to.equal(409);
            expect(response.body.message)
              .to.equal('Email or Username already exist');
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('message');
            done();
          });
      });

    it('should return 409 when user signs up with existing email', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'julian',
          email: 'enodiaudu5@gmail.com',
          fullname: 'Clara Audu',
          password: 'password',
        })
        .end((err, response) => {
          expect(response.status).to.equal(409);
          expect(response.body.message)
            .to.equal('Email or Username already exist');
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message')
            .but.not.property('email');
          done();
        });
    });

    it('should return 400 when user doesn\'t provide a username', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          email: 'enodiaudu5@gmail.com',
          fullname: 'Clara Audu',
          password: 'password',
        })
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(response.body.message).to.be.an('object');
          expect(response.body.message).to.have.property('username');
          expect(response.body.message.username).to.be.an('array');
          expect(response.body.message.username[0])
            .to.equal('The username field is required.');
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
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(typeof response.body.message).to.equal('object');
          expect(response.body.message).to.have.property('email');
          expect(response.body.message.email).to.be.an('array');
          expect(response.body.message.email[0])
            .to.equal('The email field is required.');
          done();
        });
    });

    it('should return 400 when user doesn\'t provide fullname', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'enodi',
          email: 'enodiaudu5@gmail.com',
          password: 'password',
        })
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(typeof response.body.message).to.equal('object');
          expect(response.body.message).to.have.property('fullname');
          expect(response.body.message.fullname).to.be.an('array');
          expect(response.body.message.fullname[0])
            .to.equal('The fullname field is required.');
          done();
        });
    });

    it('should return 400 when user doesn\'t provide password', (done) => {
      request
        .post('/api/v1/user/signup')
        .send({
          username: 'enodi',
          email: 'enodiaudu5@gmail.com',
          fullname: 'Clara Audu',
        })
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(typeof response.body.message).to.equal('object');
          expect(response.body.message).to.have.property('password');
          expect(response.body.message.password).to.be.an('array');
          expect(response.body.message.password[0])
            .to.equal('The password field is required.');
          done();
        });
    });

    it('should return 400 when user doesn\'t provide any information',
      (done) => {
        request
          .post('/api/v1/user/signup')
          .send({})
          .end((err, response) => {
            expect(response.status).to.equal(400);
            expect(response.body.message).to.be.an('object');
            expect(response.body.message)
              .to.have.all.keys('username', 'email', 'password', 'fullname');
            expect(response.body.message.password).to.be.an('array');
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
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(response.body.message).to.be.an('object');
          expect(response.body.message).to.have.property('email');
          expect(response.body.message.email).to.be.an('array');
          expect(response.body.message.email[0])
            .to.equal('The email format is invalid.');
          done();
        });
    });
    
    it('should return 400 when user provides username with less than 4 characters',
      (done) => {
        request
          .post('/api/v1/user/signup')
          .send({
            username: 'en',
            email: 'enodiaudu5@gmail.com',
            fullname: 'Clara Audu',
            password: 'password'
          })
          .end((err, response) => {
            expect(response.status).to.equal(400);
            expect(response.body.message).to.be.an('object');
            expect(response.body.message).to.have.property('username');
            expect(response.body.message.username).to.be.an('array');
            expect(response.body.message.username[0])
              .to.equal('The username must be at least 4 characters.');
            done();
          });
      });

    it('should return 400 when user passes whitespace into username field',
      (done) => {
        request
          .post('/api/v1/user/signup')
          .send({
            username: '       ',
            email: 'enodiaudu5@gmail.com',
            fullname: 'Clara Audu',
            password: 'password'
          })
          .end((err, response) => {
            expect(response.status).to.equal(400);
            expect(response.body.message).to.be.an('object');
            expect(response.body.message).to.have.property('username');
            expect(response.body.message.username).to.be.an('array');
            expect(response.body.message.username[0])
              .to.equal('The username field is required.');
            done();
          });
      });

    it('should return 400 when user passes whitespace into email field',
      (done) => {
        request
          .post('/api/v1/user/signup')
          .send({
            username: 'enodi',
            email: '      ',
            fullname: 'Clara Audu',
            password: 'password'
          })
          .end((err, response) => {
            expect(response.status).to.equal(400);
            expect(response.body.message).to.be.an('object');
            expect(response.body.message).to.have.property('email');
            expect(response.body.message.email).to.be.an('array');
            expect(response.body.message.email[0])
              .to.equal('The email field is required.');
            done();
          });
      });

    it('should return 400 when user passes whitespace into fullname field',
      (done) => {
        request
          .post('/api/v1/user/signup')
          .send({
            username: 'enodi',
            email: 'enodiaudu5@gmail.com',
            fullname: '     ',
            password: 'password'
          })
          .end((err, response) => {
            expect(response.status).to.equal(400);
            expect(response.body.message).to.be.an('object');
            expect(response.body.message).to.have.property('fullname');
            expect(response.body.message.fullname).to.be.an('array');
            expect(response.body.message.fullname[0])
              .to.equal('The fullname field is required.');
            done();
          });
      });

    it(`should return 400 when user passes whitespace
    into password field`, (done) => {
        request
          .post('/api/v1/user/signup')
          .send({
            username: 'enodi',
            email: 'enodiaudu5@gmail.com',
            fullname: 'Enodi Audu',
            password: '    '
          })
          .end((err, response) => {
            expect(response.status).to.equal(400);
            expect(response.body.message).to.be.an('object');
            expect(response.body.message).to.have.property('password');
            expect(response.body.message.password).to.be.an('array');
            expect(response.body.message.password[0])
              .to.equal('The password field is required.');
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
        .end((err, response) => {
          expect(response.status).to.equal(200);
          expect(response.body.success).to.equal(true);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.all.keys('success', 'token');
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
        .end((err, response) => {
          expect(response.status).to.equal(404);
          expect(response.body).to.be.an('object');
          expect(response.body.message).to.equal('Invalid credentials');
          expect(response.body).to.have.property('message');
          done();
        });
    });

    it('should return 404 when user signs in with wrong password', (done) => {
      request
        .post('/api/v1/user/signin')
        .send({
          username: 'enodi',
          password: 'password12345',
        })
        .end((err, response) => {
          expect(response.status).to.equal(404);
          expect(response.body).to.be.an('object');
          expect(response.body.message).to.equal('Invalid credentials');
          expect(response.body).to.have.property('message');
          done();
        });
    });

    it('should return 400 when no username is supplied', (done) => {
      request
        .post('/api/v1/user/signin')
        .send({
          password: 'password',
        })
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.be.an('object');
          expect(response.body.message).to.equal('Invalid credentials');
          expect(response.body).to.have.property('message');
          done();
        });
    });

    it('should return 400 when no password is supplied', (done) => {
      request
        .post('/api/v1/user/signin')
        .send({
          username: 'enodi',
        })
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.be.an('object');
          expect(response.body.message).to.equal('Invalid credentials');
          expect(response.body).to.have.property('message');
          done();
        });
    });
  });
});


describe('GET /api/v1/user/search', () => {
  before((done) => {
    request
      .post('/api/v1/user/signin')
      .send({
        username: 'enodi',
        password: 'password',
      })
      .end((err, response) => {
        token = response.body.token;
        done();
      });
  });

  describe('handles retrieving users', () => {
    it('should return 200 when user is retrieved successfully', (done) => {
      request
        .get('/api/v1/user/search')
        .set('x-access-token', token)
        .query({ q: 'enodi' })
        .end((err, response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.all.keys('count', 'rows');
          expect(response.body.rows).to.be.an('array');
          expect(response.body.rows[0])
            .to.have.all.keys('id', 'email', 'username', 'fullname');
          done();
        });
    });

    it('should return 404 when a query param isn\'t passed', (done) => {
      request
        .get('/api/v1/user/search')
        .set('x-access-token', token)
        .end((err, response) => {
          expect(response.status).to.equal(404);
          expect(response.body).to.be.an('object');
          expect(response.body.message).to.equal('query params must be passed');
          done();
        });
    });

    it('should return 401 when an unauthenticated user tries to access this route',
      (done) => {
        request
          .get('/api/v1/user/search')
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

    it('should return 401 when an invalid token is passed', (done) => {
      request
        .get('/api/v1/user/search')
        .set('x-access-token', 'ujefjUDFG90W_nsdjdk478sj')
        .end((err, response) => {
          expect(response.status).to.equal(401);
          expect(response.body).to.be.an('object');
          expect(response.body.message).to.equal('Failed to Authenticate Token');
          expect(response.body.success).to.equal(false);
          expect(response.body).to.have.all.keys('success', 'message', 'error');
          expect(response.body.error).to.be.an('object');
          expect(response.body.error).to.have.all.keys('name', 'message');
          done();
        });
    });
  });
});

describe('POST /api/v1/group/:groupId/user', () => {
  before((done) => {
    request
      .post('/api/v1/user/signin')
      .send({
        username: 'enodi',
        password: 'password',
      })
      .end((err, response) => {
        token = response.body.token;
        done();
      });
  });
  describe('handles adding users to group', () => {
    it('should return 401 when an unauthenticated user tries to access this route',
      (done) => {
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
            .to.have.all.keys('id', 'name', 'description', 'createdAt', 'message');
          expect(response.body.message).to.equal('Group created successfully');
          done();
        });
    });
    it('should return 404 when user tries to add a user that doesn\'t exist',
      (done) => {
        request
          .post(`/api/v1/group/${1}/user`)
          .set('x-access-token', token)
          .send({
            userId: 10
          })
          .end((err, response) => {
            expect(response.status).to.equal(404);
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('message');
            expect(response.body.message).to.equal('User not found');
            done();
          });
      });
    it('should return 409 when user tries to add an existing user', (done) => {
      request
        .post(`/api/v1/group/${1}/user`)
        .set('x-access-token', token)
        .send({
          userId: 1
        })
        .end((err, response) => {
          expect(response.status).to.equal(409);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message)
            .to.equal('User is already a member of the group');
          done();
        });
    });
    
    it('should return 404 when group doesn\'t exist', (done) => {
      request
        .post(`/api/v1/group/${10}/user`)
        .set('x-access-token', token)
        .send({
          userId: 1
        })
        .end((err, response) => {
          expect(response.status).to.equal(404);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.equal('Group doesn\'t exist');
          done();
        });
    });
    it('should return 200 when user is added to group', (done) => {
      request
        .post(`/api/v1/group/${1}/user`)
        .set('x-access-token', token)
        .send({
          userId: 2
        })
        .end((err, response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.equal('User added successfully');
          done();
        });
    });
  });
});

describe('GET /api/v1/group/:groupId/users', () => {
  before((done) => {
    request
      .post('/api/v1/user/signin')
      .send({
        username: 'enodi',
        password: 'password',
      })
      .end((err, response) => {
        token = response.body.token;
        done();
      });
  });
  describe('handles retrieving users from group', () => {
    it('should return 401 when an unauthenticated user tries to access this route',
      (done) => {
        request
          .get(`/api/v1/group/${1}/users`)
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
    it('should return 400 when no groupId is passed', (done) => {
      request
        .get('/api/v1/group/:groupId/users')
        .set('x-access-token', token)
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.equal('Please specify a groupId');
          done();
        });
    });
    it('should return 200 when users are retrieved successfully', (done) => {
      request
        .get(`/api/v1/group/${1}/users`)
        .set('x-access-token', token)
        .end((err, response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.all.keys('groupUsers', 'message');
          expect(response.body.groupUsers).to.be.an('array');
          expect(response.body.groupUsers[0])
            .to.have.all.keys('id', 'email', 'password',
            'username', 'fullname', 'createdAt', 'updatedAt', 'UserGroup');
          expect(response.body.message).to.equal('Users retrieved successfully');
          done();
        });
    });
    it('should return 404 when group doesn\'t exist', (done) => {
      request
        .get(`/api/v1/group/${10}/users`)
        .set('x-access-token', token)
        .end((err, response) => {
          expect(response.status).to.equal(404);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.equal('Group doesn\'t exist');
          done();
        });
    });
  });
});
