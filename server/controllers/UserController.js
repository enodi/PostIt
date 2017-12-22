import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { User, Group } from '../models';


/**
 * This class handles users account
 * @class UserClass
 */
class UserController {

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
        message: 'All fields are required'
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
   * This method handles retrieving groups
   * @static
   * @param {object} request
   * @param {object} response
   *
   * @returns {object} Promise
   *
   * @memberof UserGroupClass
   */
  static retrieveGroups(request, response) {
    const userId = parseInt(request.params.userId, 10);
    if (isNaN(userId)) {
      return response.status(400).json({
        message: 'Invalid User Id',
      });
    }

    User.findOne({
      where: { id: request.params.userId },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      include: [
        {
          model: Group,
          attributes:
            ['id', 'name', 'description', 'createdAt', ['UserId', 'ownerId']]
        }
      ]
    }).then((groups) => {
      response.status(200).json({ groups });
    })
      .catch(() => {
        response.status(500).json({
          error: 'Internal server error'
        });
      });
  }
}
export default UserController;
