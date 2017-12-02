// module.exports = {
//   'Users should be able to add users to a group': function (browser) {
//     browser
//       .url('localhost:3200')
//       .waitForElementVisible('.waves-effect.hoverable.btn-large')
//       .click('.waves-effect.hoverable.btn-large')
//       .click('.signup')
//       .waitForElementPresent('.username')
//       .setValue('.fullname', 'Enodi Audu')
//       .setValue('.username', 'enodi')
//       .setValue('.email', 'enodi@gmail.com')
//       .setValue('.password', 'password')
//       .click('.btn-large.waves-effect.waves-light')
//       .waitForElementPresent('h3')
//       .click('.sidebar-text')
//       .waitForElementPresent('h2')
//       .setValue('input[name="name"]', 'General')
//       .setValue('input[name="description"]', 'general channel')
//       .click('button[type="submit"]')
//       .click('.grouplist > ul > li > a')
//       .waitForElementPresent('.right')
//       .click('.right')
//       .pause(2000)
//       .waitForElementPresent('h4')
//       .setValue('input[name="search"]', 'ndeya')
//       .click('.addUsersBtn')
//       .pause(2000)
//       .end();
//   },
// };
