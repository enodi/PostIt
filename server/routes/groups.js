import express from 'express';
import UserController from '../controllers/userController';
import GroupController from '../controllers/groupController';
import MessageController from '../controllers/messageController';
import authenticate from '../middleware/authenticate';
import validations from '../middleware/validation';

const app = express.Router();

app.use(authenticate.isLoggedIn);

app.route('/')
  .post(validations.validateGroup, GroupController.create);

app.route('/:groupId/message')
  .post(MessageController.create);

app.route('/:groupId/messages')
  .get(MessageController.retrieve);

app.route('/:groupId/user')
  .post(UserController.addUsers);

export default app;
