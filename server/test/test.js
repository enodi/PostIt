// Set env variable to test
// process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const db = require('../models');

// const server = require('../../index');

const expect = require('expect');

chai.use(chaiHttp);

describe('User Model test', () => {
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
      db.User.create({ username: 'enodi', email: 'enodi@gmail.com', password: 'password' })
        .then((user) => {
          if (user) {
            expect('enodi').toBe(user.dataValues.username);
            expect('enodi@gmail.com').toBe(user.dataValues.email);
          }
          done();
        }).catch((err) => { done(err); });
    });
  });
});
  // it('I should be able to create a new group with this model', (done) => {
  //   Group.sync({ force: true }).then(() => {
  //     Group.create({ groupName: 'Man United', description: 'Class of 2015', userId: 1 })
  //       .then((group) => {
  //         expect('Zikites').toNotBe('Zike');
  //         expect('Class of 2015').toBe(group.dataValues.description);
  //         expect(group.dataValues.userId.toString()).toBe('1');
  //         done();
  //       });
  //   }).catch((err) => { done(err); });
  // }, 10000);
  // });
  //
// describe('User', () => {
//   // Empty database before each test
//   beforeEach((done) => {
//     User.destroy({}, (err) => {
//       done();
//     });
//   });
//
//   describe('/POST User', () => {
//     it('it should not post a user without username field', (done) => {
//       const user = {
//         email: 'enodi@gmail.com',
//         password: 'password',
//         first_name: 'Enodi',
//         last_name: 'Audu'
//       }
//       chai.request(server)
//       .post('/api/user/signup')
//       .send(user)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         res.body.should.have.property('errors');
//         res.body.errors.should.have.property('username');
//         res.body.errors.username.have.property('kind').eql('required');
//         done();
//       });
//     });

    // it('it should POST a user', (done) => {
    //   const user = {
    //     email: 'enodi@gmail.com',
    //     password: 'password',
    //     first_name: 'Enodi',
    //     last_name: 'Audu',
    //     username: 'enodi'
    //   }
    //   chai.request(server)
    //   .post('/api/user/signup')
    //   .send(user)
    //   .end((err, res) => {
    //     res.should.have.status(200);
    //     res.body.should.be.a('object');
    //     res.body.should.have.property('message').eql('User created successfully');
    //     res.body.user.should.have.property('username');
    //     res.body.user.should.have.property('email');
    //     res.body.user.should.have.property('first_name');
    //     res.body.user.should.have.property('last_name');
    //     res.body.user.should.have.property('password');
    //     done();
    //   });
    // });
//   });
// });
