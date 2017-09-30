import Validator from 'validatorjs';
import {
  UserGroup,
  Group,
  User
} from '../models';


const rules = {
  user_id: 'required'
};
class UserGroupClass {
  // Adds a new user to a group
  static create(req, res) {
    const validation = new Validator(req.body, rules);
    const groupID = req.params.group_id;
    const userID = req.body.user_id;
    // Checks field for validation
    // If field is not empty, it passes validation
    if (validation.passes()) {
      // Checks if user exists
      User
        .findById(userID)
        .then((userFound) => {
          if (userFound) {
            // Checks if group exists
            Group
              .findById(groupID)
              .then((group) => {
                if (group) {
                  // Checks if the user already belongs to the group
                  UserGroup
                    .findOne({
                      where: {
                        $and: [{ GroupId: req.params.group_id },
                        { UserId: req.body.user_id }]
                      }
                    })
                    .then((userExists) => {
                      if (!userExists) {
                        // Create a new user if user is not a member of the group
                        UserGroup
                          .create({
                            GroupId: req.params.group_id,
                            UserId: req.body.user_id
                          })
                          .then((usergroupCreated) => {
                            if (usergroupCreated) {
                              // Return user and group data when request is successful
                              return res.status(201).json(usergroupCreated);
                            }
                            return res.status(400).json(usergroupCreated);
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
  }

  // Retieves all users that belong to a particular group
  static retrieveUsers(req, res) {
    UserGroup.findAll({
      where: { groupId: req.params.group_id }
    })
      .then((group) => {
        res.json(group);
      })
      .catch(error => res.status(400).json(error));
  }

  // Retrives all groups a particular user belongs to
  static retrieveGroups(req, res) {
    const userID = parseInt(req.params.user_id, 10);
    if (isNaN(userID)) {
      return res.status(404).json({
        error: 'Invalid User Id',
      });
    }

    User.findOne({
      where: { id: req.params.user_id },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      include: [
        {
          model: Group,
          attributes: ['name', 'description', 'createdAt', ['UserId', 'ownerId']]
        }
      ]
    }).then((groups) => {
      res.status(200).json({
        groups
      });
    });
  }
}
export default UserGroupClass;
