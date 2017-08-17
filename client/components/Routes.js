import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import MessageBoard from './App/MessageBoard';
import PostMessage from './App/PostMessage';
import CreateGroup from './App/CreateGroup';
import SignIn from './App/SignIn';
import ResetPassword from './App/ResetPassword';

export default class Routes extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path={'/'} component={MessageBoard} />
          <Route path={'/postmessage'} component={PostMessage} />
          <Route path={'/creategroup'} component={CreateGroup} />
          <Route path={'/signin'} component={SignIn} />
          <Route path={'/resetpassword'} component={ResetPassword} />
        </div>
      </Router>
    );
  }
}
