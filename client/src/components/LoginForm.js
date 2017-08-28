import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loginAction from '../actions/loginAction';
import TextField from './common/TextField';
import validateInput from './validations/login';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      isLoading: false,
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.loginAction(this.state).then(
        (res) => this.context.router.push('/'),
        (err) => this.setState({ errors: err.data.errors, isLoading: false })
      );
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state;
    return(
      <form onSubmit={this.onSubmit}>
        <TextField
          field="identifier"
          label='Username'
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
          />

        <TextField
          field='password'
          label='Password'
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
          />

          <div className="row center button">
            <button
              className="btn-large waves-effect waves-light"
              disabled={isLoading}
              type="submit" name="action">SIGNIN</button><br/><br/>
            <b><Link to="resetpassword">Forgot your password?</Link></b>
          </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  loginAction: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { loginAction })(LoginForm);
