import Notification from '../middleware/Notification';
import { Message, User, Group } from '../models';

/**
 * This class handles messages
 * @class MessageClass
 */
class MessageController {

  /**
   * This method handles posting of messages in a group
   * @static
   *
   * @param {object} request
   * @param {object} response
   *
   * @returns {object} Promise
   *
   * @memberof MessageClass
   */
  static create(request, response) {
    if (!request.body.message || !request.body.priority) {
      return response.status(400).json({
        message: 'All fields are required'
      });
    }
    const { userId, email, username } = request.decoded;
    Message
      .create({
        UserId: userId,
        GroupId: request.params.groupId,
        message: request.body.message,
        priority: request.body.priority
      })
      .then((messageCreated) => {
        if (messageCreated.priority === 'critical' ||
          messageCreated.priority === 'urgent') {
          Group.findById(request.params.groupId)
            .then((group) => {
              group.getUsers().then((users) => {
                users.forEach((user) => {
                  if (email !== user.email) {
                    Notification(user, username, group);
                  }
                });
              });
            });
        }
        return response.status(201).json({
          message: 'message posted successfully',
          messageCreated
        });
      })
      .catch(() => response.status(500)
        .json({ error: 'Internal server error' }));
  }

  /**
   * This method handles retrieving messages in a group
   * @static
   *
   * @param {object} request
   * @param {object} response
   *
   * @returns {object} Promise
   *
   * @memberof MessageClass
   */
  static retrieve(request, response) {
    Message.findAll({
      where: {
        GroupId: request.params.groupId
      },
      include: [
        {
          model: User,
          attributes: [
            'id',
            'username',
            'fullname',
            'email'
          ]
        }
      ]
    }).then((messageRetrieved) => {
      response.status(200).json({
        message: 'messages retrieved',
        messageRetrieved
      });
    }).catch(() => response.status(500)
      .json({ error: 'Internal server error' }));
  }
}
export default MessageController;
