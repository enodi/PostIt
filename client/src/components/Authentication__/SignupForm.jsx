import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { signupAction } from '../../actions/auth/signupAction';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      username: '',
      email: '',
      password: '',
      error: {},
      disable: true
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }


  onFocus() {
    this.setState({
      error: {},
      disable: false
    });
  }

  validateInput(state) {
    const { username, email } = state;
    const re = /\S+@\S+\.\S+/;
    const emailVal = re.test(email);
    const error = {};
    let disable = false;

    if (username && username.trim().length < 4) {
      error.username = 'Username should be atleast 4 characters';
    }

    if (email && !emailVal) {
      error.email = 'Email Address is not valid';
    }

    if (Object.keys(error).length > 0) {
      disable = true;
    }

    return {
      disable,
      error
    };
  }

  /**
   *
   *
   * @param {any} event
   * @memberof SignupForm
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const { error, disable } = this.validateInput(this.state);
    if (!disable) {
      this.props.signupAction(this.state)
        .then((res) => {
          if (res.status === 201) {
            browserHistory.push('/dashboard');
          } else {
            this.setState({ error: res.message });
          }
        })
        .catch(err => err);
    } else {
      this.setState({
        error,
        disable
      });
    }
  }

  render() {
    // Deconstruct state
    const {
      username,
      password,
      email,
      disable,
      fullname,
      error } = this.state;
    return (
      <div id="test-swipe-2" className="col s12">
        <h5>Create Your Account</h5>
        <form onSubmit={this.onSubmit}>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={fullname}
                onChange={this.onChange}
                onFocus={this.onFocus}
                className="validate"
                type="text"
                name="fullname" required />
              <label htmlFor="fullname">Full Name</label>
            </div>
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={username}
                onChange={this.onChange}
                onFocus={this.onFocus}
                className="validate"
                type="text"
                name="username" required />
              <label htmlFor="username">Username</label>
            </div>
            {error.username && <div style={{ color: 'red' }}>{error.username}</div>}
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={email}
                onChange={this.onChange}
                onFocus={this.onFocus}
                className="validate"
                type="email"
                name="email"
                id="email" required />
              <label htmlFor="email">Email</label>
            </div>
            {error.email && <div style={{ color: 'red' }}>{error.email}</div>}
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={password}
                onChange={this.onChange}
                onFocus={this.onFocus}
                className="validate"
                type="password"
                name="password"
                id="password" required />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row center button">
            <button
              disabled={disable}
              className="btn-large waves-effect waves-light"
              type="submit"
              name="action">SIGNUP</button>
          </div>
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  signupAction: PropTypes.func.isRequired
};

export default connect(null, { signupAction })(SignupForm);
