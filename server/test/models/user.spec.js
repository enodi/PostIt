import { expect } from 'chai';

import db from '../../models';

describe('User Model', () => {
  before((done) => {
    db.sequelize.sync({ force: true })
      .then(() => {
        done(null);
      })
      .catch((error) => {
        done(error);
      });
  });
  describe('handles creating new user', () => {
    it('should create a new user', (done) => {
      db.User.create({
        username: 'enodi',
        email: 'enodi@gmail.com',
        fullname: 'Enodi Audu',
        password: 'password',
      })
      .then((user) => {
        if (user) {
          expect('enodi').to.equal(user.username);
          expect('enodi@gmail.com').to.equal(user.email);
          expect('Enodi Audu').to.equal(user.fullname);
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
          username: 'enodi',
          password: 'password'
        }
      })
      .then((user) => {
        if (user) {
          expect('enodi').to.equal(user.username);
        }
        done();
      })
      .catch((error) => {
        done(error);
      });
    });
  });

  describe('handles null input', () => {
    it('should return username cannot be null when user passes null input', (done) => {
      db.User.create({
        username: null,
        email: 'enodi@gmail.com',
        fullname: 'Enodi Audu',
        password: 'password',
      })
      .then(() => {
        done();
      })
      .catch((error) => {
        expect(error.errors[0].message).to.equal('username cannot be null');
        done();
      });
    });

    it('should return password cannot be null when user passes null input', (done) => {
      db.User.create({
        username: 'enodi',
        email: 'enodi@gmail.com',
        fullname: 'Enodi Audu',
        password: null,
      })
      .then(() => {
        done();
      })
      .catch((error) => {
        expect(error.errors[0].message).to.equal('password cannot be null');
        done();
      });
    });
  });

  describe('handles wrong input', () => {
    it('should return Validation isEmail failed when user passes wrong email', (done) => {
      db.User.create({
        username: 'enodi',
        email: 'enodi',
        fullname: 'Enodi Audu',
        password: 'password',
      })
      .then(() => {
        done();
      })
      .catch((error) => {
        expect(error.errors[0].message).to.equal('Validation isEmail failed');
        done();
      });
    });
  });

  describe('handles updating user information', () => {
    it('should update user details in the database', (done) => {
      db.User.update({
        username: 'clara',
      }, {
        where: {
          username: 'enodi'
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

  describe('handles deleting user information', () => {
    it('should delete user details from the database', (done) => {
      db.User.destroy({
        where: {
          username: 'enodi'
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

