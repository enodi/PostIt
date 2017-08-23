import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import MessageBoard from './components/MessageBoard';
import SignIn from './components/SignIn';
import ResetPassword from './components/ResetPassword';
import IndexPage from './components/IndexPage';
import Product from './components/Product';
import Support from './components/Support';

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
