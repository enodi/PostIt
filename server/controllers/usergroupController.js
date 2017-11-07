import {
  UserGroup,
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
  static addUser(req, res) {
    User.create({
      GroupId: req.params.group_id,
      UserId: req.body.userId
    })
      .then((userAdded) => {
        if (userAdded) {
          return res.status(201).json(userAdded);
        }
        return res.status(400).json(userAdded);
      })
      .catch(error => res.status(500).json(error));
  }

  /**
   *
   * @static
   * @param {any} req
   * @param {any} res
   * @returns {Object} Promise
   * @memberof UserGroupClass
   */
  static retrieveUsers(req, res) {
    UserGroup.findAll({
      where: { groupId: req.params.group_id }
    })
      .then((group) => {
        res.json(group);
      })
      .catch(error => res.status(400).json(error));
  }

  /**
   *
   * @static
   * @param {any} req
   * @param {any} res
   * @returns {Object} Promise
   * @memberof UserGroupClass
   */
  static retrieveGroups(req, res) {
    const userID = parseInt(req.params.user_id, 10);
    if (isNaN(userID)) {
      return res.status(400).json({
        error: 'Invalid User Id',
      });
    }

    User.findOne({
      where: { id: req.params.user_id },
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
