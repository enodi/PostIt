import express from 'express';

import UserController from '../controllers/UserController';
import UserGroupController from '../controllers/UserGroupController';
import ResetPasswordController from '../controllers/ResetPasswordController';
import Authenticate from '../middleware/Authenticate';
import Validations from '../middleware/Validation';

const app = express.Router();

app.route('/signup')
  .post(Validations.validateUser, UserController.signUp);

app.route('/signin')
  .post(UserController.signIn);

app.route('/forgotPassword')
  .post(ResetPasswordController.forgotPassword);

app.route('/resetPassword')
  .put(Validations.validateResetPassword,
    ResetPasswordController.resetPassword);

app.use(Authenticate.isLoggedIn);
app.route('/:userId/group')
  .get(UserGroupController.retrieveGroups);

app.route('/search')
  .get(UserController.searchUsers);

export default app;
