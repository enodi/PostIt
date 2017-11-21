// module.exports = {
//   'Users should be able to add users to a group': function (browser) {
//     browser
//       .url('localhost:3200')
//       .waitForElementVisible('.waves-effect.hoverable.btn-large')
//       .click('.waves-effect.hoverable.btn-large')
//       .click('#signup')
//       .waitForElementPresent('.username')
//       .setValue('.fullname', 'Ndeya Audu')
//       .setValue('.username', 'ndeya')
//       .setValue('.email', 'ndeya@gmail.com')
//       .setValue('.password', 'password')
//       .click('.signup-button')
//       .waitForElementPresent('h3')
//       .click('.sidebar-text')
//       .waitForElementPresent('h2')
//       .setValue('input[name="name"]', 'Random')
//       .setValue('input[name="description"]', 'random channel')
//       .click('button[type="submit"]')
//       .click('.grouplist > ul > li > a')
//       .waitForElementPresent('.right')
//       .click('.right')
//       .pause(2000)
//       .waitForElementPresent('h4')
//       .setValue('input[name="search"]', 'enodi')
//       .click('.addUsersBtn')
//       .pause(2000)
//       .end();
//   },
// };
