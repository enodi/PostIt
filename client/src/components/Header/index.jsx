import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import AddUsersContainier from '../Dashboard/Users/AddUsersContainer.jsx';
import AuthNavBar from './AuthNavBar.jsx';

/**
 *
 * Header Component
 *
 * @param {object} props
 *
 * @returns {void}
 */
export const Header = props => (
    <div>
      {!props.loggedIn && <NavBar />}
      {props.groups.id && <AuthNavBar />}
      <div id="add_users" className="modal">
        <AddUsersContainier activeGroup={props.groups.id} />
    </div>
    </div>
  );

const mapStateToProps = state => ({
  loggedIn: state.authReducer.isAuthenticated,
  groups: state.groupReducer.activeGroup
});

export default connect(mapStateToProps)(Header);
