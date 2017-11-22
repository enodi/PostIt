import React from 'react';
import { connect } from 'react-redux';
import SideBar from './Sidebar.jsx';
import PostMessage from './Message/PostMessageContainer.jsx';

/**
 * @class Dashboard
 * @extends {React.Component}
 */
export class Dashboard extends React.Component {
  /**
  * @returns {jsx} an xml/html like syntax extension for
  * javascript
  *
  * @memberof Dashboard
  */
  render() {
    return (
      <div>
        <SideBar />
        { this.props.groups.activeGroup.id && <PostMessage />}
        { !this.props.groups.activeGroup.id &&
          <div className="container">
            <div className="row">
              <div className="col s12 m10 offset-m2 l10 offset-l2 center welcome-message">
              <h3>Welcome to PostIt</h3>
              <p>Create a group to get started</p>
              <i className="material-icons">arrow_back</i>
              </div>
            </div>
          </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.groupReducer
});

export default connect(mapStateToProps)(Dashboard);
