const rules = require('../validation');
const User = require('../models').User;
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt-nodejs');
// const Validator = require('validator');
// const isEmpty = require('lodash/isEmpty');
const Validator = require('validatorjs');

module.exports = {
  // Handles user registration
  signUp(req, res) {
    const data = req.body;
    const errors = {
      'required.username': 'Username field is required',
      'min.username': 'Username must be atleast 4 characters',
      'required.email': 'Email field is required'
    };
    const validation = new Validator(data, rules, errors);
    // Handle user signup if validation passes
    if (validation.passes()) {
      User.findOne({
        where: {
          $or: [{ email: req.body.email }, { username: req.body.username }]
        }
      })
      .then((userExists) => {
        if (userExists) {
          if (userExists.email === req.body.email) {
            res.status(400).json('Email already exists');
          }
          if (userExists.username === req.body.username) {
            res.status(400).json('Username already exists');
          }
        } else {
          User.create({
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          })
          .then((user) => {
            const id = user.id;
            const username = user.username;
            const email = user.email;
            const firstName = user.firstName;
            const lastName = user.lastName;
            const createdAt = user.createdAt;
            if (user) {
              const data1 = {
                message: 'User created successfully',
                id,
                username,
                email,
                firstName,
                lastName,
                createdAt
              };
              return res.status(201).send(data1);
            }
            const data1 = {
              error: [{
                status: 400,
                detail: 'User not created'
              }]
            };
            return res.status(400).send(data1);
          })
          .catch(error => res.status(404).send(error));
        }
      });
    } else if (validation.fails()) {
      res.json(validation.errors.all());
    }
    // Ensures that username, password and email fields are not empty
    // if (!req.body.username || req.body.username.trim() === '') {
    //   return res.json('username is required');
    // } else if (!req.body.email || req.body.email.trim() === '') {
    //   return res.json('email is required');
    // } else if (!req.body.password || req.body.password.trim() === '') {
    //   return res.json('password is required');
    // }
  },

  signIn(req, res) {
    // Handles user login
    User.findOne({ where: { username: req.body.username } })
   .then((user) => {
     if (!user) {
       return res.status(401).send({ error: 'Invalid credentials' });
     }
    //  // Compares password collected from user with password in database
    //  const passwordMatched = bcrypt.compareSync(req.body.password, user.password);
    //  if (!passwordMatched) {
    //    // If password provided doesn't match password in database, return password doesn't match
    //    return res.json({ error: 'Password does not match' });
    //  }
     // If password provided matches password in database, generate user token
     const token1 = jwt.sign({ username: user.username }, 'Andela', {
       expiresIn: '10h'
     });
     return res.json({
       success: true,
       message: 'Login successful',
       token: token1
     });
   })
   .catch(err => res.send(err));
  },
};
