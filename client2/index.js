import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
// import Index from './components/App/Index';

// The first parameter in the render function tells react
// What you want to render while the second tells react
// Where it should render it
ReactDOM.render(<Routes />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}
