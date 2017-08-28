import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import userSignupRequest from '../actions/signupActions';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
// import '../../assets/main.scss';
// import '../../assets/scripts.js';

class SignInPage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col l8 offset-l2 s12">
              <center>
                <div  className="z-depth-1 account">
                  <div className="row">
                    <div className="col s12 s12">
                      <ul id="tabs-swipe-demo" className="tabs">
                      <li className="tab col l6 s6"><a href="#test-swipe-1">SIGN UP</a></li>
                      <li className="tab col l6 s6"><a className="active" href="#test-swipe-2">SIGN IN</a></li>
                      </ul>
                    </div>

                    <SignupForm userSignupRequest={userSignupRequest} />

                    <LoginForm />
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

SignInPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignInPage);
