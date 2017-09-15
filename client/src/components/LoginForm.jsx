import React from 'react';
import {
  Link,
  browserHistory,
} from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { bindActionCreators } from 'redux';
import {
  signinAction
} from '../actions/auth/signinAction';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus(e) {
    // Clear error message when user is focused on a particular field
    const name = e.target.name;
    switch (name) {
      case 'username':
        this.setState({
          usernameError: ''
        });
        break;
      case 'password':
        this.setState({
          passwordError: ''
        });
        break;
      default:
    }
  }

  onBlur(e) {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'username':
        // Display error message if username field is empty
        if (!value) {
          this.setState({
            usernameError: 'Please insert your username'
          });
        }
        break;
      case 'password':
        // Display error message if password field is empty
        if (!value) {
          this.setState({
            passwordError: 'Please insert your password'
          });
        }
        break;
      default:
    }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signinAction(this.state)
      .then((res) => {
        if (res.status === 200) {
          // this.context.router.history.push('/dashboard');
          browserHistory.push('/dashboard');
        } else {
          this.setState({
            error: res.message
          });
        }
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.message,
        });
      });
  }

  render() {
    // Deconstruct state
    const {
      username,
      password
    } = this.state;
    return (
      <div
        id="test-swipe-2"
        className="col s12"
      >
        <h5 > Log Into Your Account </h5>
        <div style={{ color: 'red' }}>
          {this.state.error} </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row signin" >
            <div className="input-field col s12" >
              <input
                value={username}
                onChange={this.onChange}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                className="validate"
                type="text"
                name="username"
                id="username"
                required
              />
              <label htmlFor="username" > Username </label>
            </div >
            <div style={{ color: 'red' }} >
              {this.state.usernameError}
            </div>
          </div>
          <div className="row signin" >
            <div className="input-field col s12" >
              <input
                value={password}
                onChange={this.onChange}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                className="validate"
                type="password"
                name="password"
                id="password"
                required
              />
              <label htmlFor="password"> Password </label>
            </div> <div style={{ color: 'red' }}>
              {this.state.passwordError} </div>
          </div >
          <br /> <br /> <br /> <br />
          <div className="row center button">
            <button
              className="btn-large waves-effect waves-light"
              type="submit"
              name="action"
            >
              SIGNIN
              </button><br /> <br />
            <b> <a href="/resetpassword"> Forgot your password ? </a></b>
          </div>
        </form>
      </div>
    );
  }
}

LogInForm.propTypes = {
  signinAction: PropTypes.func.isRequired
};
LogInForm.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(null, { signinAction })(LogInForm);
