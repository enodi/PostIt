import express from 'express';
import UserController from '../controllers/userController';
import UserGroupController from '../controllers/usergroupController';
import authenticate from '../middleware/authenticate';
import validations from '../middleware/validation';

const app = express.Router();

app.route('/signup')
  .post(validations.validateUser, UserController.signUp);

app.route('/signin')
  .post(UserController.signIn);

app.use(authenticate.isLoggedIn);
app.route('/:user_id/group')
  .get(UserGroupController.retrieveGroups);

app.use(authenticate.isLoggedIn);
app.route('/search')
  .get(UserController.fetchUsers);

export default app;
