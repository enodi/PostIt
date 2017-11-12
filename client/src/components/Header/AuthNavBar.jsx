import React from 'react';
import { Link } from 'react-router';

/**
 * @class AuthNavBar
 * @extends {React.Component}
 */
class AuthNavBar extends React.Component {

  /**
   *
   * @returns {jsx} an xml/html like syntax extension to javascript
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
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li>
                <i className="large material-icons black-text">
                group_add
                </i>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default AuthNavBar;
