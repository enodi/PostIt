import Validator from 'validatorjs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs';
import { User } from '../models';

import rules from '../validation';

class UserClass {
  // Handles user registration
  static signUp(req, res) {
    const data = req.body;
    const validation = new Validator(data, rules);

    if (validation.fails()) {
      res.json(validation.errors.all());
    }

    User
    .findOne({
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
          return res.status(409).json({
            message: 'Email already exists'
          });
        }
        if (userExists.username === req.body.username) {
          return res.status(409).json({
            message: 'Username already exists'
          });
        }
      }
      User
        .create({
          fullname: req.body.fullname,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })
        .then((userCreated) => {
          if (userCreated) {
            const id = userCreated.id;
            const username = userCreated.username;
            const email = userCreated.email;
            const fullname = userCreated.fullname;
            const token = jwt
              .sign({
                userId: userCreated.id,
                username: userCreated.username
              }, process.env.JWT_SECRET, {
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
          .catch(error => res.status(501).send(error));
    })
    .catch(error => res.status(501).send(error));
  }

  static signIn(req, res) {
    if (!req.body.username || !req.body.password) {
      return res.status(401).json({
        message: 'Invalid credentials',
      });
    }
    // Handles user login
    User
      .findOne({
        where: {
          username: req.body.username
        }
      })
      .then((userFound) => {
        if (!userFound) {
          return res.status(400).send({
            message: 'Invalid credentials'
          });
        }
        // Compares password collected from user with password in database
        const passwordMatched = bcrypt.compareSync(req.body.password, userFound.password);
        if (!passwordMatched) {
          // If password provided doesn't match password in database, return password doesn't match
          return res.status(401).send({
            message: 'Invalid credentials'
          });
        }
        // If password provided matches password in database, generate user token
        const token1 = jwt
          .sign({
            username: userFound.username,
            userId: userFound.id,
          }, process.env.JWT_SECRET, {
            expiresIn: '10h'
          });
        return res.send({
          success: true,
          message: 'Login successful',
          token: token1
        });
      })
      .catch(err => res.send(err));
  }
}
export default UserClass;
