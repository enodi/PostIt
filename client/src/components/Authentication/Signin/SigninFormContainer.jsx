import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signinAction } from '../../../actions/auth/signinAction';
import '../../../assets/main.scss';
import SigninForm from './SigninForm.jsx';

/**
 *
 *
 * @class SigninForm
 * @extends {React.Component}
 */
class SigninFormContainer extends React.Component {
  /**
   * Creates an instance of SigninForm.
   * @param {any} props
   * @memberof SigninForm
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
   * @memberof SigninFormContainer
   */
  onFocus(event) {
    // Clear error message when user is focused on a particular field
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
   * @memberof SigninFormContainer
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
   * @memberof SigninFormContainer
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
   * @memberof SigninFormContainer
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.signinAction(this.state);
  }

  /**
   *
   *
   * @returns {jsx}
   * @memberof SigninFormContainer
   */
  render() {
    return (
        <SigninForm
          state={this.state}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
    );
  }
}

SigninFormContainer.propTypes = {
  signinAction: PropTypes.func.isRequired
};

export default connect(null, { signinAction })(SigninFormContainer);
