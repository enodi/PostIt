// Import Message Model
const Message = require('../models').Message;

module.exports = {
  // Handles posting of messages to user groups
  create(req, res) {
    if (!req.body.user_id || !req.body.message) {
      return res.json('All fields are required');
    }
    Message.create({
      userId: req.body.user_id,
      groupId: req.params.group_id,
      message: req.body.message
    })
    .then((message) => {
      if (message) {
        return res.status(201).json(message); // Return message if message was posted successfully
      }
      return res.status(400).json(message); // Return 400 upon bad request
    })
    .catch(error => res.status(404).json(error)); // Return 400 when request isn't found
  },

  // Handles retrieving of messages posted to user groups
  retrieve(req, res) {
    return Message
    .findAll({ limit: 5 },
      { where: { groupId: req.params.group_id } }
    )
    .then((message) => {
      res.json(message);
    })
    .catch(error => res.status(400).json(error));
  },

};
