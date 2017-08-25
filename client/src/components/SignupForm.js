import React from 'react';
import PropTypes from 'prop-types';
import TextField from './common/TextField';

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
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render() {
    return(
      <div id="test-swipe-1" className="col s12">
        <h5>Create Your Account</h5>
        <form onSubmit={this.onSubmit}>
          <TextField
            value={this.state.username}
            onChange={this.onChange}
            field="username"
            label="Username" />

          <TextField
            value={this.state.email}
            onChange={this.onChange}
            field="email"
            label="Email" />

          <TextField
            value={this.state.password}
            onChange={this.onChange}
            field="password"
            label="Password"
            type="password" />

          <TextField
            value={this.state.group}
            onChange={this.onChange}
            field="group"
            label="Group Name (optional)" />

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
};

export default SignupForm;
