import React, { Component } from 'react';

export class MessageSection extends Component {
  render() {
    return(
      <div className="container group-container">
				<div className="row">
					<div className="col s12 m8 offset-m2 l9 offset-l3">
						<h2>Post a Message</h2>
						<p>Post a message to everyone in your group</p>
						<div className="row">
							<form>
								<div className="input-field col s12">
									<input className="validate" type="text" name="name" id="name" required placeholder="e.g Hi"/>
									<label htmlFor="name">Message</label>
								</div>
								<div className="input-field col s12">
							    <select multiple>
							      <option value="" disabled value></option>
							      <option value="1">Andela</option>
							      <option value="2">Andela-BootCamp</option>
							      <option value="3">General</option>
							    </select>
									<label>Group Name(s)</label>
							  </div>
								<div className="col l7 offset-l5 button">
									<button className="btn-large" type="button">Cancel</button>
									<button className="btn-large" type="submit" name="action">Post Message</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
    );
  }
}
