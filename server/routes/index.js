import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
import validations from '../middleware/validateGroup';

import authenticate from '../middleware/authenticate';
import { user, group, usergroup, message } from '../controllers';

// import user from '../controllers/userController';
// import group from '../controllers/groupController';
// import userGroupClass from '../controllers/usergroupController';
// import message from '../controllers/messageController';

dotenv.config();

const app = express();
// Log requests to console
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


// module.exports = (app) => {
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to PostIt Application, Conversation just became easy',
}));

app.get('/api', (req, res) => res.status(200).send({
  message: 'Welcome to PostIt Application API',
}));

// Route to allow users signup
app.post('/api/user/signup', user.signUp);

// Route to allow users signin
app.post('/api/user/signin', user.signIn);

// Performs user authentication on routes
app.use(authenticate.isLoggedIn);
// Route to allow user create a broadcast group
app.post('/api/group', validations.validateGroup, group.create);
// app.get('/api/user/:userId/groups', group.create);

// Route to allow users add other users to group
app.post('/api/group/:group_id/user', usergroup.create);

// Route to retrieve all groups a particular user belongs to
app.get('/api/user/:user_id/group', usergroup.retrieveGroups);

// Route to retrieve all users that belong to a particular group
app.get('/api/group/:group_id/user', usergroup.retrieveUsers);

// Route to allow loggedIn users post messages to created groups
app.post('/api/group/:group_id/message', message.create);

// Route that allows loggedIn users retrieve messages that have been posted to groups
app.get('/api/group/:group_id/messages', message.retrieve);
// };
export default app;
