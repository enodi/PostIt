import { Group } from '../models';

class GroupClass {
  static create(req, res) {
    const UserId = req.decoded.userId;
    Group
      .create({
        name: req.body.name.toLowerCase(),
        description: req.body.description,
        UserId
      })
      .then((groupCreated) => {
        if (groupCreated) {
          const { id,
            name,
            description,
            createdAt } = groupCreated;
          const data = {
            message: 'Group created successfully',
            id,
            name,
            description,
            createdAt
          };
          return res.status(201).send(data);
        }
      })
      .catch((error) => {
        res.status(404).send({ error });
      });
  }
}

export default GroupClass;

