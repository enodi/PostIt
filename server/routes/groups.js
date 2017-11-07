import express from 'express';
import GroupController from '../controllers/groupController';
import UserGroupController from '../controllers/usergroupController';
import MessageController from '../controllers/messageController';
import authenticate from '../middleware/authenticate';
import validations from '../middleware/validation';

const app = express.Router();

app.use(authenticate.isLoggedIn);

app.route('/')
  .post(validations.validateGroup, GroupController.create);

app.route('/:group_id/user')
  .post(validations.validateUserGroup, UserGroupController.addUser)
  .get(UserGroupController.retrieveUsers);

app.route('/:group_id/message')
  .post(MessageController.create);

app.route('/:group_id/messages')
  .get(MessageController.retrieve);

export default app;
