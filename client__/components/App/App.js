import React from 'react';
import 'whatwg-fetch';
import TimeForm from './Timeform';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: null,
      msg: 'now'
    }
  }

  fetchCurrentTime() {

  }

  getApiUri() {
    const {tz, msg} = this.state;
    const host = 'https://fullstacktime.herokuapp.com';
    return `${host}/${tz}/${msg}.json`;
  }

  handleFormSubmit(evt) {

  }

  handleChange(newState) {

  }

  render() {
    const {currentTime, tz} = this.state;
    const apiUrl = this.getApiUri();

    return(
      <div>
        {!currentTime &&
          <button onClick={this.fetchCurrentTime.bind(this)}>
            Get the current time
          </button>}
        {currentTime && <div>The current time is: {currentTime}</div>}
        <TimeForm
          onFormSubmit={this.handleFormSubmit.bind(this)}
          onFormChange={this.handleChange.bind(this)}
          tz={tz}
          msg={'now'} />
        <p>We'll be making a request from: <code>{apiUrl}</code></p>
      </div>
    );
  }
}
