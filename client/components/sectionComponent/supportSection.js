import React, { Component } from 'react';

export class SupportSection extends Component {
  render() {
    return(
    <div>
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
         <div className="parallax"><img src={require("../../assets/images/help.jpg")}/></div>
       </div>

       <div className="container faq">
         <div className="row">
           <div className="col l12 s12 black-text">
             <h5 className="left-align valign">Frequently Asked Questions</h5>
           </div>
           <div className="col l4 s6">
             <ul>
               <li><a href="#">What is PostIt</a></li>
               <li><a href="#">Working in PostIt</a></li>
               <li><a href="#">Delete a group</a></li>
               <li><a href="#">Edit your profile</a></li>
             </ul>
           </div>
           <div className="col l4 s6">
             <ul>
               <li><a href="#">New users</a></li>
               <li><a href="#">Returning users</a></li>
               <li><a href="#">Conversation threads</a></li>
               <li><a href="#">Create new group</a></li>
             </ul>
           </div>
           <div className="col l4 s6">
             <ul>
               <li><a href="#">Organize and name groups</a></li>
               <li><a href="#">Invite new members to group</a></li>
               <li><a href="#">Post Messages</a></li>
               <li><a href="#">Reset password</a></li>
             </ul>
           </div>
         </div>
       </div>
      </div>
    );
  }
}
