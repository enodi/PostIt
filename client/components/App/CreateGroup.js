import React from 'react';
import AuthHeader from './AuthHeader';
import SideBar from './SideBar';
import '../../assets/main.scss';
import '../../assets/scripts.js';

export default class CreateGroup extends React.Component {
  render() {
    return(
      <div>
        <AuthHeader />
        <SideBar />
          <div className="container group-container">
      			<div className="row">
      				<div className="col s12 m8 offset-m2 l9 offset-l3">
      					<h2>Create a Group</h2>
      					<p>Start a conversation with your friends by creating a group</p>
      					<div className="row">
      						<form>
      							<div className="input-field col s12">
      								<input className="validate" type="text" name="name" id="name" required placeholder="e.g Andela"/>
      								<label htmlFor="name">Group Name</label>
      							</div>
      							<div className="input-field col s12">
      						    <select multiple>
      						      <option value="" disabled value></option>
      						      <option value="1">Xerxes</option>
      						      <option value="2">Feivel</option>
      						      <option value="3">Adiel</option>
      						    </select>
      								<label>Send Invites (optional)</label>
      						  </div>
      							<div className="col l7 offset-l5 button">
      								<button className="btn-large" type="button">Cancel</button>
      								<button className="btn-large" type="submit" name="action">Create Group</button>
      							</div>
      						</form>
      					</div>
      				</div>
      			</div>
      		</div>
      </div>
    );
  }
}
