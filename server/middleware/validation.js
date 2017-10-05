import Validator from 'validatorjs';
import { Group, User, UserGroup } from '../models';
import rules from '../validation';

const rule = {
  name: 'required'
};

const userGroupRule = {
  userId: 'required'
};

const validations = {
  validateGroup(req, res, next) {
    const validation = new Validator(req.body, rule);
    let {
      name,
      description
    } = req.body;
    name = name.toLowerCase();
    description = description.toLowerCase();

    validation.passes(() => {
      Group.findOne({
        where: {
          name
        }
      }).then((groupExists) => {
        if (groupExists) {
          return res.status(409).json('Group name already exists');
        }
        next();
      });
    });
    validation.fails(() => res.json(validation.errors.all()));
  },

  validateUser(req, res, next) {
    const validation = new Validator(req.body, rules);
    const {
      email,
      username
    } = req.body;

    validation.passes(() => {
      User.findOne({
        where: {
          $or: [{
            email
          },
          {
            username
          }]
        }
      }).then((userExists) => {
        if (userExists) {
          res.status(409).json('Email or Username already exist');
        }
        next();
      });
    });
    validation.fails(() => res.json(validation.errors.all()));
  },

  validateUserGroup(req, res, next) {
    const validation = new Validator(req.body, userGroupRule);
    const groupId = req.params.group_id;
    const userId = req.body.userId;

    validation.passes(() => {
      User.findById(userId)
        .then((userFound) => {
          if (userFound) {
            // Checks if group exists
            Group.findById(groupId)
              .then((group) => {
                if (group) {
                  // Checks if the user already belongs to the group
                  UserGroup
                    .findOne({
                      where: {
                        $and: [{ GroupId: req.params.group_id },
                        { UserId: req.body.userId }]
                      }
                    })
                    .then((userExists) => {
                      if (userExists) {
                        return res.status(400).json('User is already a member of this group');
                      }
                      next();
                    });
                }
              });
          }
        });
    });
    validation.fails(() => res.json(validation.errors.all()));
  }
};

export default validations;

