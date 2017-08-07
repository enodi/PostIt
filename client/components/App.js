import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import { IndexPage } from './pageComponent/indexPage';
import { ProductPage } from './pageComponent/productPage';
import { SupportPage } from './pageComponent/supportPage';
import { SignInPage } from './pageComponent/signinPage';
import { MessageBoard } from './pageComponent/messageBoard';
import { GroupPage } from './pageComponent/groupPage';
import { ResetPassword } from './pageComponent/resetPassword';
import { PostMessagePage } from './pageComponent/postMessagePage';

export default class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path={'/'} component={IndexPage}/>
          <Route exact path={'/product'} component={ProductPage} />
          <Route path="/support" component={SupportPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route exact path="/messageboard" component={MessageBoard} />
          <Route path="/creategroup" component={GroupPage} />
          <Route path="/postmessage" component={PostMessagePage} />
        </div>
      </Router>
    );
  }
}
