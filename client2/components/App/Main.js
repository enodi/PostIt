import React from 'react';

export default class Main extends React.Component {
  render() {
    return(
      <div>
        <div className="row">
          <div className="col s12">
            <h1>The Main Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button
              className="btn"
              onClick={() => this.props.changeUsername('Anna')}>Change the Username</button>
            <br/><br/>
            <button
              className="btn"
              onClick={() => this.props.changeAge()}>Change Age</button>
          </div>
        </div>
      </div>
    );
  }
}
