import Validator from 'validatorjs';
import { Group, User, UserGroup } from '../models';
import rules from '../validation';

const rule = {
  name: 'required'
};

const userGroupRule = {
  userId: 'required'
};

// handles validations
const validations = {
  // handles group validation
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
    validation.fails(() => res.status(400).json(validation.errors.all()));
  },

  // handles user validation
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
          return res.status(409).json({
            message: 'Email or Username already exist'
          });
        }
        next();
      });
    });
    validation.fails(() => res.status(400).json(validation.errors.all()));
  },


  // handles user validation when adding a new user to group
  validateUserGroup(req, res, next) {
    const validation = new Validator(req.body, userGroupRule);
    const groupId = req.params.group_id;
    const userId = req.body.userId;

    validation.passes(() => {
      User.findById(userId)
        .then((userFound) => {
          if (userFound) {
            Group.findById(groupId)
              .then((group) => {
                if (group) {
                  UserGroup
                    .findOne({
                      where: {
                        $and: [{ GroupId: req.params.group_id },
                        { UserId: req.body.userId }]
                      }
                    })
                    .then((userExists) => {
                      if (userExists) {
                        return res.status(409).json('User is already a member of this group');
                      }
                      next();
                    });
                }
              });
          }
        });
    });
    validation.fails(() => res.status(400).json(validation.errors.all()));
  },

  // handles reset password validation
  validateResetPassword(req, res, next) {
    if (!req.body.password || !req.body.confirmPassword ||
      req.body.password === ' ' || req.body.confirmPassword === ' ') {
      return res.status(400).json({
        message: 'All fields are required'
      });
    }
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(422).json({
        message: 'Password doesn\'t match'
      });
    }
    next();
  }
};

export default validations;

