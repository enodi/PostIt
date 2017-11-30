import express from 'express';
import UserController from '../controllers/UserController';
import UserGroupController from '../controllers/UserGroupController';
import ResetPasswordController from '../controllers/ResetPasswordController';
import authenticate from '../middleware/authenticate';
import validations from '../middleware/validation';

const app = express.Router();

app.route('/signup')
  .post(validations.validateUser, UserController.signUp);

app.route('/signin')
  .post(UserController.signIn);

app.route('/forgotPassword')
  .post(ResetPasswordController.forgotPassword);

app.route('/resetPassword')
  .put(validations.validateResetPassword, ResetPasswordController.resetPassword);

app.use(authenticate.isLoggedIn);
app.route('/:userId/group')
  .get(UserGroupController.retrieveGroups);

app.route('/search')
  .get(UserController.searchUsers);

export default app;
