import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupAction } from '../../actions/auth/signupAction';
import Signup from './Signup.jsx';

/**
 * This class is the container component for signup
 * presentational component
 *
 * @class SignupContainer
 * @extends {React.Component}
 */
export class SignupContainer extends React.Component {
  /**
   * Creates an instance of SignupContainer.
   * Initializes the state and binds this to the methods in the class
   *
   * @param {object} props
   *
   * @memberof SignupContainer
   */
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

  /**
   *
   * @memberof SignupContainer
   * @method onFocus
   *
   * @returns {void}
   */
  onFocus() {
    this.setState({
      error: {},
      disable: false
    });
  }

  /**
   * Validates user input
   * @param {any} state
   * @returns {void}
   * @memberof SignupContainer
   */
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
   * Takes in the target object and sets the state with the form input
   * @param {object} event
   *
   * @memberof SignupContainer
   *
   * @returns {void}
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * Makes a post request to signup endpoint upon successful validation
   *
   * @param {any} event
   *
   * @returns {void}
   *
   * @method onSubmit
   * @memberof SignupContainer
   */
  onSubmit(event) {
    event.preventDefault();
    this.props.signupAction(this.state);
  }

  /**
   * @returns {jsx} an xml/html like syntax extension for javascript
   * @memberof SignupContainer
   */
  render() {
    return (
      <Signup
        state={this.state}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        onFocus={this.onFocus}
        validateInput={this.validateInput}
        disable={this.disable}/>
    );
  }
}

SignupContainer.propTypes = {
  signupAction: PropTypes.func.isRequired
};

export default connect(null, { signupAction })(SignupContainer);
