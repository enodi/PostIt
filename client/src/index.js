import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './Routes';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
||||||| merged common ancestors
import Routes from './components/Routes';
import registerServiceWorker from './registerServiceWorker';
=======
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import './assets/main.css';
>>>>>>> redux-branch

<<<<<<< HEAD
// const store = createStore();
||||||| merged common ancestors
const store = createStore();
=======
// Defines the store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
>>>>>>> redux-branch

<<<<<<< HEAD
ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
||||||| merged common ancestors
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
=======
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{Routes}</Router>
  </Provider>, document.getElementById('root'));
>>>>>>> redux-branch

if (module.hot) {
  module.hot.accept()
}
