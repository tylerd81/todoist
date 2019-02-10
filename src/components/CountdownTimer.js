import React, { Component } from "react";
import PropTypes, { number } from "prop-types";
import TimeDisplay from "./TimeDisplay";
import { convertSecondsToTimeObject } from "../util/convert";

export default class CountdownTimer extends Component {
  //pass in hours, minutes, seconds as props
  //<CountdownTimer hours={0} minutes={15} seconds={0} />

  timerId = null;
  clickedVal = "";
  numSecondsToLog = 0;

  state = {
    currentTime: 0, // TODO: move out of the state
    hours: "00",
    minutes: "00",
    seconds: "00",
    inputDisabled: false,
    timerRunning: false,
    timerId: null,
    timerDone: false,
  };

  inputClicked = event => {
    this.clickedVal = this.state[event.target.name];
    this.setState({ [event.target.name]: "", timerDone: false });
  };

  inputLost = event => {
    let { name } = event.target;
    if (this.state[name] === "") {
      this.setState({ [name]: this.clickedVal });
    }
  };

  tick = () => {
    let { currentTime } = this.state;
    this.numSecondsToLog++;

    if (currentTime - 1 === 0) {
      this.setState({
        currentTime: 0,
        hours: "00",
        minutes: "00",
        seconds: "00",
        timerDone: true
      });
      this.stopTimer();
    } else {
      let timeObj = convertSecondsToTimeObject(this.state.currentTime - 1);
      this.setState({
        currentTime: this.state.currentTime - 1,
        hours: timeObj.hours,
        minutes: timeObj.minutes,
        seconds: timeObj.seconds
      });
    }
  };

  timerChange = event => {
    //TODO: RE to check for numbers and max length
    let val = event.target.value;
    if(val.length == 1) {
      val = "0" + val;
    }else if(val.length == 3) {
      val = val.substring(1);
    } else{
      return;
    }
    console.log(val);
    this.setState({ [event.target.name]: val });
  };

  stopButtonPressed = () => {
    this.setState({ timerRunning: false, inputDisabled: false});
    this.stopTimer();
  };

  startButtonPressed = () => {
    //convert the hours, minutes, seconds to currentTime
    let {hours, minutes, seconds} = this.state;
    let currentTime = Number.parseInt(hours) * 60 * 60;
    currentTime += Number.parseInt(minutes * 60);
    currentTime += Number.parseInt(seconds);

    //start the timer
    //disable the input
    if(currentTime > 0) {
      this.setState({ timerRunning: true, inputDisabled: true, currentTime });
      this.startTimer();
    }
  };

  startTimer = () => {
    this.timerId = setInterval(this.tick, 1000);    
  }

  stopTimer = () => {
    if(this.state.timerRunning) {
      clearInterval(this.timerId);
      this.timerId = null;
      this.setState({timerRunning: false, inputDisabled: false});
    }
  }

  buildCountdownDisplay = () => {
    let disabled = this.state.inputDisabled;

    return (
      <div className="timer-display">
        <input
          disabled={disabled}
          name="hours"
          className="timer-input"
          type="text"
          value={this.state.hours}
          onInput={this.timerChange}
          onFocus={this.inputClicked}
          onBlur={this.inputLost}
          
        />
        :
        <input
          disabled={disabled}
          name="minutes"
          className="timer-input"
          type="text"
          value={this.state.minutes}
          onChange={this.timerChange}
          onFocus={this.inputClicked}
          onBlur={this.inputLost}
        />
        :
        <input
          disabled={disabled}
          name="seconds"
          className="timer-input"
          type="text"
          value={this.state.seconds}
          onChange={this.timerChange}
          onFocus={this.inputClicked}
          onBlur={this.inputLost}
        />
      </div>
    );
  };

  logButtonPressed = () => {
    let {countdownDone} = this.props;
    countdownDone(this.numSecondsToLog);
  }
  render() {   

    return (
      <div className="task-timer">
        {this.state.timerDone ? <h1>Timer Done!</h1> : ""}
        {this.buildCountdownDisplay()}
        <div className="timer-controls">
          {this.state.timerRunning ? (
            <div className="timer-control-container">
              <button
                type="button"
                className="start-pause-button"
                onClick={this.stopButtonPressed}
              >
                Stop
              </button>
              <h5>Press stop when you are done.</h5>
            </div>
          ) : (
            <div className="timer-control-container">
              <button
                type="button"
                className="start-pause-button"
                onClick={this.startButtonPressed}
              >
                Start
              </button>
              <button className="log-button" onClick={this.logButtonPressed}>
                Log This
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

CountdownTimer.PropTypes = {
  hours: number,
  seconds: number,
  minutes: number
};
