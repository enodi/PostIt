import { expect } from 'chai';

import db from '../../models';

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
            expect(group).to.be.an('object');
            expect(group.dataValues)
              .to.have.all.keys('id', 'name', 'description',
              'updatedAt', 'createdAt', 'UserId');
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
            expect('Welcome to Andela').to.equal(group.description);
            expect(group).to.be.an('object');
            expect(group.dataValues).to.have.all.keys('id', 'name',
              'description', 'updatedAt', 'createdAt', 'UserId');
          }
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  });

  describe('handles null input', () => {
    it('should return name cannot be null when user passes null input',
      (done) => {
        db.Group.create({
          name: null,
          description: 'Welcome to Andela',
        })
          .then(() => {
            done();
          })
          .catch((error) => {
            expect(error.errors).to.be.an('array');
            expect(error.errors[0].message).to.equal('name cannot be null');
            expect(error.errors[0]).to.have.all.keys('message', 'type',
              'path', 'value');
            done();
          });
      });
  });

  describe('handles updating group information', () => {
    it('should update group details in the database', (done) => {
      db.Group.update({
        name: 'Bootcamp',
      }, { where: { name: 'Andela' } })
        .then((group) => {
          expect(group).to.be.an('array');
          expect(group[0]).to.equal(1);
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  });
});
