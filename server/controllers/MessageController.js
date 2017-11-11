import sendNotification from '../middleware/notification';
import { Message, User, Group } from '../models';

/**
 *
 * @class MessageClass
 */
class MessageClass {

  /**
   *
   * @static
   * @param {any} req
   * @param {any} res
   * @returns {Object} Promise
   * @memberof MessageClass
   */
  static create(req, res) {
    if (!req.body.message || !req.body.priority) {
      return res
        .status(400)
        .json('All fields are required');
    }
    const { userId, email, username } = req.decoded;
    Message
      .create({ UserId: userId, GroupId: req.params.groupId, message: req.body.message, priority: req.body.priority })
      .then((messageCreated) => {
        if (messageCreated.priority === 'critical' || messageCreated.priority === 'urgent') {
          Group.findById(req.params.groupId)
          .then((group) => {
            group.getUsers().then((users) => {
              users.forEach((user) => {
                if (email !== user.email) {
                  sendNotification(user, username, group);
                }
              });
            });
          });
        }
        return res.status(201)
        .json({ message: 'message posted successfully', messageCreated });
      })
      .catch(() => res
        .status(400)
        .json({ error: 'message not created' }));
  }

  /**
   *
   * @static
   * @param {any} req
   * @param {any} res
   * @returns {Object} Promise
   * @memberof MessageClass
   */
  static retrieve(req, res) {
    Message.findAll({
      where: {
        GroupId: req.params.groupId
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
      res
        .status(200)
        .json(messageRetrieved);
    }).catch(error => res.status(500).json(error));
  }
}
export default MessageClass;
