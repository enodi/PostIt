import supertest from 'supertest';
import { expect } from 'chai';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import app from '../../../index';

dotenv.config();
const request = supertest(app);
let token;

describe('POST /api/v1/user/forgotPassword', () => {
  before((done) => {
    request
      .post('/api/v1/user/signin')
      .send({
        username: 'enodi',
        password: 'password',
      })
      .end((err, response) => {
        expect(response.status).to.equal(200);
        expect(response.body.success).to.equal(true);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.all.keys('success', 'token');
        token = response.body.token;
        done();
      });
  });
  describe('handles sending reset password email', () => {
    it('should return 404 when an invalid email is specified', (done) => {
      request
        .post('/api/v1/user/forgotPassword')
        .send({
          email: 'audu@gmail.com'
        })
        .end((err, response) => {
          expect(response.status).to.equal(404);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.equal('Email doesn\'t exist');
          done();
        });
    });

    it('should return 200 when email is sent successfully', (done) => {
      request
        .post('/api/v1/user/forgotPassword')
        .send({
          email: 'enodiaudu5@gmail.com'
        })
        .end((err, response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message)
            .to.equal('Please check your mail for the reset link');
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
        .end((err, response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.equal('All fields are required');
          done();
        });
    });
    it('should return 409 when password supplied doesn\'t match', (done) => {
      request
        .put('/api/v1/user/resetPassword')
        .send({
          password: 'password',
          confirmPassword: 'hello'
        })
        .end((err, response) => {
          expect(response.status).to.equal(409);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.equal('Password doesn\'t match');
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
        .end((err, response) => {
          expect(response.status).to.equal(401);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.equal('Unauthorized');
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
        .put(`/api/v1/user/resetPassword?token=${tokn}`)
        .send({
          password: 'password',
          confirmPassword: 'password'
        })
        .end((err, response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.equal('Password reset successful');
          done();
        });
    });
  });
});

