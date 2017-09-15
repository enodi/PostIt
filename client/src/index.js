import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './Routes';
import { Provider } from 'react-redux';
import {signinSuccess} from './actions/auth/signinAction';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import './assets/main.css';

// Defines the store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwt) {
  store.dispatch(signinSuccess())
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{Routes}</Router>
  </Provider>, document.getElementById('root'));

// if (module.hot) {
//   module.hot.accept()
// }
