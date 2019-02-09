import React, { Component } from 'react';

function convertSecondsToTimeString(seconds) {
  if(seconds === 0) {
    return "00h 00m 00s";
  }

  let minutes = Math.floor(seconds / 60);
  seconds %= 60;

  let hours = Math.floor(minutes / 60);
  minutes %= 60;

  let s = "";

  if(hours !== 0) {
    if(hours < 10) {
      s += `0${hours}h `;
    }else{
      s += `${hours}h `;
    }
  }else{
    s+= "00h ";
  }

  if(minutes !== 0) {
    if(minutes < 10) {
      s += `0${minutes}m `;
    }else{
      s += `${minutes}m `;
    }
  }else{
    s+= `00m `
  }

  if(seconds !== 0) {
    if(seconds < 10) {
      s += `0${seconds}s`
    }else{
      s += `${seconds}s`;
    }
  }else {
    s += `00s`;
  }

  return s;
}

export default class StopWatch extends Component {
  state = {
    currentTime: 0,
    timerId: null,
    timerRunning: false,
  }

  startTimer = () => {
    let timerId = setInterval(this.tick, 1000);
    this.setState({timerId, timerRunning: true,});
  }

  stopTimer = () => {
    clearInterval(this.state.timerId);
    this.setState({timerId: null, timerRunning: false});
  }

  resetTimer = () => {
    this.stopTimer();
    this.setState({currentTime: 0});
  }
  tick = () => {
    let {currentTime} = this.state;
    this.setState({currentTime: currentTime + 1});
  }


  render() {
    //press start  - get the current time
    //tick every second 
    // (Date.now() - startTime) / 1000 = number of seconds
    let {startingValue} = this.props;
    let currentTime = convertSecondsToTimeString(this.state.currentTime);

    return (
      <div className="task-timer">
        <h3>{currentTime}</h3>
        <div className="timer-controls">
          {!this.state.timerRunning ?
          <div className="timer-control-container">
            <button className="start-pause-button" onClick={this.startTimer}>Start</button> 
            <button className="start-pause-button" onClick={this.resetTimer}>Reset</button> 
          </div> :
          <div className="timer-control-container">
            <button className="start-pause-button" onClick={this.stopTimer}>Stop</button>
          </div>
          }
          {
            this.state.timerRunning ? 
            <h5>Press stop when you are done.</h5> :
            <button className="log-button" onClick={this.stopTimer}>Log This</button>
          }
        </div>
      </div>
    );
  }
}