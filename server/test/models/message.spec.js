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
