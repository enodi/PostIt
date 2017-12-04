module.exports = {
  'Users should be able to request change of password': function (browser) {
    browser
      .url('http://postit-enodi.herokuapp.com/')
      .waitForElementVisible('.waves-effect.hoverable.btn-large')
      .click('.waves-effect.hoverable.btn-large')
      .waitForElementPresent('.username')
      .click('p > b > a')
      .waitForElementPresent('h2')
      .setValue('input[name="email"]', 'enodiaudu@gmail.com')
      .click('button[type="submit"]')
      .pause(5000)
      .end();
  },
};
