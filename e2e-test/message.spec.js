// module.exports = {
//   'Users should be able to post message': function (browser) {
//     browser
//       .url('localhost:3200')
//       .waitForElementVisible('.waves-effect.hoverable.btn-large')
//       .click('.waves-effect.hoverable.btn-large')
//       .click('#signup')
//       .waitForElementPresent('.username')
//       .setValue('.fullname', 'Enodi Audu')
//       .setValue('.username', 'enodi')
//       .setValue('.email', 'enodiaudu5@gmail.com')
//       .setValue('.password', 'password')
//       .click('.signup-button')
//       .waitForElementPresent('h3')
//       .click('.sidebar-text')
//       .waitForElementPresent('h2')
//       .setValue('input[name="name"]', 'General')
//       .setValue('input[name="description"]', 'general channel')
//       .click('button[type="submit"]')
//       .pause(2000)
//       .click('.grouplist > ul > li > a')
//       .waitForElementPresent('.post-message')
//       .setValue('.post-message', 'Hello')
//       .click('.messageBtn')
//       .pause(2000)
//       .end();
//   },
// };
