import Validator from 'validatorjs';
import { Group, User } from '../models';

const rules = {
  name: 'required'
};

class group {
  static create(req, res) {
    const validation = new Validator(req.body, rules);
    if (validation.passes()) {
      Group
        .findOne({
          where: {
            name: req.body.name.toLowerCase()
          }
        })
        .then((groupExists) => {
          if (groupExists) {
            if (groupExists.name === req.body.name.toLowerCase()) {
              console.log(req.decoded, '=========0==')
              
              return res.status(409).json('Group name already exists');
            }
          } else {
            Group
              .create({
                name: req.body.name.toLowerCase(),
                description: req.body.description
              })
              .then((groupCreated) => {
                console.log(req.decoded, '=========1==')
                User.findOne({
                  where: { id: req.decoded.userId }
                }).then((foundUser) => {
                  if (groupCreated) {
                    groupCreated.addUser(foundUser).then(() => {
                console.log('======2=====')
                
                      const id = groupCreated.id;
                      const name = groupCreated.name;
                      const description = groupCreated.description;
                      const createdAt = groupCreated.createdAt;

                      const data = {
                        message: 'Group created successfully',
                        id,
                        name,
                        description,
                        createdAt
                      };
                      return res.status(201).send(data);
                    });
                  }
                });
                console.log('======3=====')
                
                // return res.status(400).send({ error: 'Unsuccessful' }); // Return 400 upon bad request
              })
              .catch((error) => {
                console.log('=====4======')
                
                res.status(501).send(error)}); // Return 501 when request wasn't completed
          }
        })
        .catch((error) => {
          console.log('=====5======')
          
          res.status(501).send(error)});
    } else {
      console.log('=====6======')
      
      return res.json(validation.errors.all());
    }
  }

}

export default group;

