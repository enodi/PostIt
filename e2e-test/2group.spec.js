module.exports = {
  'Users should be able to create group': function (browser) {
    browser
      .url('http://postit-enodi.herokuapp.com/')
      .waitForElementVisible('.waves-effect.hoverable.btn-large')
      .click('.waves-effect.hoverable.btn-large')
      .click('.signup')
      .waitForElementPresent('.username')
      .setValue('.fullname', 'Agnes Audu')
      .setValue('.username', 'agnes')
      .setValue('.email', 'agnes@gmail.com')
      .setValue('.password', 'password')
      .click('.btn-large.waves-effect.waves-light')
      .waitForElementPresent('h3')
      .click('.sidebar-text')
      .waitForElementPresent('h2')
      .setValue('input[name="name"]', 'Game of thrones')
      .setValue('input[name="description"]', 'GOT')
      .click('button[type="submit"]')
      .pause(1000)
      .assert.containsText('h3', 'Welcome to PostIt')
      .end();
  },
};
