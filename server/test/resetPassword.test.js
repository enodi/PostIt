import supertest from 'supertest';
import { expect } from 'chai';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import app from '../../index';

const request = supertest(app);
dotenv.config();
let token;

describe('POST /api/v1/user/forgotPassword', () => {
  before((done) => {
    request
    .post('/api/v1/user/signup')
    .send({
      username: 'enodi456',
      email: 'enodiaudu5@gmail.com.ng',
      fullname: 'Enodi Audu',
      password: 'password',
    })
    .end((err, res) => {
      token = res.body.token;
      done();
    });
  });
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
    it('should return 200 when email is sent successfully', (done) => {
      request
      .post('/api/v1/user/forgotPassword')
      .send({
        email: 'enodiaudu5@gmail.com.ng'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
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
    it('should return 400 when whitespace is supplied to any field', (done) => {
      request
      .put('/api/v1/user/resetPassword')
      .send({
        password: 'password',
        confirmPassword: ' '
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
    });
    it('should return 400 when whitespace is supplied to both fields', (done) => {
      request
      .put('/api/v1/user/resetPassword')
      .send({
        password: ' ',
        confirmPassword: ' '
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
    });
    it('should return 400 when only one password is supplied', (done) => {
      request
      .put('/api/v1/user/resetPassword')
      .send({
        password: ' ',
      })
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
    it('should return 200 on successful password reset', (done) => {
      const tokn = jwt.sign({
        email: 'enodiaudu5@gmail.com.ng'
      }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY_TIME
      });
      request
      .put(`/api/v1/user/resetPassword?tokn=${tokn}`)
      .send({
        password: 'password',
        confirmPassword: 'password'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
    });
  });
});

