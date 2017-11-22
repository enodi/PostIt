import { Group, User } from '../models';


/**
 * This class handles retrieving groups
 * @class UserGroupClass
 */
class UserGroupClass {

  /**
   * This method handles retrieving groups
   * @static
   * @param {object} req
   * @param {object} res
   *
   * @returns {object} Promise
   *
   * @memberof UserGroupClass
   */
  static retrieveGroups(req, res) {
    const userID = parseInt(req.params.userId, 10);
    if (isNaN(userID)) {
      return res.status(400).json({
        error: 'Invalid User Id',
      });
    }

    User.findOne({
      where: { id: req.params.userId },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      include: [
        {
          model: Group,
          attributes: ['id', 'name', 'description', 'createdAt', ['UserId', 'ownerId']]
        }
      ]
    }).then((groups) => {
      res.status(200).json({ groups });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Internal server error',
        error
      });
    });
  }
}
export default UserGroupClass;
