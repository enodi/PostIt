import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import MessageBoard from './components/MessageBoard';
import SignIn from './components/SignIn';
import ResetPassword from './components/ResetPassword';
import { Header } from './components/Header';
import IndexPage from './components/IndexPage';
import Product from './components/Product';
import Support from './components/Support';
import { AuthHeader } from './components/AuthHeader';
import SideBar from './components/SideBar';

export default class Routes extends Component {
  render() {
    return(
      <Router>
        <div>
          {/* Index page */}
          <Route exact path={'/'} component={Header} />
          <Route exact path={'/'} component={IndexPage} />

          {/* Product page */}
          <Route path={'/product'} component={Header} />
          <Route path={'/product'} component={Product} />

          {/* Support page */}
          <Route path={'/support'} component={Header} />
          <Route path={'/support'} component={Support} />

          {/* SignIn Ppge */}
          <Route path={'/signin'} component={Header} />
          <Route path={'/signin'} component={SignIn} />

          {/* Reset password page */}
          <Route path={'/resetpassword'} component={Header} />
          <Route path={'/resetpassword'} component={ResetPassword} />

          {/* MessageBoard */}
          <Route path={'/user/user_id'} component={AuthHeader} />
          <Route path={'/user/user_id'} component={SideBar} />
          <Route path={'/user/user_id'} component={MessageBoard} />


        </div>
      </Router>
    );
  }
}
