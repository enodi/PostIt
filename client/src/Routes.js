import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import MessageBoard from './components/MessageBoard';
import SignIn from './components/SignInPage';
import ResetPassword from './components/ResetPassword';
import IndexPage from './components/IndexPage';
import Product from './components/Product';
import Support from './components/Support';
import App from './App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
    <Route path="/product" component={Product} />
    <Route path="/signin" component={SignIn} />
    <Route path="/support" component={Support} />
    <Route path="/resetpassword" component={ResetPassword} />

    <Route path="/users" component={MessageBoard}>
      <Route path="/users/:id" component={MessageBoard} />
    </Route>
  </Route>
);
// export default class Routes extends Component {
//   render() {
//     return(
//       <Router>
//         <div>
//           <Route exact path={'/'} component={IndexPage} />
//           <Route path={'/product'} component={Product} />
//           <Route path={'/support'} component={Support} />
//           <Route path={'/user'} component={MessageBoard} />
//           <Route path={'/signin'} component={SignIn} />
//           <Route path={'/resetpassword'} component={ResetPassword} />
//         </div>
//       </Router>
//     );
//   }
// }
