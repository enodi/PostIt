import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      group: '',
      isLoading: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    // this.onClick = this.onClick.bind(this);
  }

  // onClick() {
  //   Materialize.toast(message);
  // }

  onFocus(e) {
    const name = e.target.name;
    switch (name) {
      case "username":
        this.setState({ usernameError: '' });
        break;
      case "email":
        this.setState({ emailError: '' });
        break;
      case "password":
        this.setState({ passwordError: '' });
        break;
    }
  }

  onBlur(e) {
    const name = e.target.name;
    const value = e.target.value;
    const re = /\S+@\S+\.\S+/;
    const emailVal = re.test(value);
    switch (name) {
      case "username":
        if (value.length < 4 || !value) {
          this.setState({ usernameError: 'Username should be atleast 4 characters'})
        }
        break;
      case "password":
        if (!value) {
          this.setState({ passwordError: 'Password field cannot be empty'})
        }
        break;
      case "email":
        if (!value) {
          this.setState({ emailError: 'Email field cannot be empty'})
        }
        if (!emailVal) {
          this.setState({ emailError: 'invalid email'})
        }
        break;
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // handles submitting of user data
  onSubmit(e) {
    e.preventDefault();
    this.props.signupAction(this.state).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You signed up successfully. You can now log into your account',
        })
        browserHistory.push('/');
      }
    )
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
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                className="validate"
                type="text"
                name="username" required />
              <label htmlFor="username">Username</label>
            </div>
            <div style={{color:"red"}}>{this.state.usernameError}</div>
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={this.state.email}
                onChange={this.onChange}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                className="validate"
                type="email"
                name="email"
                id="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div style={{color:"red"}}>{this.state.emailError}</div>
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={this.state.password}
                onChange={this.onChange}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                className="validate"
                type="password"
                name="password"
                id="password" required />
              <label htmlFor="password">Password</label>
            </div>
            <div style={{color:"red"}}>{this.state.passwordError}</div>
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={this.state.group}
                onChange={this.onChange}
                onBlur={this.onBlur}
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
              type="submit"
              name="action">SIGNUP</button>
          </div>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  signupAction: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

export default SignUpForm;
