import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signinAction } from '../../actions/auth/signinAction';
import Signin from './Signin.jsx';

/**
 * This class is the container component for signin
 * presentational component
 *
 * @class SigninContainer
 * @extends {React.Component}
 */
export class SigninContainer extends React.Component {
  /**
   * Creates an instance of SigninContainer.
   * Initializes the state and binds this to the methods in the class
   *
   * @param {object} props
   * @memberof SigninContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  /**
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof SigninContainer
   * @method onFocus
   */
  onFocus(event) {
    const name = event.target.name;
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

  /**
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof SigninContainer
   */
  onBlur(event) {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'username':
        if (!value) {
          this.setState({
            usernameError: 'Please insert your username'
          });
        }
        break;
      case 'password':
        if (!value) {
          this.setState({
            passwordError: 'Please insert your password'
          });
        }
        break;
      default:
    }
  }

  /**
   * Takes in the target object and sets the state with the form input
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof SigninContainer
   * @method onChange
   */
  onChange(event) {
    const value = event.target.value.trim();
    this.setState({
      [event.target.name]: value
    });
  }

  /**
   * Makes a post request to signin endpoint upon successful validation
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof SigninContainer
   * @method handleSubmit
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.signinAction(this.state);
  }

 /**
  * @returns {jsx} an xml/html like syntax extension for javascript
  * @memberof SigninContainer
  */
  render() {
    return (
        <Signin
          state={this.state}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          usernameError={this.state.usernameError}
          passwordError={this.state.passwordError}
        />
    );
  }
}

SigninContainer.propTypes = {
  signinAction: PropTypes.func.isRequired
};

export default connect(null, { signinAction })(SigninContainer);
