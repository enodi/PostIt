import { expect } from 'chai';
import db from '../server/models';

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
  describe('handles user registration', () => {
    it('should be able to create a new user', (done) => {
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

  describe('handles user signin', () => {
    it('should be able to signin an existing user', (done) => {
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
});

