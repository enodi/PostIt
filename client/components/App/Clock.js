import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    const currentTime = new Date();
    this.state = {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
    };
    this.setTimer(); // start up the timeout
  }

  setTimer() {
    setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    const currentTime = new Date();
    this.setState({
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
    }, this.setTimer);
  }

  render() {
    const {hours, minutes, seconds, ampm} = this.state;
    return(
      <div className="clock" style={{backgroundColor: 'white'}}>
        {
          hours == 0 ? 12:
            (hours > 12) ?
              hours - 12 : hours
        }:{
          minutes > 9 ? minutes : `0${minutes}`
        }:{
          seconds > 9 ? seconds : `0${seconds}`
        } {ampm}
      </div>
    );
  }
}
