import { expect } from 'chai';

import db from '../../models';

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
            expect(message).to.be.an('object');
            expect(message.dataValues)
              .to.have.all.keys('id', 'message', 'priority',
              'updatedAt', 'createdAt', 'UserId', 'GroupId');
          }
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  });

  describe('handles null input', () => {
    it('should return message cannot be null when user passes null input',
      (done) => {
        db.Message.create({
          message: null,
        })
          .then(() => {
            done();
          })
          .catch((error) => {
            expect(error.errors[0].message).to.equal('message cannot be null');
            expect(error.errors).to.be.an('array');
            expect(error.errors[0]).to.have.all.keys('message', 'type',
              'path', 'value');
            done();
          });
      });
  });

  describe('handles updating messages', () => {
    it('should update messages in the database', (done) => {
      db.Message.update({
        message: 'sorry about that',
      }, { where: { message: 'hello all' } })
        .then((messages) => {
          expect(messages).to.be.an('array');
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  });
});
