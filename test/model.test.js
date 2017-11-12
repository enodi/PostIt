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

  describe('Message Model', () => {
    describe('handles creating new message', () => {
      it('should create a message', (done) => {
        db.Message.create({
          message: 'hello all',
          priority: 'normal',
        })
        .then((message) => {
          if (message) {
            expect('hello all').to.equal(message.message);
            expect('normal').to.equal(message.priority);
          }
          done();
        })
        .catch((error) => {
          done(error);
        });
      });
    });
  
    describe('handles null input', () => {
      it('should return message cannot be null when user passes null input', (done) => {
        db.Message.create({
          message: null,
        })
        .then(() => {
          done();
        })
        .catch((error) => {
          expect(error.errors[0].message).to.equal('message cannot be null');
          done();
        });
      });
    });
  
    describe('handles updating messages', () => {
      it('should update messages in the database', (done) => {
        db.Message.update({
          message: 'hello all',
        }, {
          where: {
            message: 'sorry about that'
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
  
    describe('handles deleting messages', () => {
      it('should delete messages from the database', (done) => {
        db.Message.destroy({
          where: {
            message: 'hello all'
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
});

