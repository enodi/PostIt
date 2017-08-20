import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import MessageBoard from './components/MessageBoard';
import SignIn from './components/SignIn';
import ResetPassword from './components/ResetPassword';

export default class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path={'/'} component={MessageBoard} />
          <Route path={'/signin'} component={SignIn} />
          <Route path={'/resetpassword'} component={ResetPassword} />
        </div>
      </Router>
    );
  }
}

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
