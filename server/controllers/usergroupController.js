const userGroup = require('../models').UserGroup;
const Group = require('../models').Group;
const User = require('../models').User;
const Validator = require('validatorjs');

const rules = {
  user_id: 'required'
};

module.exports = {
  // Adds a new user to a group
  create(req, res) {
    const validation = new Validator(req.body, rules);
    const groupID = req.params.group_id;
    const userID = req.body.user_id;
    // Checks field for validation
    // If field is not empty, it passes validation
    if (validation.passes()) {
      // Checks if user exists
      User.findById(userID)
      .then((user) => {
        if (user) {
          // Checks if group exists
          Group.findById(groupID)
          .then((group) => {
            if (group) {
              // Checks if the user already belongs to the group
              userGroup.findOne({
                where: {
                  $and: [{ groupId: req.params.group_id },
                     { userId: req.body.user_id }]
                }
              })
              .then((userExists) => {
                if (!userExists) {
                  // Create a new user if user is not a member of the group
                  userGroup.create({
                    groupId: req.params.group_id,
                    userId: req.body.user_id
                  })
                  .then((usergroup) => {
                    if (usergroup) {
                      // Return user and group data when request is successful
                      return res.status(201).json(usergroup);
                    }
                    return res.status(400).json(usergroup);
                  })
                  .catch(error => res.status(404).json(error));
                } else {
                  // Return error message if the user is already
                  // a member of the group
                  return res.status(400).json('User is already a member of this group');
                }
              });
            } else {
              return res.status(400).json('Group does not exist');
            }
          });
        } else {
          return res.status(400).json('User does not exist');
        }
      });
    } else if (validation.fails()) {
      res.json(validation.errors.all());
    }
  },

  // Retieves all users that belong to a particular group
  retrieveUsers(req, res) {
    userGroup.findAll({
      where: { groupId: req.params.group_id }
    })
    .then((group) => {
      res.json(group);
    })
    .catch(error => res.status(400).json(error));
  },

  // Retrives all groups a particular user belongs to
  retrieveGroups(req, res) {
    userGroup.findAll({
      where: { userId: req.params.user_id }
    })
    .then((usergroup) => {
      res.json(usergroup);
    })
    .catch(error => res.status(400).json(error));
  },
};
