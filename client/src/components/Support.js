import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export default class Support extends Component {
  render() {
    return(
      <div>
        <Header />
          <div className="parallax-container valign-wrapper">
            <div className="container">
              <div className="row">
                <div className="col l12 s12 white-text">
                  <h1 className="left-align valign">How can we help?</h1>
                </div>
              </div>
              <div className="row">
                <div className="col l12 s12">
                  <form>
                   <div className="input-field">
                     <input id="search" type="search" placeholder="Type keywords to find answers" required />
                     <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                     <i className="material-icons">close</i>
                   </div>
                 </form>
                </div>
              </div>
            </div>
             <div className="parallax"><img src={require("../assets/images/help.jpg")} alt=""/></div>
           </div>

           <div className="container faq">
             <div className="row">
               <div className="col l12 s12 black-text">
                 <h5 className="left-align valign">Frequently Asked Questions</h5>
               </div>
               <div className="col l4 s6">
                 <ul>
                   <li><Link to="#">What is PostIt</Link></li>
                   <li><Link to="#">Working in PostIt</Link></li>
                   <li><Link to="#">Delete a group</Link></li>
                   <li><Link to="#">Edit your profile</Link></li>
                 </ul>
               </div>
               <div className="col l4 s6">
                 <ul>
                   <li><Link to="#">New users</Link></li>
                   <li><Link to="#">Returning users</Link></li>
                   <li><Link to="#">Conversation threads</Link></li>
                   <li><Link to="#">Create new group</Link></li>
                 </ul>
               </div>
               <div className="col l4 s6">
                 <ul>
                   <li><Link to="#">Organize and name groups</Link></li>
                   <li><Link to="#">Invite new members to group</Link></li>
                   <li><Link to="#">Post Messages</Link></li>
                   <li><Link to="#">Reset password</Link></li>
                 </ul>
               </div>
             </div>
           </div><br/>
        <Footer />
      </div>
    );
  }
}
