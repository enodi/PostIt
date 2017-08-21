import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import MessageBoard from './MessageBoard';
import SignIn from './SignIn';
import ResetPassword from './ResetPassword';
import IndexPage from './IndexPage';
import Product from './Product';
import Support from './Support';

export default class Routes extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path={'/'} component={IndexPage} />
          <Route path={'/product'} component={Product} />
          <Route path={'/support'} component={Support} />
          <Route path={'/user'} component={MessageBoard} />
          <Route path={'/signin'} component={SignIn} />
          <Route path={'/resetpassword'} component={ResetPassword} />
        </div>
      </Router>
    );
  }
}
