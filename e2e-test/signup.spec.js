// module.exports = {
//   'Users should be able to sign up': function (browser) {
//     browser
//       .url('localhost:3200')
//       .waitForElementVisible('body')
//       .waitForElementVisible('.waves-effect.hoverable.btn-large')
//       .click('.waves-effect.hoverable.btn-large')
//       .click('#signup')
//       .waitForElementPresent('.username')
//       .setValue('.fullname', 'Rimam Audu')
//       .setValue('.username', 'rimam')
//       .setValue('.email', 'rimam@gmail.com')
//       .setValue('.password', 'password')
//       .click('.signup-button')
//       .waitForElementPresent('h3')
//       .assert.containsText('h3', 'Welcome to PostIt')
//       .end();
//   },
// };
