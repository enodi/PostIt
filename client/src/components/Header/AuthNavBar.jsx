import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions/auth/signinAction';

/**
 * This class is responsible for managing state
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
      <div>
        <nav className="white dashboard logout-icon">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo li">PostIt</Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#add_users" className="modal-trigger">
                  <i className="material-icons black-text" href="#add_users">group_add</i>
                </a>
              </li>
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
                group_add
                </i>
              </li>
              <li>
                <i className="large material-icons black-text">
                  input
                </i>
              </li>
            </ul>
          </div>
        </nav>
        
      </div>
    );
  }
}

export default connect(null, { signoutUser })(AuthNavBar);
