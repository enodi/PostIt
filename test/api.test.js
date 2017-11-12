import supertest from 'supertest';
import jwt from 'jsonwebtoken';
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
          email: 'enodiaudu5@gmail.com',
          fullname: 'Enodi Audu',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body.message).to.equal('Signup successful');
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
          email: 'enodiaudu5@gmail.com',
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
          email: 'enodiaudu5@gmail.com',
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
          email: 'enodiaudu5@gmail.com',
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
          email: 'enodiaudu5@gmail.com',
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
          email: 'enodiaudu5@gmail.com',
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
          email: 'enodiaudu5@gmail.com',
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
          email: 'enodiaudu5@gmail.com',
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
          email: 'enodiaudu5@gmail.com',
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


describe('GET /api/v1/user/search', () => {
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
        .get('/api/v1/user/search')
        .set('x-access-token', token)
        .query({ q: 'enodi' })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should return 422 when a query param isn\'t passed', (done) => {
      request
        .get('/api/v1/user/search')
        .set('x-access-token', token)
        .end((err, res) => {
          expect(res.status).to.equal(422);
          done();
        });
    });

    it('should return 401 when an unauthenticated user tries to access this route', (done) => {
      request
      .get('/api/v1/user/search')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
    });
  });
});


describe('GET /api/v1/user/:userId/group', () => {
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
      .get('/api/v1/user/:userId/group')
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

describe('POST /api/v1/group/:groupId/message', () => {
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

describe('POST /api/v1/group/:groupId/user', () => {
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
  describe('handles adding users to group', () => {
    it('should return 401 when an unauthenticated user tries to access this route', (done) => {
      request
      .post('/api/v1/group/:groupId/user')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
    });
    it('should return 404 when user tries to add a user that doesn\'t exist', (done) => {
      request
      .post(`/api/v1/group/${1}/user`)
      .set('x-access-token', token)
      .send({
        userId: 10
      })
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
    });
    it('should return 422 when user tries to add an existing user', (done) => {
      request
      .post(`/api/v1/group/${1}/user`)
      .set('x-access-token', token)
      .send({
        userId: 1
      })
      .end((err, res) => {
        expect(res.status).to.equal(422);
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
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
    });
  });
});

describe('POST /api/v1/user/forgotPassword', () => {
  describe('handles sending reset password email', () => {
    it('should return 400 when no email is supplied', (done) => {
      request
      .post('/api/v1/user/forgotPassword')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Field cannot be empty');
        done();
      });
    });
    it('should return 404 when an invalid email is specified', (done) => {
      request
      .post('/api/v1/user/forgotPassword')
      .send({
        email: 'audu@gmail.com'
      })
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
    });
    it('should return 400 when user passes whitespaces in email field', (done) => {
      request
      .post('/api/v1/user/forgotPassword')
      .send({
        email: ' '
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
    });
    it('should return 200 when email is sent successfully', (done) => {
      request
      .post('/api/v1/user/forgotPassword')
      .send({
        email: 'enodiaudu5@gmail.com'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
    });
  });
});

describe('PUT /api/v1/user/resetPassword', () => {
  describe('handles resetting user password', () => {
    it('should return 400 when no password is supplied', (done) => {
      request
      .put('/api/v1/user/resetPassword')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
    });
    it('should return 400 when whitespace is supplied to any field', (done) => {
      request
      .put('/api/v1/user/resetPassword')
      .send({
        password: 'password',
        confirmPassword: ' '
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
    });
    it('should return 400 when whitespace is supplied to both fields', (done) => {
      request
      .put('/api/v1/user/resetPassword')
      .send({
        password: ' ',
        confirmPassword: ' '
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
    });
    it('should return 400 when only one password is supplied', (done) => {
      request
      .put('/api/v1/user/resetPassword')
      .send({
        password: ' ',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
    });
    it('should return 422 when password supplied doesn\'t match', (done) => {
      request
      .put('/api/v1/user/resetPassword')
      .send({
        password: 'password',
        confirmPassword: 'hello'
      })
      .end((err, res) => {
        expect(res.status).to.equal(422);
        done();
      });
    });
    it('should return 401 when no token is supplied', (done) => {
      request
      .put('/api/v1/user/resetPassword')
      .send({
        password: 'password',
        confirmPassword: 'password'
      })
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
    });
    it('should return 200 on successful password reset', (done) => {
      const tokn = jwt.sign({
        email: 'enodiaudu5@gmail.com'
      }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY_TIME
      });
      request
      .put(`/api/v1/user/resetPassword?tokn=${tokn}`)
      .send({
        password: 'password',
        confirmPassword: 'password'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
    });
  });
});
