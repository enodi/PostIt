import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from '../Authentication__/SignupForm.jsx';
import SigninFormContainer from './Signin/SigninFormContainer.jsx';
import { signupAction } from '../../actions/auth/signupAction';

class SigninPage extends React.Component {
  componentDidMount() {
     $('ul.tabs').tabs();
  }

  render() {
    const { signupAction } = this.props;
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

                    <SignupForm signupAction={signupAction} />

                    <SigninFormContainer />
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

SigninPage.propTypes = {
  signupAction: PropTypes.func.isRequired
};

export default connect(null, { signupAction })(SigninPage);
