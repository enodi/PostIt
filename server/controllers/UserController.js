import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import sequelize from 'sequelize';

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
   * @param {object} request
   * @param {object} response
   *
   * @returns {object} Promise
   *
   * @memberof UserClass
   */
  static signUp(request, response) {
    User
      .create({
        fullname: request.body.fullname.trim(),
        username: request.body.username.trim(),
        email: request.body.email.trim(),
        password: request.body.password.trim()
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
          return response.status(201).send(user);
        }
      })
      .catch(() => {
        response.status(500).json({
          error: 'Internal server error'
        });
      });
  }


  /**
   * This method handles user signin
   * @static
   *
   * @param {object} request
   * @param {object} response
   *
   * @returns {object} Promise
   *
   * @memberof UserClass
   */
  static signIn(request, response) {
    if (!request.body.username || !request.body.password) {
      return response.status(400).json({
        message: 'Invalid credentials'
      });
    }
    User
      .findOne({
        where: {
          username: request.body.username.trim()
        }
      })
      .then((userFound) => {
        if (!userFound) {
          return response.status(404).send({
            message: 'Invalid credentials'
          });
        }
        const passwordMatched =
        bcrypt.compareSync(request.body.password.trim(), userFound.password);
        if (!passwordMatched) {
          return response.status(404).send({
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
        return response.status(200).send({
          success: true,
          token
        });
      })
      .catch((error) => {
        response.status(500).json({
          message: 'Internal server error',
          error
        });
      });
  }

  /**
   * This method handles adding registered users to a group
   * @static
   *
   * @param {object} request
   * @param {object} response
   *
   * @returns {object} promise
   * @memberof UserClass
   */
  static addUsers(request, response) {
    if (!request.body.userId) {
      return response.status(400).json({
        message: 'No user selected'
      });
    }
    Group.findOne({
      where: {
        id: request.params.groupId
      }
    }).then((foundGroup) => {
      if (!foundGroup) {
        return response.status(404).json({
          message: 'Group doesn\'t exist'
        });
      }
      User.findOne({
        where: {
          id: request.body.userId
        }
      }).then((foundUser) => {
        if (!foundUser) {
          return response.status(404).json({
            message: 'User not found'
          });
        }
        foundGroup.addUser(foundUser).then((addedUser) => {
          if (addedUser.length === 0) {
            return response.status(409).json({
              message: 'User is already a member of the group'
            });
          }
          return response.status(200).json({
            message: 'User added successfully'
          });
        });
      })
      .catch((error) => {
        response.status(500).json({
          message: 'Internal server error',
          error
        });
      });
    })
    .catch((error) => {
      response.status(500).json({
        message: 'Internal server error',
        error
      });
    });
  }

  /**
   * This method handles retrieving all registered users
   * @static
   * @param {object} request
   * @param {object} response
   *
   * @returns {object} Promise
   *
   * @memberof UserClass
   */
  static searchUsers(request, response) {
    if (!request.query.q) {
      return response.status(404)
        .json({ message: 'query params must be passed' });
    }
    const limit = parseInt(request.query.limit, 10) || 5;
    const offset = parseInt(request.query.offset, 10) || 0;
    User.findAndCountAll({
      where: {
        username: {
          $ilike: `%${request.query.q}%`
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
        response.status(200).json(retrieveUsers);
      })
      .catch((error) => {
        response.status(500).json({
          message: 'Internal server error',
          error
        });
      });
  }

  /**
   * This method handles retrieving users in a group
   * @static
   *
   * @param  {object} request sends a request to get groupId
   * @param  {object} response sends a response with the corresponding message
   * from the request object
   *
   * @return {object} Promise
   *
   * @memberof UserClass
   * @method fetchUsers
   */
  static fetchUsers(request, response) {
    const UserId = request.decoded.userId;
    const groupID = parseInt(request.params.groupId, 10);
    if (!groupID) {
      return response.status(400).json({
        message: 'Please specify a groupId'
      });
    }
    Group.findOne({
      where: { id: request.params.groupId },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    })
    .then((groupCheck) => {
      if (!groupCheck) {
        return response.status(404).json({
          message: 'Group doesn\'t exist'
        });
      }
      groupCheck.getUsers({
        order: [
          [sequelize.fn('lower', sequelize.col('fullname'))]
        ],
        where: {
          id: {
            $not: UserId
          }
        }
      }).then((groupUsers) => {
        response.status(200).json({
          message: (groupUsers.length >= 1) ?
          'Users retrieved successfully'
          : 'No other user exist in the group',
          groupUsers
        });
      }).catch(() => {
        response.status(500).json({
          error: 'Internal server error'
        });
      });
    })
    .catch(() => {
      response.status(500).json({
        error: 'Internal server error'
      });
    });
  }
}
export default UserClass;
