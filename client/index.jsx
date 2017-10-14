import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import 'materialize-css/dist/js/materialize';
import './src/assets/scripts';

import rootReducer from './src/reducers/rootReducer';
import './src/assets/main.scss';
import Routes from './Routes';
import { signinSuccess } from './src/actions/auth/signinAction';

import setAuthorizationToken from './src/utils/setAuthorizationToken';

// Defines the store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwt) {
  const token = localStorage.getItem('jwt');
  setAuthorizationToken(localStorage.jwt);
  store.dispatch(signinSuccess(jwtDecode(token)));
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{Routes}</Router>
  </Provider>, document.getElementById('root'));

