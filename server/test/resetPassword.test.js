import supertest from 'supertest';
import { expect } from 'chai';
import dotenv from 'dotenv';
import app from '../../index';

const request = supertest(app);
dotenv.config();

describe('POST /api/v1/user/forgotPassword', () => {
  describe('handles sending reset password email', () => {
    it('should return 400 when no email is supplied', (done) => {
      request
      .post('/api/v1/user/forgotPassword')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
    });
    it('should return 404 when an invalid email is specified', (done) => {
      request
      .post('/api/v1/user/forgotPassword')
      .send({
        email: 'audu@gmail.com'
      })
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
    });
    it('should return 400 when user passes whitespaces in email field', (done) => {
      request
      .post('/api/v1/user/forgotPassword')
      .send({
        email: ' '
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
    });
  });
});

describe('PUT /api/v1/user/resetPassword', () => {
  describe('handles resetting user password', () => {
    it('should return 400 when no password is supplied', (done) => {
      request
      .put('/api/v1/user/resetPassword')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
    });
    it('should return 422 when password supplied doesn\'t match', (done) => {
      request
      .put('/api/v1/user/resetPassword')
      .send({
        password: 'password',
        confirmPassword: 'hello'
      })
      .end((err, res) => {
        expect(res.status).to.equal(422);
        done();
      });
    });
    it('should return 401 when no token is supplied', (done) => {
      request
      .put('/api/v1/user/resetPassword')
      .send({
        password: 'password',
        confirmPassword: 'password'
      })
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
    });
  });
});

