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
    validation.fails(() => response.status(400).json({
      message: validation.errors.all()
    }));
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
          return response.status(409).json({
            message: 'Email or Username already exist'
          });
        }
        next();
      });
    });
    validation.fails(() => response.status(400).json({
      message: validation.errors.all()
    }));
  },


  validateUserGroup(request, response, next) {
    const validation = new Validator(request.body, userGroupRule);
    const groupId = request.params.group_id;
    const userId = request.body.userId;

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
                        $and: [{ GroupId: request.params.group_id },
                        { UserId: request.body.userId }]
                      }
                    })
                    .then((userExists) => {
                      if (userExists) {
                        return response.status(409).json('User is already a member of this group');
                      }
                      next();
                    });
                }
              });
          }
        });
    });
    validation.fails(() => response.status(400).json(validation.errors.all()));
  },
  
  validateResetPassword(request, response, next) {
    if (!request.body.password || !request.body.confirmPassword ||
      request.body.password === ' ' || request.body.confirmPassword === ' ') {
      return response.status(400).json({
        message: 'All fields are required'
      });
    }
    if (request.body.password !== request.body.confirmPassword) {
      return response.status(409).json({
        message: 'Password doesn\'t match'
      });
    }
    next();
  }
};

export default validations;

