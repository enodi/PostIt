// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const db = require('../models');

// const expect = require('expect');

// chai.use(chaiHttp);

// describe('User Model test', () => {
//   beforeEach((done) => {
//     db.User.destroy({ where: {} }, { truncate: true }).then((destroyed) => {
//       if (destroyed) {
//         console.log('deleted');
//       }
//       done();
//     });
//   });
//   it('should create new user', (done) => {
//     // Drops table and recreates it afterwards
//     db.User.sync({ force: true }).then(() => {
//       db.User.create({ username: 'enodi', email: 'enodi@gmail.com', password: 'password' })
//         .then((user) => {
//           if (user) {
//             expect('enodi').toBe(user.dataValues.username);
//             expect('enodi@gmail.com').toBe(user.dataValues.email);
//           }
//           done();
//         }).catch((err) => { done(err); });
//     });
//   });
//   it('should create a new group', (done) => {
//     db.Group.sync({ force: true }).then(() => {
//       db.Group.create({ groupName: 'general' })
//       .then((group) => {
//         if (group) {
//           expect('general').toBe(group.dataValues.groupName);
//         }
//         done();
//       }).catch((err) => { done(err); });
//     });
//   });
//   it('should create a new message', (done) => {
//     db.Message.sync({ force: true }).then(() => {
//       db.Message.create({ message: 'hello', userId: 1, groupId: 1 })
//       .then((message) => {
//         if (message) {
//           expect('hello').toBe(message.dataValues.message);
//           expect(1).toBe(message.dataValues.userId);
//           expect(1).toBe(message.dataValues.groupId);
//         }
//         done();
//       }).catch((err) => { done(err); });
//     });
//   });
//   it('should add user to group', (done) => {
//     db.UserGroup.sync({ force: true }).then(() => {
//       db.UserGroup.create({ userId: 1, groupId: 1 })
//       .then((usergroup) => {
//         if (usergroup) {
//           expect(1).toBe(usergroup.dataValues.userId);
//           expect(1).toBe(usergroup.dataValues.groupId);
//         }
//         done();
//       }).catch((err) => { done(err); });
//     });
//   });
// });
