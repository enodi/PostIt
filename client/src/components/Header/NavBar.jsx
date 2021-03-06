import React from 'react';
import { Link, IndexLink } from 'react-router';

/**
 * NavBar Presentational Component
 *
 * @param {object} props
 *
 * @returns {jsx} an xml/html like syntax extension for
 * javascript
 */
const NavBar = () => (
  <nav>
    <div className="nav-wrapper #212121 grey darken-4">
      <IndexLink to="/" className="brand-logo">
        <span
          className="logo grey-text text-lighten-2"
        >PostIt
        </span>
      </IndexLink>
      <a href="#"
        data-activates="mobile-menu"
        className="button-collapse">
        <i className="material-icons">menu</i>
      </a>
      <ul className="right hide-on-med-and-down">
        <li><a href="http://postit-enodi.herokuapp.com/apidocs/#introduction">
          API Docs</a></li>
        <li><Link to="/account">My Account</Link></li>
      </ul>
      <ul className="side-nav #000000 black hide-on-large-only"
        id="mobile-menu">
        <li><a className="white-text" href=
          "http://postit-enodi.herokuapp.com/apidocs/#introduction">
          API Docs</a></li>
        <li><Link to="/account" className="white-text">My Account</Link></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
