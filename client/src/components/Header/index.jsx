import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import AuthNavBar from './AuthNavBar';

/**
 *
 * Header Presentational Component
 *
 * @param {object} props
 *
 * @returns {void}
 */
const Header = (props) => {
  if (!props.loggedIn) {
    return (
      <NavBar />
    );
  }
  return (
    <AuthNavBar />
  );
};

const mapStateToProps = state => ({
  loggedIn: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps)(Header);
