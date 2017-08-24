import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import * as userActions from './actions/signUpAction';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(userActions.signUp());

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept()
}
