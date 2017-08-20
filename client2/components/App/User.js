import React from 'react';

export default class User extends React.Component {
  render() {
    return(
      <div>
        <div className="row">
          <div className="col s12">
            <h1>The User Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <p>User Name: {this.props.username}</p>
            <p>Age: {this.props.age}</p>
          </div>
        </div>
      </div>
    );
  }
}
