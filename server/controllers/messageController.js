// Import Message Model
// const Message = require('../models').Message;
import { Message } from '../models';


// Handles posting of messages to user groups
class message {
  static create(req, res) {
    if (!req.body.user_id || !req.body.message) {
      return res.status(401).json('All fields are required');
    }
    Message
      .create({
        userId: req.body.user_id,
        groupId: req.params.group_id,
        message: req.body.message
      })
      .then((messageCreated) => {
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
export default message;
