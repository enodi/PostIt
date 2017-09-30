import Validator from 'validatorjs';
import { Group, User } from '../models';

const rules = {
  name: 'required'
};

const validations = {
  validateGroup(request, response, next) {
    const validation = new Validator(request.body, rules);
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
  }
};
export default validations;

