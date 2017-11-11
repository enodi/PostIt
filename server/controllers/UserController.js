import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User, Group } from '../models';


/**
 *
 * @class UserClass
 */
class UserClass {

  /**
   *
   * @static
   * @param {any} req
   * @param {any} res
   * @returns {Object} Promise
   * @memberof UserClass
   */
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
              username: userCreated.username,
              email: userCreated.email
            }, process.env.JWT_SECRET, {
              expiresIn: process.env.JWT_EXPIRY_TIME
            });
          const user = {
            message: 'Signup successful',
            id,
            username,
            email,
            fullname,
            token
          };
          return res.status(201).send(user);
        }
      })
      .catch(error => res.status(500).send(error));
  }


  /**
   *
   * @static
   * @param {any} req
   * @param {any} res
   * @returns {Object} Promise
   * @memberof UserClass
   */
  static signIn(req, res) {
    if (!req.body.username || req.body.username === ' '
      || !req.body.password || req.body.password === ' ') {
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
          return res.status(404).send({
            message: 'Invalid credentials'
          });
        }
        const passwordMatched = bcrypt.compareSync(req.body.password, userFound.password);
        if (!passwordMatched) {
          return res.status(422).send({
            message: 'Invalid credentials'
          });
        }
        const token = jwt
          .sign({
            username: userFound.username,
            userId: userFound.id,
            email: userFound.email
          }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRY_TIME
          });
        return res.status(200).send({
          success: true,
          token
        });
      })
      .catch(err => res.send(err));
  }

  /**
   *
   *
   * @static
   * @param {any} req
   * @param {any} res
   * @returns
   * @memberof UserClass
   */
  static addUsers(req, res) {
    if (!req.body.userId) {
      return res.status(400).json({
        message: 'No user selected'
      });
    }
    Group.findOne({
      where: {
        id: req.params.groupId
      }
    }).then((foundGroup) => {
      if (!foundGroup) {
        return res.status(404).json({
          message: 'Group doesn\'t exist'
        });
      }
      User.findOne({
        where: {
          id: req.body.userId
        }
      }).then((foundUser) => {
        if (!foundUser) {
          return res.status(404).json({
            message: 'User not found'
          });
        }
        foundGroup.addUser(foundUser).then((addedUser) => {
          if (addedUser.length === 0) {
            return res.status(422).json({
              message: 'User is already a member of the group'
            });
          }
          return res.status(200).json({
            message: 'User added successfully'
          });
        });
      })
      .catch(error => res.status(500).json({
        err: error.response.data
      }));
    })
    .catch(error => res.status(500).json({
      err: error.response.data
    }));
  }

  /**
   *
   * @static
   * @param {any} req
   * @param {any} res
   * @returns {Object} Promise
   * @memberof UserClass
   */
  static fetchUsers(req, res) {
    if (!req.query.q) {
      return res.status(422)
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
      .catch(error => res.status(500).json(error));
  }
}
export default UserClass;
