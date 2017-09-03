const Group = require('../models').Group;
const Validator = require('validatorjs');

const rules = {
  group_name: 'required'
};

module.exports = {
  // Handles creation of broadcast groups
  create(req, res) {
    const validation = new Validator(req.body, rules);
    // if (!req.body.group_name) {
    //   return res.json('All fields are required');
    // }
    if (validation.passes()) {
      Group.findOne({
        where: { groupName: req.body.group_name.toLowerCase() }
      })
      .then((groupExists) => {
        if (groupExists) {
          if (groupExists.groupName === req.body.group_name.toLowerCase()) {
            res.json('Group name already exists');
          }
        }
      })
      Group.create({
        groupName: req.body.group_name.toLowerCase()
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
          return res.status(201).json(data);
        }
        return res.status(400).json(group); // Return 400 upon bad request
      })
      .catch(error => res.status(404).json(error)); // Return 404 when request made wasn't found
    } else if (validation.fails()) {
      res.json(validation.errors.all());
    }
  },
};
