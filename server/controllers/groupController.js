const Group = require('../models').Group;

module.exports = {
  // Handles creation of broadcast groups
  create(req, res) {
    if (!req.body.group_name) {
      return res.json('All fields are required');
    }
    Group.create({
      groupName: req.body.group_name
    })
    .then((group) => {
      const id = group.id;
      const groupName = group.groupName;
      const createdAt = group.createdAt;
      if (group) {
        const data = {
          data: [{
            message: 'group created successfully',
            id,
            groupName,
            createdAt
          }]
        };
        return res.status(201).json(data); // Return group if group was created
      }
      return res.status(400).json(group); // Return 400 upon bad request
    })
    .catch(error => res.status(404).json(error)); // Return 404 when request made wasn't found
  },
};
