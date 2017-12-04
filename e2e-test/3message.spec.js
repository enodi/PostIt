module.exports = {
  'Users should be able to post message': function (browser) {
    browser
      .url('http://postit-enodi.herokuapp.com/')
      .waitForElementVisible('.waves-effect.hoverable.btn-large')
      .click('.waves-effect.hoverable.btn-large')
      .click('.signup')
      .waitForElementPresent('.username')
      .setValue('.fullname', 'Julian Audu')
      .setValue('.username', 'julian')
      .setValue('.email', 'enodiaudu@gmail.com')
      .setValue('.password', 'password')
      .click('.btn-large.waves-effect.waves-light')
      .waitForElementPresent('h3')
      .click('.sidebar-text')
      .waitForElementPresent('h2')
      .setValue('input[name="name"]', 'General')
      .setValue('input[name="description"]', 'general channel')
      .click('button[type="submit"]')
      .pause(1000)
      .click('.grouplist > ul > li > a')
      .waitForElementPresent('.post-message')
      .setValue('.post-message', 'Hello')
      .keys('client.Keys.ENTER')
      .assert.containsText('h5', 'Group Members')
      .end();
  },
};
