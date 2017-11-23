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
   * @param {object} request
   * @param {object} response
   *
   * @memberof GroupClass
   *
   * @returns {object} Promise
   */
  static create(request, response) {
    const UserId = request.decoded.userId;
    Group
      .create({
        name: request.body.name.toLowerCase().trim(),
        description: request.body.description.trim(),
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
}

export default GroupClass;

