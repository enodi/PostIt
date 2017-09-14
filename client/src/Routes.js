import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import MessageBoard from './components/MessageBoard';
import SignIn from './components/LogInPage';
import ResetPassword from './components/ResetPassword';
import IndexPage from './components/IndexPage';
import Product from './components/Product';
import Support from './components/Support';
import App from './App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
    <Route path="/product" component={Product} />
    <Route path="/signin" component={SignIn} />
    <Route path="/support" component={Support} />
    <Route path="/resetpassword" component={ResetPassword} />
    <Route path="/dashboard" component={MessageBoard} onEnter={requireAuth} />
  </Route>
);

function requireAuth (nextState, replace) {
  // If token is not provided on login, redirect user to login page
  if (!localStorage.jwt) {
    replace ({
      pathname: '/signin',
      state: { nextPath: nextState.location.pathname }
    })
  }
}
