import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept()
}
