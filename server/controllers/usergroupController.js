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
  static create(req, res) {
    UserGroup
      .create({
        GroupId: req.params.group_id,
        UserId: req.body.userId
      })
      .then((usergroupCreated) => {
        if (usergroupCreated) {
          // Return user and group data when request is successful
          return res.status(201).json(usergroupCreated);
        }
        return res.status(400).json(usergroupCreated);
      })
      .catch(error => res.status(404).json(error));
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
      return res.status(404).json({
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
