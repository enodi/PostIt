const rules = require('../validation');
const User = require('../models').User;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const Validator = require('validatorjs');

module.exports = {
  // Handles user registration
  signUp(req, res) {
    const data = req.body;
    const validation = new Validator(data, rules);
    // Handle user signup if validation passes
    if (validation.passes()) {
      User.findOne({
        where: {
          $or: [{
            email: req.body.email
          }, {
            username: req.body.username
          }]
        }
      })
        .then((userExists) => {
          if (userExists) {
            if (userExists.email === req.body.email) {
              return res.status(400).json({
                message: 'Email already exists'
              });
            }
            if (userExists.username === req.body.username) {
              return res.status(400).json({
                message: 'Username already exists'
              });
            }
          } else {
            User.create({
              fullname: req.body.fullname,
              username: req.body.username,
              email: req.body.email,
              password: req.body.password
            })
              .then((user) => {
                const id = user.id;
                const username = user.username;
                const email = user.email;
                const fullname = user.fullname;
                if (user) {
                  const token = jwt.sign({
                    id: user.id,
                    username: user.username
                  }, 'Andela', {
                      expiresIn: '10h'
                    });
                  const data1 = {
                    message: 'User created successfully',
                    id,
                    username,
                    email,
                    fullname,
                    token
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
  },

  signIn(req, res) {
    const username = req.body.username || null;
    const password = req.body.password || null;
    if (!username || !password) {
      return res.status(401).json({
        message: 'Invalid credentials',
      });
    }
    // Handles user login
    User.findOne({
      where: {
        username: req.body.username
      }
    })
      .then((user) => {
        if (!user) {
          return res.status(401).send({
            message: 'Invalid credentials'
          });
        }
        // Compares password collected from user with password in database
        const passwordMatched = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordMatched) {
          // If password provided doesn't match password in database, return password doesn't match
          return res.status(401).send({
            message: 'Invalid credentials'
          });
        }
        // If password provided matches password in database, generate user token
        const token1 = jwt.sign({
          username: user.username
        }, 'Andela', {
            expiresIn: '10h'
          });
        return res.send({
          success: true,
          message: 'Login successful',
          token: token1
        });
      })
      .catch(err => res.send(err));
  },
};
