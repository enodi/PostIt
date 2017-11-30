import { Group, User } from '../models';


/**
 * This class handles retrieving groups
 * @class UserGroupClass
 */
class UserGroupClass {

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
    const userID = parseInt(request.params.userId, 10);
    if (isNaN(userID)) {
      return response.status(400).json({
        error: 'Invalid User Id',
      });
    }

    User.findOne({
      where: { id: request.params.userId },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      include: [
        {
          model: Group,
          attributes: ['id', 'name', 'description', 'createdAt', ['UserId', 'ownerId']]
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
export default UserGroupClass;
