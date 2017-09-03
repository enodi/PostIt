import React from 'react';
import { Link } from 'react-router';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import loginAction from '../actions/loginAction';
import * as sessionActions from '../actions/sessionActions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: ''
      }

    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const field = e.target.name;
    const credentials = this.state.credentials;
    credentials[field] = e.target.value;
    return this.setState({ credentials: credentials });
  }

  onSubmit(e) {
    e.preventDefault(); // prevents page from reloading when submit button is clicked
    this.props.actions.loginInUser(this.state.credentials);
  }

  render() {
    return(
      <div id="test-swipe-2" className="col s12">
        <h5>Log Into Your Account</h5>
        <form onSubmit={this.onSubmit}>
          <div className="row signin">
            <div className="input-field col s12">
              <input
                value={this.state.credentials.username}
                onChange={this.onChange}
                className="validate"
                type="text"
                name="username"
                id="username" required />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="row signin">
            <div className="input-field col s12">
              <input
                value={this.state.credentials.password}
                onChange={this.onChange}
                className="validate"
                type="password"
                name="password"
                id="password" required />
              <label htmlFor="password">Password</label>
              <br/><br/><br/><br/>
            </div>
          </div>
          <div className="row center button">
            <button
              className="btn-large waves-effect waves-light"
              type="submit"
              name="action">SIGNIN</button><br/><br/>
            <b><Link to="/resetpassword">Forgot your password?</Link></b>
          </div>
        </form>
      </div>
    );
  }
}

// LoginForm.propTypes = {
//   loginAction: PropTypes.func.isRequired
// }

// LoginForm.contextTypes = {
//   router: PropTypes.object.isRequired
// }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginForm);
