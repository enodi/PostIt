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
  validateGroup(request, response, next) {
    const validation = new Validator(request.body, rule);
    let {
      name,
      description
    } = request.body;
    name = name.toLowerCase();
    description = description.toLowerCase();

    validation.passes(() => {
      Group.findOne({
        where: {
          name
        }
      }).then((groupExists) => {
        if (groupExists) {
          return response.status(409).json('Group name already exists');
        }
        next();
      });
    });
    validation.fails(() => response.json(validation.errors.all()));
  },

  validateUser(request, response, next) {
    const validation = new Validator(request.body, rules);
    const {
      email,
      username
    } = request.body;

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
          return response.status(409).json('Email or Username already exist');
        }
        next();
      });
    });
    validation.fails(() => response.json(validation.errors.all()));
  },

  validateUserGroup(request, response, next) {
    const validation = new Validator(request.body, userGroupRule);
    const groupId = request.params.group_id;
    const userId = request.body.userId;

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
                        $and: [{ GroupId: request.params.group_id },
                        { UserId: request.body.userId }]
                      }
                    })
                    .then((userExists) => {
                      if (userExists) {
                        return response.status(400).json('User is already a member of this group');
                      }
                      next();
                    });
                }
              });
          }
        });
    });
    validation.fails(() => response.json(validation.errors.all()));
  }
};

export default validations;

