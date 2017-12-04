import { expect } from 'chai';

import db from '../../models';

describe('User Model', () => {
  describe('handles creating new user', () => {
    it('should create a new user', (done) => {
      db.User.create({
        username: 'henry',
        email: 'henry@gmail.com',
        fullname: 'Henry Audu',
        password: 'password',
      })
        .then((user) => {
          if (user) {
            expect('henry').to.equal(user.username);
            expect('henry@gmail.com').to.equal(user.email);
            expect('Henry Audu').to.equal(user.fullname);
            expect(user).to.be.an('object');
            expect(user.dataValues)
              .to.have.all.keys('id', 'username', 'email',
              'fullname', 'createdAt', 'password', 'updatedAt');
          }
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  });

  describe('handles retrieving user data', () => {
    it('should retrieve an existing user', (done) => {
      db.User.findOne({
        where: {
          username: 'henry',
        }
      })
        .then((user) => {
          if (user) {
            expect('henry').to.equal(user.username);
            expect('henry@gmail.com').to.equal(user.email);
            expect('Henry Audu').to.equal(user.fullname);
            expect(user).to.be.an('object');
            expect(user.dataValues)
              .to.have.all.keys('id', 'username', 'email',
              'fullname', 'createdAt', 'password', 'updatedAt');
          }
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  });

  describe('handles null input', () => {
    it('should return username cannot be null when user passes null input',
      (done) => {
        db.User.create({
          username: null,
          email: 'henry@gmail.com',
          fullname: 'Henry Audu',
          password: 'password',
        })
          .then(() => {
            done();
          })
          .catch((error) => {
            expect(error.errors[0].message).to.equal('username cannot be null');
            expect(error.errors).to.be.an('array');
            expect(error.errors[0]).to.have.all.keys('message', 'type',
              'path', 'value');
            done();
          });
      });

    it('should return password cannot be null when user passes null input',
      (done) => {
        db.User.create({
          username: 'henry',
          email: 'henry@gmail.com',
          fullname: 'Henry Audu',
          password: null,
        })
          .then(() => {
            done();
          })
          .catch((error) => {
            expect(error.errors[0].message).to.equal('password cannot be null');
            expect(error.errors).to.be.an('array');
            expect(error.errors[0]).to.have.all.keys('message', 'type',
              'path', 'value');
            done();
          });
      });
  });

  describe('handles wrong input', () => {
    it('should return Validation isEmail failed when user passes wrong email',
      (done) => {
        db.User.create({
          username: 'henry',
          email: 'henry',
          fullname: 'Henry Audu',
          password: 'password',
        })
          .then(() => {
            done();
          })
          .catch((error) => {
            expect(error.errors[0].message).to
              .equal('Validation isEmail failed');
            expect(error.errors).to.be.an('array');
            expect(error).to.be.an('object');
            done();
          });
      });
  });

  describe('handles updating user information', () => {
    it('should update user details in the database', (done) => {
      db.User.update({
        username: 'rimam',
      }, { where: { username: 'henry' } })
        .then((user) => {
          expect(user).to.be.an('array');
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  });
});

