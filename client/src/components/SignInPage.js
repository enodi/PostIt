import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';
import SignupForm from './SignupForm';
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

                    <SignupForm userSignupRequest={userSignupRequest}/>

                    <div id="test-swipe-2" className="col s12">
                      <h5>Log Into Your Account</h5>
      								<form>
                        <div className="row signin">
      	                  <div className="input-field col s12">
      	                    <input className="validate" type="text" name="username" id="username" required />
      	                    <label htmlFor="username">Username</label>
      	                  </div>
      	                </div>

                        <div className="row signin">
      	                  <div className="input-field col s12">
      	                    <input className="validate" type="password" name="password" id="password" required />
      	                    <label htmlFor="password">Password</label>
      											<br/><br/><br/><br/>
      	                  </div>
      	                </div>

      	                <div className="row center button">
      										<button className="btn-large waves-effect waves-light" type="submit" name="action" onClick={this.onSave}>SIGNIN</button><br/><br/>
      	                  <b><Link to="resetpassword">Forgot your password?</Link></b>
      	                </div>
      								</form>
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

SignInPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { userSignupRequest })(SignInPage);
