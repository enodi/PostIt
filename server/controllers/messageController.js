import { Message } from '../models';


// Handles posting of messages to user groups
class MessageClass {
  static create(req, res) {
    if (!req.body.message || !req.body.priority) {
      return res.status(422).json('All fields are required');
    }
    const UserId = req.decoded.userId;
    Message
      .create({
        UserId,
        GroupId: req.params.group_id,
        message: req.body.message,
        priority: req.body.priority
      })
      .then((messageCreated) => {
        // messageCreated.addUser(UserId);
        if (messageCreated) {
          // Return message if message was posted successfully
          return res.status(201).json(messageCreated);
        }
        // Return 400 upon bad request
        return res.status(400).json({ error: 'message not created' });
      })
      // Return 400 when request isn't found
      .catch(error => res.status(404).json(error));
  }

  // Handles retrieving of messages posted to user groups
  static retrieve(req, res) {
    Message.findAll({
      where: { groupId: req.params.group_id }
    })
      .then((messageRetrieved) => {
        res.status(200).json(messageRetrieved);
      })
      .catch(error => res.status(400).json(error));
  }
}
export default MessageClass;
