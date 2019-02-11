import React, { Component } from "react";
import FinishedIcon from "./FinishedIcon";
import StopWatch from "./StopWatch";
import CountdownTimer from "./CountdownTimer";
import { convertSecondsToTimeObject } from "../util/convert";

export default class TaskItem extends Component {
  state = {
    folded: false,
    stopWatchDisplayed: false,
    timerDisplayed: true,
    timeSpent: 0,
    completed: false
  };

  componentDidMount() {
    this.setState({
      timeSpent: this.props.task.timeSpent,
      completed: this.props.completed
    });
  }

  toggleItem = () => {
    this.setState({ folded: !this.state.folded });
  };

  updateTime = seconds => {
    this.setState({ timeSpent: this.state.timeSpent + seconds });
  };

  showStopWatch = () => {
    this.setState({ stopWatchDisplayed: true, timerDisplayed: false });
  };

  showTimer = () => {
    this.setState({ stopWatchDisplayed: false, timerDisplayed: true });
  };

  markDoneButtonPressed = () => {
    this.setState({ completed: !this.state.completed });
  };
  render() {
    let { title } = this.props.task;
    let timeObj = convertSecondsToTimeObject(this.state.timeSpent);

    return (
      <li key={title} className="task-item">
        <h2 className="task-item-header" onClick={this.toggleItem}>
          {title}
        </h2>

        <div className="task-item-container">
          <div className="task-item-details">
            <FinishedIcon finished={this.state.completed} />
            {!this.state.completed ? (
              <button
                className="switch-timer-button"
                type="button"
                onClick={this.markDoneButtonPressed}
              >
                Mark As Complete
              </button>
            ) : (
              <button
                className="switch-timer-button"
                type="button"
                onClick={this.markDoneButtonPressed}
              >
                Mark As Unfinished
              </button>
            )}
            <p>
              You have spent {timeObj.hours} hours, {timeObj.minutes} minutes,
              and {timeObj.seconds} seconds on this task.
            </p>
            <div>
              <button
                type="button"
                className="switch-timer-button"
                onClick={this.showStopWatch}
              >
                Stop Watch
              </button>
              <button
                type="button"
                className="switch-timer-button"
                onClick={this.showTimer}
              >
                Timer
              </button>
            </div>
          </div>

          <div className="timer-container">
            {this.state.stopWatchDisplayed ? (
              <StopWatch stopwatchDone={this.updateTime} />
            ) : (
              <CountdownTimer countdownDone={this.updateTime} />
            )}
          </div>
        </div>
      </li>
    );
  }
}
