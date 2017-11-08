import { Message, User } from '../models';

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
    const UserId = req.decoded.userId;
    Message
      .create({ UserId, GroupId: req.params.groupId, message: req.body.message, priority: req.body.priority })
      .then((messageCreated) => {
        if (messageCreated) {
          return res
            .status(201)
            .json({ message: 'message posted successfully', messageCreated });
        }
        return res
          .status(400)
          .json({ error: 'message not created' });
      })
      .catch(error => res.status(500).json(error));
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
