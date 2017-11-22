import { Group } from '../models';


/**
 * This class handles group creation
 * @class GroupClass
 */
class GroupClass {

  /**
   * This method handles creating a new group
   * @static
   *
   * @param {object} req
   * @param {object} res
   *
   * @memberof GroupClass
   *
   * @returns {object} Promise
   */
  static create(req, res) {
    const UserId = req.decoded.userId;
    Group
      .create({
        name: req.body.name.toLowerCase().trim(),
        description: req.body.description.trim(),
        UserId
      })
      .then((groupCreated) => {
        groupCreated.addUser(UserId);
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
          return res.status(201).send(data);
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Internal server error',
          error
        });
      });
  }
}

export default GroupClass;

