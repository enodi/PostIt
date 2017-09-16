import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './src/reducers/rootReducer';
import './src/assets/main.scss';
import Routes from './Routes';
import './src/assets/scripts';
import { signinSuccess } from './src/actions/auth/signinAction';

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
//   module.hot.accept();
// }
