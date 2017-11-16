import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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
      <div className="row">
        <nav className="white dashboard logout-icon">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo li">PostIt</Link>
            <ul className="col m10 offset-m2 hide-on-med-and-down">
            {this.props.group.name && <li className="black-text flow-text">{this.props.group.name}</li>}
              <li className="right">
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

const mapStateToProps = state => ({
  group: state.groupReducer.activeGroup
});

export default connect(mapStateToProps)(AuthNavBar);
