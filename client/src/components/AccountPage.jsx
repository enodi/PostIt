import React from 'react';
import SignupContainer from '../components/Signup/SignupContainer.jsx';
import SigninContainer from '../components/Signin/SigninContainer.jsx';

/**
 *
 * @class AccountPage
 * @extends {React.Component}
 */
class AccountPage extends React.Component {
  /**
   * Initializes component swipeable tabs
   * @returns {void}
   * @memberof AccountPage
   */
  componentDidMount() {
     $('ul.tabs').tabs();
  }

  /**
   *
   * @returns {jsx} an xml/html like syntax extension for javascript
   * @memberof AccountPage
   */
  render() {
    return (
      <div>
        <div className="container"><br/>
          <div className="row">
            <div className="col l8 offset-l2 s12">
              <center>
                <div className="z-depth-1 account">
                  <div className="row">
                    <div className="col s12 s12">
                      <ul id="tabs-swipe-demo" className="tabs">
                        <li className="tab col l6 s6">
                          <a className="active" href="#test-swipe-1" id="signin">SIGN IN</a>
                        </li>
                        <li className="tab col l6 s6">
                          <a href="#test-swipe-2" id="signup">SIGN UP</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                    <SignupContainer />
                    <SigninContainer />
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
