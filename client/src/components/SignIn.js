import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionsCreators } from 'redux';
// import * as userActions from '../actions/signUpAction';
import * as sessionActions from '../actions/sessionActions';
import TextInput from './TextInput';
// import '../../assets/main.scss';
// import '../../assets/scripts.js';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {username: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
  }

  render() {
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
                    <div id="test-swipe-1" className="col s12">
                      <h5>Create Your Account</h5>
      								<form>
      	                <div className="row signup">
      	                  <div className="input-field col s12">
      	                    <input className="validate" type="text" name="username" id="username" required />
      	                    <label htmlFor="username">Username</label>
      	                  </div>
      	                </div>
      	                <div className="row signup">
      	                  <div className="input-field col s12">
      	                    <input className="validate" type="text" name="email" id="email" required />
      	                    <label htmlFor="email">Email</label>
      	                  </div>
      	                </div>
      	                <div className="row signup">
      	                  <div className="input-field col s12">
      	                    <input className="validate" type="password" name="password" id="password" required />
      	                    <label htmlFor="password">Password</label>
      	                  </div>
      	                </div>
      	                <div className="row signup">
      	                  <div className="input-field col s12">
      	                    <input className="validate" type="text" name="group" id="group" required />
      	                    <label htmlFor="group">Group (optional)</label>
      	                  </div>
      	                </div>
      									<div className="row center button">
      										<button className="btn-large waves-effect waves-light" type="submit" name="action">SIGNUP</button>
      									</div>
      								</form>
                    </div>
                    <div id="test-swipe-2" className="col s12">
                      <h5>Log Into Your Account</h5>
      								<form>
                        <TextInput
                          name="username"
                          label="Username"
                          value={this.state.credentials.username}
                          onChange={this.onChange} />

                        <TextInput
                            name="password"
                            label="Password"
                            type="password"
                            value={this.state.credentials.password}
                            onChange={this.onChange} />
      	                {/*<div className="row signin">
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
      	                </div>*/}

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


const mapDispatchToProps(dispatch) {
  return {
    actions: bindActionsCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SignIn);

// const mapStateToProps = (state, ownProps) => {
//   return {
//     user: state.user
//   }
// };
//
// // Maps actions to props
// const mapDispatchToProps = (dispatch) => {
//   return {
//     createUser: user => dispatch(userActions.signUp(user))
//   }
// };
//
// // Put them together by using connect
// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
