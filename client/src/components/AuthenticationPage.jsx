import React from 'react';
import SignupContainer from '../components/Signup/SignupConatiner.jsx';
import SigninContainer from '../components/Signin/SigninContainer.jsx';

/**
 *
 *
 * @class AuthenticationPage
 * @extends {React.Component}
 */
class AuthenticationPage extends React.Component {
  /**
   *
   * @returns {void}
   * @memberof AuthenticationPage
   */
  componentDidMount() {
     $('ul.tabs').tabs();
  }

  /**
   *
   *
   * @returns {jsx}
   * @memberof AuthenticationPage
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
                        <li className="tab col l6 s6"><a className="active" href="#test-swipe-1">SIGN IN</a></li>
                        <li className="tab col l6 s6"><a href="#test-swipe-2">SIGN UP</a></li>
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

export default AuthenticationPage;
