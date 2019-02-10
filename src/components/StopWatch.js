import React, { Component } from 'react';

import {convertSecondsToTimeObject} from "../util/convert";
import TimeDisplay from "./TimeDisplay";

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

  buildStopwatchDisplay = ({hours, minutes, seconds}) => {
    return (
      <div className="timer-display">
        <h3>{hours}:{minutes}:{seconds}</h3>
      </div>
    );
  }

  render() {
    //press start  - get the current time
    //tick every second 
    // (Date.now() - startTime) / 1000 = number of seconds
    let {startingValue} = this.props;
    let {currentTime} = this.state;

    return (
      <div className="task-timer">
        {/* <h3>{currentTime}</h3> */}
        {/* <TimeDisplay currentTime={currentTime} editable={true} /> */}
        {this.buildStopwatchDisplay(convertSecondsToTimeObject(currentTime))}
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