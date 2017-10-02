import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs';
import { User } from '../models';

class UserClass {
  static signUp(req, res) {
    User
      .create({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then((userCreated) => {
        if (userCreated) {
          const { id,
            username,
            email,
            fullname } = userCreated;
          const token = jwt
            .sign({
              userId: userCreated.id,
              username: userCreated.username
            }, process.env.JWT_SECRET, {
              expiresIn: '10h'
            });
          const user = {
            message: 'User created successfully',
            id,
            username,
            email,
            fullname,
            token
          };
          return res.status(201).send(user);
        }
        const data1 = {
          error: [{
            detail: 'User not created'
          }]
        };
        return res.status(400).send(data1);
      })
      .catch(error => res.status(501).send(error));
  }

  static signIn(req, res) {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({
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
          return res.status(409).send({
            message: 'Invalid credentials'
          });
        }
        // Compares password collected from user with password in database
        const passwordMatched = bcrypt.compareSync(req.body.password, userFound.password);
        if (!passwordMatched) {
          // If password provided doesn't match password in database, return password doesn't match
          return res.status(409).send({
            message: 'Invalid credentials'
          });
        }
        // If password provided matches password in database, generate user token
        const token = jwt
          .sign({
            username: userFound.username,
            userId: userFound.id,
          }, process.env.JWT_SECRET, {
            expiresIn: '10h'
          });
        return res.send({
          success: true,
          token
        });
      })
      .catch(err => res.send(err));
  }

  static fetchUsers(req, res) {
    if (!req.query.q) {
      return res.status(400)
        .json({ message: 'query params must be passed' });
    }
    User.findAll({
      where: {
        username: {
          $ilike: `%${req.query.q}%`
        }
      },
      attributes: {
        exclude:
        ['password', 'createdAt', 'updatedAt']
      }
    })
      .then((retrieveUsers) => {
        res.status(200).json(retrieveUsers);
      })
      .catch(error => res.status(400).json(error));
  }
}
export default UserClass;
