import Validator from 'validatorjs';
import { Group, User } from '../models';
import rules from '../validation';

const rule = {
  name: 'required|string',
  description: 'string'
};

const Validations = {
  validateGroup(request, response, next) {
    const validation = new Validator(request.body, rule);
    const { name } = request.body;
    validation.fails(() => response.status(400).json({
      message: validation.errors.all()
    }));
    validation.passes(() => {
      Group.findOne({
        where: {
          name
        }
      }).then((groupExists) => {
        if (groupExists) {
          return response.status(409)
            .json('Group name already exists');
        }
        next();
      });
    });
  },


  validateUser(request, response, next) {
    const validation = new Validator(request.body, rules);
    const { email, username } = request.body;

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

  validateResetPassword(request, response, next) {
    if (!request.body.password || !request.body.confirmPassword) {
      return response.status(400).json({
        message: 'All fields are required'
      });
    }
    if (request.body.password.trim() !== request.body.confirmPassword.trim()) {
      return response.status(409).json({
        message: 'Password doesn\'t match'
      });
    }
    next();
  }
};

export default Validations;

