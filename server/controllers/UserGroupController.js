import {
  Group,
  User
} from '../models';


/**
 *
 * @class UserGroupClass
 */
class UserGroupClass {

  /**
   *
   * @static
   * @param {any} req
   * @param {any} res
   * @returns {Object} Promise
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
      res.status(200).json({
        groups
      });
    });
  }
}
export default UserGroupClass;
