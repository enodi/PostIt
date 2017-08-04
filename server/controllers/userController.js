const User = require('../models').User;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  signUp(req, res) {
    if (!req.body.username) {
      return res.json('username is required');
    } else if (!req.body.email) {
      return res.json('email is required');
    } else if (!req.body.password) {
      return res.json('password is required');
    }
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
        const data = {
          message: 'User created successfully',
          id,
          username,
          email,
          firstName,
          lastName,
          createdAt
        };
        return res.status(201).send(data);
      }
      const data = {
        error: [{
          status: 400,
          detail: 'User not created'
        }]
      };
      return res.status(400).send(data);
    })
    .catch(error => res.status(404).send(error));
  },

  signIn(req, res) {
    // Handles user login
    User.findOne({ where: { username: req.body.username } })
   .then((user) => {
     if (!user) {
       return res.json('Invalid Username');
     }
     // Compares password collected from user with password in database
     const passwordMatched = bcrypt.compareSync(req.body.password, user.password);
     if (!passwordMatched) {
       return res.json('Password not matched');
     }
     const token1 = jwt.sign({ username: user.username }, 'Andela', {
       expiresIn: 720
     });
     return res.json({
       success: true,
       message: 'Welcome',
       token: token1
     });
   })
   .catch(err => res.json(err));
  },
};
