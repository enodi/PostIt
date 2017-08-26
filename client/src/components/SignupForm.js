import React from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter } from 'react-router-dom';
// import TextField from './common/TextField';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      group: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault(); // prevents page from reloading when submit button is clicked
    this.props.userSignupRequest(this.state);
  }

  render() {
    return(
      <div id="test-swipe-1" className="col s12">
        <h5>Create Your Account</h5>
        <form onSubmit={this.onSubmit}>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={this.state.username}
                onChange={this.onChange}
                className="validate"
                type="text"
                name="username"
                id="username" />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={this.state.email}
                onChange={this.onChange}
                className="validate"
                type="text"
                name="email"
                id="email" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={this.state.password}
                onChange={this.onChange}
                className="validate"
                type="password"
                name="password"
                id="password" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={this.state.group}
                onChange={this.onChange}
                className="validate"
                type="text"
                name="group"
                id="group" />
              <label htmlFor="group">Group (optional)</label>
            </div>
          </div>
          <div className="row center button">
            <button
              className="btn-large waves-effect waves-light"
              type="submit" name="action">SIGNUP</button>
          </div>
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;
