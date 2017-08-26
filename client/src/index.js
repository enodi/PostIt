import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

// Defines the store
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk) // Dispatches async actions
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}
