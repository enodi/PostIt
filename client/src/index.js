import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept()
}
