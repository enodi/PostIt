const user = require('./userController');
const group = require('./groupController');
const usergroup = require('./usergroupController');
const message = require('./messageController');

module.exports = {
  user,
  group,
  usergroup,
  message
};
