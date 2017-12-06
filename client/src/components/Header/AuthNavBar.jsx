import React from 'react';
import { connect } from 'react-redux';

/**
 * @class AuthNavBar
 * @extends {React.Component}
 */
export class AuthNavBar extends React.Component {

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
            <ul className="col m12 s12">
              {this.props.group.name &&
                <li className="black-text flow-text">
                  {this.props.group.name}</li>}
              <li className="right">
                <a href="#add_users" className="modal-trigger">
                  <i
                    className=
                    "material-icons black-text" href="#add_users">group_add</i>
                </a>
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
