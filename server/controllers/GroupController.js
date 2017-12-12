import sequelize from 'sequelize';

import { Group, User } from '../models';

/**
 * This class handles group creation
 * @class GroupClass
 */
class GroupClass {

  /**
   * This method handles creating a new group
   * @static
   *
   * @param {object} request
   * @param {object} response
   *
   * @memberof GroupClass
   *
   * @returns {object} Promise
   */
  static create(request, response) {
    const userId = request.decoded.userId;
    Group
      .create({
        name: request.body.name.toLowerCase().trim(),
        description: request.body.description.trim(),
        userId
      })
      .then((groupCreated) => {
        groupCreated.addUser(userId);
        if (groupCreated) {
          const { id,
            name,
            description,
            createdAt } = groupCreated;
          const data = {
            message: 'Group created successfully',
            id,
            name,
            description,
            createdAt
          };
          return response.status(201).send(data);
        }
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

export default GroupClass;
