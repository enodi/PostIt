import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions/auth/signinAction';

/**
 * This class is the container component
 * for the different NavBar
 * It is responsible for managing state
 * change and handling user signout
 *
 * @class AuthNavBar
 * @extends {React.Component}
 */
class AuthNavBar extends React.Component {

  /**
   * Creates an instance of AuthNavBar.
   * @param {object} props
   *
   * @memberof AuthNavBar
   */
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  /**
   * Handles user signout and removing token
   * from localStorage
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof AuthNavBar
   */
  handleOnClick(event) {
    event.preventDefault();
    this.props.signoutUser();
  }

  /**
   *
   *
   * @returns {void} jsx - xml/html like syntax extension to javascript
   *
   * @memberof AuthNavBar
   */
  render() {
    return (
      <nav className="white dashboard logout-icon">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo li">PostIt</Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <i
              className="large material-icons black-text"
              onClick={this.handleOnClick}>input
            </i>
          </li>
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li>
            <i className="large material-icons black-text">
              input
            </i>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default connect(null, { signoutUser })(AuthNavBar);
