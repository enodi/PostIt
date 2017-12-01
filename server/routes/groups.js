import express from 'express';

import UserController from '../controllers/UserController';
import GroupController from '../controllers/GroupController';
import MessageController from '../controllers/MessageController';
import Authenticate from '../middleware/Authenticate';
import Validations from '../middleware/Validation';

const app = express.Router();

app.use(Authenticate.isLoggedIn);

app.route('/')
  .post(Validations.validateGroup, GroupController.create);

app.route('/:groupId/message')
  .post(MessageController.create);

app.route('/:groupId/messages')
  .get(MessageController.retrieve);

app.route('/:groupId/user')
  .post(UserController.addUsers);

app.route('/:groupId/users')
  .get(UserController.fetchUsers);

export default app;
