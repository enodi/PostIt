import { Group } from '../models';


/**
 *
 * @class GroupClass
 */
class GroupClass {

  /**
   * @static
   * @param {any} req
   * @param {any} res
   * @memberof GroupClass
   * @returns {Object} Promise
   */
  static create(req, res) {
    const UserId = req.decoded.userId;
    Group
      .create({
        name: req.body.name.toLowerCase(),
        description: req.body.description,
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
        res.status(500).send({ error });
      });
  }
}

export default GroupClass;

