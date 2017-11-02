import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MessageBoard from './src/components/MessageBoard.jsx';
import AuthenticationPage from './src/components/AuthenticationPage.jsx';
import ResetPassword from './src/components/ResetPassword.jsx';
import IndexPage from './src/components/IndexPage.jsx';
import Product from './src/components/Product.jsx';
import Support from './src/components/Support.jsx';
import App from './App.jsx';


/**
 * @param {any} nextState
 * @param {any} replace
 * @returns {Object} object
 */
function requireAuth(nextState, replace) {
  // If token is not provided on login, redirect user to login page
  if (!window.localStorage.jwt) {
    replace({
      pathname: '/account',
      state: { nextPath: nextState.location.pathname }
    });
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
    <Route path="/product" component={Product} />
    <Route path="/account" component={AuthenticationPage} />
    <Route path="/support" component={Support} />
    <Route path="/resetpassword" component={ResetPassword} />
    <Route path="/dashboard" component={MessageBoard} onEnter={requireAuth} />
  </Route>
);

