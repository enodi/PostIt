import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar.jsx';
import PostMessageContainer from './Message/PostMessageContainer.jsx';
import GroupMembers from '../Dashboard/GroupMembers.jsx';
import WelcomePage from './WelcomePage.jsx';

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
    const { Users } = this.props.users;
    return (
      <div>
        <Sidebar />
        <div className="row">
          {this.props.groups.id &&
            <div className="col l10 m12 s12 offset-l2">
              <div className="col m9 s12">
                <PostMessageContainer />
              </div>
              <div className="col m3 hide-on-small-only right">
                <GroupMembers
                  {...Users} />
              </div>
            </div>}
        </div>
        {!this.props.groups.id && <WelcomePage />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.groupReducer.activeGroup,
  users: state.userReducer
});

export default connect(mapStateToProps)(Dashboard);
