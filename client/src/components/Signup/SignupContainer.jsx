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
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  /**
   *
   * @memberof SignupContainer
   * @method onFocus
   *
   * @returns {void}
   */
  onFocus(event) {
    const name = event.target.name;
    switch (name) {
      case 'fullname':
        this.setState({
          fullnameError: ''
        });
        break;
      case 'email':
        this.setState({
          emailError: ''
        });
        break;
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

  /**
   * Validates user input
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof SignupContainer
   */
  onBlur(event) {
    const { email } = this.state;
    const re = /\S+@\S+\.\S+/;
    const emailVal = re.test(email);
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'fullname':
        if (!value) {
          this.setState({
            fullnameError: 'This field cannot be empty'
          });
        }
        break;
      case 'username':
        if (!value) {
          this.setState({
            usernameError: 'This field cannot be empty'
          });
        }
        break;
      case 'email':
        if (!value || !emailVal) {
          this.setState({
            emailError: 'Invalid email'
          });
        }
        break;
      case 'password':
        if (!value) {
          this.setState({
            passwordError: 'This field cannot be empty'
          });
        }
        break;
      default:
    }
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
        onBlur={this.onBlur}
        usernameError={this.state.usernameError}
        fullnameError={this.state.fullnameError}
        emailError={this.state.emailError}
        passwordError={this.state.passwordError}/>
    );
  }
}

SignupContainer.propTypes = {
  signupAction: PropTypes.func.isRequired
};

export default connect(null, { signupAction })(SignupContainer);
