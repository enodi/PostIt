import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import components
import MessageBoard from './components/MessageBoard';
import SignIn from './components/SignInPage';
import ResetPassword from './components/ResetPassword';
// import Header from './components/Header';
import IndexPage from './components/IndexPage';
import Product from './components/Product';
import Support from './components/Support';
import App from './App';
// import { AuthHeader } from './components/AuthHeader';
// import SideBar from './components/SideBar';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
    <Route path="/product" component={Product} />
    <Route path="/support" component={Support} />
    <Route path="/signin" component={SignIn} />
    <Route path="/resetpassword" component={ResetPassword} />

    <Route path="/user" component={App} onEnter={requireAuth}>
      <Route path="/user/:id" component={MessageBoard} />
    </Route>
  </Route>
);

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

// export default class Routes extends Component {
//   render() {
//     return(
//       <Router>
//         <div>
//           {/* Index page */}
//           <Route exact path={'/'} component={Header} />
//           <Route exact path={'/'} component={IndexPage} />
//
//           {/* Product page */}
//           <Route path={'/product'} component={Header} />
//           <Route path={'/product'} component={Product} />
//
//           {/* Support page */}
//           <Route path={'/support'} component={Header} />
//           <Route path={'/support'} component={Support} />
//
//           {/* SignIn Ppge */}
//           <Route path={'/signin'} component={Header} />
//           <Route path={'/signin'} component={SignIn} />
//
//           {/* Reset password page */}
//           <Route path={'/resetpassword'} component={Header} />
//           <Route path={'/resetpassword'} component={ResetPassword} />
//
//           {/* MessageBoard */}
//           <Route path={'/user/:id'} component={MessageBoard}
//             onEnter={requireAuth} />
//         </div>
//       </Router>
//     );
//   }
// }
