import React from 'react';

import Signup from '../components/Signup/SignupContainer.jsx';
import Signin from '../components/Signin/SigninContainer.jsx';

/**
 *
 * @class AccountPage
 * @extends {React.Component}
 */
class AccountPage extends React.Component {
  /**
   * Initializes component swipeable tabs
   * @returns {void}
   *
   * @memberof AccountPage
   */
  componentDidMount() {
    $('ul.tabs').tabs();
  }

  /**
   *
   * @returns {jsx} an xml/html like syntax extension for javascript
   *
   * @memberof AccountPage
   */
  render() {
    return (
      <div>
        <div className="container"><br />
          <div className="row">
            <div className="col l8 offset-l2 s12">
              <center>
                <div className="z-depth-1 account">
                  <div className="row">
                    <div className="col s12 s12">
                      <ul id="tabs-swipe-demo" className="tabs">
                        <li className="tab col l6 s6 signin">
                          <a className="active"
                            href="#test-swipe-1">SIGN IN</a></li>
                        <li
                          className="tab col l6 s6 signup">
                          <a href="#test-swipe-2">SIGN UP</a></li>
                      </ul>
                    </div>
                    <div>
                      <Signup />
                      <Signin />
                    </div>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountPage;
