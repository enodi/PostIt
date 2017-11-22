import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User, Group } from '../models';


/**
 * This class handles users account
 * @class UserClass
 */
class UserClass {

  /**
   * This method handles registering a new user
   * @static
   *
   * @param {object} req
   * @param {object} res
   *
   * @returns {object} Promise
   *
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
      .catch((error) => {
        res.status(500).json({
          message: 'Internal server error',
          error
        });
      });
  }


  /**
   * This method handles user signin
   * @static
   *
   * @param {object} req
   * @param {object} res
   *
   * @returns {object} Promise
   *
   * @memberof UserClass
   */
  static signIn(req, res) {
    if (!req.body.username || req.body.username === ' '
      || !req.body.password || req.body.password === ' ') {
      return res.status(400).json({
        message: 'Invalid credentials',
      });
    }
    User
      .findOne({
        where: {
          username: req.body.username.trim()
        }
      })
      .then((userFound) => {
        if (!userFound) {
          return res.status(404).send({
            message: 'Invalid credentials'
          });
        }
        const passwordMatched = bcrypt.compareSync(req.body.password.trim(), userFound.password);
        if (!passwordMatched) {
          return res.status(404).send({
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
      .catch((error) => {
        res.status(500).json({
          message: 'Internal server error',
          error
        });
      });
  }

  /**
   * This method handles adding registered users to a group
   * @static
   *
   * @param {object} req
   * @param {object} res
   *
   * @returns {object} promise
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
            return res.status(409).json({
              message: 'User is already a member of the group'
            });
          }
          return res.status(200).json({
            message: 'User added successfully'
          });
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Internal server error',
          error
        });
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Internal server error',
        error
      });
    });
  }

  /**
   * This method handles retrieving all registered users
   * @static
   * @param {object} req
   * @param {object} res
   *
   * @returns {object} Promise
   *
   * @memberof UserClass
   */
  static fetchUsers(req, res) {
    if (!req.query.q) {
      return res.status(404)
        .json({ message: 'query params must be passed' });
    }
    const limit = parseInt(req.query.limit, 10) || 5;
    const offset = parseInt(req.query.offset, 10) || 0;
    User.findAndCountAll({
      where: {
        username: {
          $ilike: `%${req.query.q}%`
        }
      },
      offset,
      limit,
      attributes: {
        exclude:
        ['password', 'createdAt', 'updatedAt']
      }
    })
      .then((retrieveUsers) => {
        res.status(200).json(retrieveUsers);
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Internal server error',
          error
        });
      });
  }
}
export default UserClass;
