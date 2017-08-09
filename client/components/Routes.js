import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import MessageBoard from './Group/MessageBoard';

export default class Routes extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path={'/'} component={MessageBoard}/>
        </div>
      </Router>
    );
  }
}
