import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';
import classnames from 'classnames';
// import TextField from './common/TextField';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      group: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
       });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmit(e) {
    e.preventDefault(); // prevents page from reloading when submit button is clicked
    this.props.userSignupRequest(this.state).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You signed up successfully. Welcome!'
        })
      }
    );

    // Signup Validation
    let errors = {};
    if (this.state.username === '') {
      errors.username = "This field can't be empty";
    } else if (this.state.username.length < 5) {
      errors.username = "The username must be atleast 5 characters";
    }
    if (this.state.email === '') errors.email = "This field can't be empty";
    if (this.state.password === '') errors.password = "This field can't be empty";
    this.setState({ errors });
  }

  render() {
    return(
      <div id="test-swipe-1" className="col s12">
        <h5>Create Your Account</h5>
        <form onSubmit={this.onSubmit}>
          <div className="row signup">
            <div className="input-field col s12">
              <div className={classnames('field', { error: !!this.state.errors.username})}>
                <label htmlFor="username">Username</label>
                <input
                  value={this.state.username}
                  onChange={this.onChange}
                  className="validate"
                  type="text"
                  name="username"
                  id="username" />
                <span>{this.state.errors.username}</span>
              </div>
            </div>
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <div className={classnames('field', { error: !!this.state.errors.email})}>
                <input
                  value={this.state.email}
                  onChange={this.onChange}
                  className="validate"
                  type="email"
                  name="email"
                  id="email" />
                <label htmlFor="email">Email</label>
                <span>{this.state.errors.email}</span>
              </div>
            </div>
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <div className={classnames('field', { error: !!this.state.errors.password})}>
                <input
                  value={this.state.password}
                  onChange={this.onChange}
                  className="validate"
                  type="password"
                  name="password"
                  id="password" />
                <label htmlFor="password">Password</label>
                <span>{this.state.errors.password}</span>
              </div>
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
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { userSignupRequest })(SignupForm);
