const user = require('../controllers/userController');
const group = require('../controllers/groupController');
const usergroup = require('../controllers/usergroupController');
const message = require('../controllers/messageController');
const authenticate = require('../middleware/authenticate');

module.exports = (app) => {
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

  app.use(authenticate.authentication);
  // Route to allow user create a broadcast group
  app.post('/api/group', group.create);

  // Route to allow users add other users to group
  app.post('/api/group/:group_id/user', usergroup.create);

  // Route to allow loggedIn users post messages to created groups
  app.post('/api/group/:group_id/message', message.create);

  // Route that allows loggedIn users retrieve messages that have been posted to groups
  app.get('/api/group/:group_id/messages', message.retrieve);
};
