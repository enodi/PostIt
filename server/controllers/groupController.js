const Group = require('../models').Group;
const Validator = require('validatorjs');

const rules = {
  name: 'required'
};

module.exports = {
  // Handles creation of broadcast groups
  create(req, res) {
    const validation = new Validator(req.body, rules);
    if (validation.passes()) {
      Group.findOne({
          where: {
            name: req.body.name.toLowerCase()
          }
        })
        .then((groupExists) => {
          if (groupExists) {
            if (groupExists.name === req.body.name.toLowerCase()) {
              res.status(409).json('Group name already exists');
            }
          } else {
            Group.create({
                name: req.body.name.toLowerCase(),
                description: req.body.description
              })
              .then((group) => {
                const id = group.id;
                const name = group.name;
                const description = group.description;
                const createdAt = group.createdAt;
                if (group) {
                  const data = {
                    message: 'Group created successfully',
                    id,
                    name,
                    description,
                    createdAt
                  };
                  return res.status(201).send(data);
                }
                return res.status(400).send(group); // Return 400 upon bad request
              })
              .catch(error => res.status(404).send(error)); // Return 404 when request made wasn't found
          }
        });
    } else if (validation.fails()) {
      res.json(validation.errors.all());
    }
  },
};
