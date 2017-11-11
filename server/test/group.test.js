import supertest from 'supertest';
import { expect } from 'chai';
import dotenv from 'dotenv';
import app from '../../index';
import db from '../models';

const request = supertest(app);
dotenv.config();
let token;

describe('GET /api/v1/user/:userId/group', () => {
  before((done) => {
    db.sequelize.sync({ force: true })
      .then(() => {
        done(null);
      })
      .catch((error) => {
        done(error);
      });
  });
  before((done) => {
    request
    .post('/api/v1/user/signup')
    .send({
      username: 'enodi',
      email: 'enodi@gmail.com',
      fullname: 'Enodi Audu',
      password: 'password',
    })
    .end((err, res) => {
      token = res.body.token;
      done();
    });
  });
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

describe('POST /api/v1/group/:groupId/user', () => {
  it('should return 401 when an unauthenticated user tries to access this route', (done) => {
    request
    .post('/api/v1/group/:groupId/user')
    .end((err, res) => {
      expect(res.status).to.equal(401);
      done();
    });
  });
});

describe('GET /api/v1/group/:groupId/user', () => {
  it('should return 401 when an unauthenticated user tries to access this route', (done) => {
    request
    .get('/api/v1/group/:groupId/user')
    .end((err, res) => {
      expect(res.status).to.equal(401);
      done();
    });
  });
});

describe('Group Model', () => {
  describe('handles creating new group', () => {
    it('should create a new group', (done) => {
      db.Group.create({
        name: 'Andela',
        description: 'Welcome to Andela',
      })
      .then((group) => {
        if (group) {
          expect('Andela').to.equal(group.name);
          expect('Welcome to Andela').to.equal(group.description);
        }
        done();
      })
      .catch((error) => {
        done(error);
      });
    });
  });

  describe('handles retrieving group data', () => {
    it('should retrieve an existing group', (done) => {
      db.Group.findOne({
        where: {
          name: 'Andela',
          description: 'Welcome to Andela',
        }
      })
      .then((group) => {
        if (group) {
          expect('Andela').to.equal(group.name);
        }
        done();
      })
      .catch((error) => {
        done(error);
      });
    });
  });

  describe('handles null input', () => {
    it('should return name cannot be null when user passes null input', (done) => {
      db.Group.create({
        name: null,
        description: 'Welcome to Andela',
      })
      .then(() => {
        done();
      })
      .catch((error) => {
        expect(error.errors[0].message).to.equal('name cannot be null');
        done();
      });
    });
  });

  describe('handles updating group information', () => {
    it('should update group details in the database', (done) => {
      db.Group.update({
        name: 'Bootcamp',
      }, {
        where: {
          name: 'Andela'
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

  describe('handles deleting group information', () => {
    it('should delete group details from the database', (done) => {
      db.Group.destroy({
        where: {
          name: 'Andela'
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
