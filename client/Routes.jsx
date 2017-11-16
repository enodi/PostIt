import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Dashboard from './src/components/Dashboard/Dashboard';
import AuthenticationPage from './src/components/AuthenticationPage';
import IndexPage from './src/components/IndexPage';
import ResetPasswordContainer from './src/components/ResetPassword/ResetPasswordContainer';
import ForgotPasswordContainer from './src/components/ResetPassword/ForgotPasswordContainer';
import App from './App';

/**
 * @param {any} nextState
 * @param {any} replace
 * @returns {Object} object
 */
function requireAuth(nextState, replace) {
  if (!window.localStorage.jwt) {
    replace({
      pathname: '/account',
      state: {
        nextPath: nextState.location.pathname
      }
    });
  }
}

export default(
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage}/>
    <Route path="/account" component={AuthenticationPage}/>
    <Route path="/forgotPassword" component={ForgotPasswordContainer} />
    <Route path="/resetPassword" component={ResetPasswordContainer} />
    <Route path="/dashboard" component={Dashboard} onEnter={requireAuth}/>
  </Route>
);
