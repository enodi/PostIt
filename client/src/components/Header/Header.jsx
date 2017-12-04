import React from 'react';
import { connect } from 'react-redux';

import NavBar from './NavBar.jsx';
import AddUsersContainer from '../Dashboard/Users/AddUsersContainer.jsx';
import AuthNavBar from './AuthNavBar.jsx';
// import MobileNavBar from './MobileNavBar.jsx';

/**
 * This component manipulates the two navbar components.
 * It disappears the authenticated navbar component
 * when a user is loggedin and displays the unauthenticated
 * navbar component when the user isn't loggedin
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
      <AddUsersContainer activeGroup={props.groups.id} />
    </div>
  </div>
);

const mapStateToProps = state => ({
  loggedIn: state.authReducer.isAuthenticated,
  groups: state.groupReducer.activeGroup
});

export default connect(mapStateToProps)(Header);
