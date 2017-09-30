import express from 'express';
import UserController from '../controllers/userController';
import UserGroupController from '../controllers/usergroupController';
import authenticate from '../middleware/authenticate';

const app = express.Router();

app.route('/signup')
  .post(UserController.signUp);

app.route('/signin')
  .post(UserController.signIn);

app.use(authenticate.isLoggedIn);
app.route('/:user_id/group')
  .post(UserGroupController.retrieveGroups);


export default app;
