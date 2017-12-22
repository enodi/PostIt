import supertest from 'supertest';
import { expect } from 'chai';

import app from '../../../index';

const request = supertest(app);
let token;


describe('POST /api/v1/group', () => {
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

  describe('handles creating group', () => {
    it('should return 201 when a group is created successfully', (done) => {
      request
        .post('/api/v1/group')
        .set('x-access-token', token)
        .send({
          name: 'random',
          description: 'random channel'
        })
        .end((err, response) => {
          expect(response.status).to.equal(201);
          expect(response.body).to.be.an('object');
          expect(response.body.message).to.equal('Group created successfully');
          expect(response.body.id).to.equal(2);
          expect(response.body.name).to.equal('random');
          expect(response.body.description).to.equal('random channel');
          expect(response.body).to.have.all
            .keys('id', 'message', 'name', 'description', 'createdAt');
          done();
        });
    });

    it('should return 409 when a user tries to create an existing group',
      (done) => {
        request
          .post('/api/v1/group')
          .set('x-access-token', token)
          .send({
            name: 'random',
            description: 'random channel'
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

    it('should return 401 when an unauthenticated user tries to access this route',
      (done) => {
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
});

describe('GET /api/v1/group/:groupId/user', () => {
  it('should return 401 when an unauthenticated user tries to access this route',
    (done) => {
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

describe('POST /api/v1/group/:groupId/user', () => {
  describe('handles adding users to group', () => {
    it('should return 400 when user passes a string as userId',
      (done) => {
        request
          .post(`/api/v1/group/${1}/user`)
          .set('x-access-token', token)
          .send({
            userId: 'userId'
          })
          .end((err, response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('message');
            expect(response.body.message).to
              .equal('Invalid User Id');
            done();
          });
      });

    it('should return 400 when no userId is passed',
      (done) => {
        request
          .post(`/api/v1/group/${1}/user`)
          .set('x-access-token', token)
          .send({
            userId: '  '
          })
          .end((err, response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('message');
            expect(response.body.message).to
              .equal('Invalid User Id');
            done();
          });
      });

    it('should return 400 when a string is passed as groupId',
      (done) => {
        request
          .post('/api/v1/group/groupId/user')
          .set('x-access-token', token)
          .send({
            userId: 2
          })
          .end((err, response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('message');
            expect(response.body.message).to
              .equal('Invalid Group Id');
            done();
          });
      });

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
          expect(response.body.message).to.equal('Group name doesn\'t exist');
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
          expect(response.body.message).to.equal('Invalid Group Id');
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
          expect(response.body.message).to.equal('Group name doesn\'t exist');
          done();
        });
    });
  });
});
