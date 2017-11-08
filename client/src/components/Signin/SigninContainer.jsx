import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signinAction } from '../../actions/auth/signinAction';
import Signin from './Signin.jsx';

/**
 *
 *
 * @class SigninContainer
 * @extends {React.Component}
 */
class SigninContainer extends React.Component {
  /**
   * Creates an instance of SigninContainer.
   * @param {any} props
   * @memberof SigninContainer
   */
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

  /**
   *
   *
   * @param {any} event
   * @returns {void}
   * @memberof SigninContainer
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
   *
   *
   * @param {any} event
   * @returns {void}
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
   *
   *
   * @param {any} event
   * @returns {void}
   * @memberof SigninContainer
   */
  onChange(event) {
    const value = event.target.value.trim();
    this.setState({
      [event.target.name]: value
    });
  }

  /**
   *
   *
   * @param {any} event
   * @returns {void}
   * @memberof SigninContainer
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.signinAction(this.state);
  }

 /**
  *
  *
  * @returns
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
        />
    );
  }
}

SigninContainer.propTypes = {
  signinAction: PropTypes.func.isRequired
};

export default connect(null, { signinAction })(SigninContainer);
