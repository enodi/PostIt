// module.exports = {
//   'Users should be able to search for other users': function (browser) {
//     browser
//       .url('localhost:3200')
//       .waitForElementVisible('.waves-effect.hoverable.btn-large')
//       .click('.waves-effect.hoverable.btn-large')
//       .click('#signup')
//       .waitForElementPresent('.username')
//       .setValue('.fullname', 'Mba Audu')
//       .setValue('.username', 'matty')
//       .setValue('.email', 'matty@gmail.com')
//       .setValue('.password', 'password')
//       .click('.signup-button')
//       .waitForElementPresent('h3')
//       .click('.sidebar-text')
//       .waitForElementPresent('h2')
//       .setValue('input[name="name"]', 'teen-code')
//       .setValue('input[name="description"]', 'teen-code channel')
//       .click('button[type="submit"]')
//       .pause(2000)
//       .click('.grouplist > ul > li > a')
//       .waitForElementPresent('.right')
//       .click('.right')
//       .pause(2000)
//       .waitForElementPresent('h4')
//       .setValue('input[name="search"]', 'enodi')
//       .pause(2000)
//       .end();
//   },
// };
