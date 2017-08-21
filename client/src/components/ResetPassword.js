import React from 'react';
import {Header} from './Header';
// import '../../assets/main.scss';
// import '../../assets/scripts.js';

export default class ResetPassword extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div className="container reset-password">
          <div className="row">
            <div className="col l8 offset-l2 s12 z-depth-2">
              <h2>Reset Password</h2>
              <p>Enter your email address and we will send you a password reset link</p>
              <form>
                <div className="input-field col s12">
                  <input className="validate" type="email" name="email" id="email" required/>
                  <label htmlFor="email">Email</label>
                </div>
                <div className="row center button">
                  <button className="btn-large waves-effect waves-light" type="submit" name="action">Send Password Reset Email</button>
                </div>
             </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
