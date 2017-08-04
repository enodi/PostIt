const userGroup = require('../models').UserGroup;

module.exports = {
  // Handles adding users to broadcast groups
  create(req, res) {
    userGroup.create({
      groupId: req.params.group_id,
      userId: req.body.user_id
    })
    .then((usergroup) => {
      if (usergroup) {
        return res.status(201).json(usergroup); // Return user and group when request is successful
      }
      return res.status(400).json(usergroup);
    })
    .catch(error => res.status(404).json(error));
  },
};
