import React, { Component } from "react";
import FinishedIcon from "./FinishedIcon";
import StopWatch from "./StopWatch";
import Timer from "./Timer";
import CountdownTimer from "./CountdownTimer";

function convertSecondsToTimeString(seconds) { 
  if(seconds === 0) {
    return "no time at all (what's the matter?!) ";
  }
  let totalMinutes = Math.floor(seconds / 60);
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;

  let s = "";
  if(hours !== 0) {
    s += `${hours} ${hours === 1 ? 'Hour' : 'Hours'} `;
  }

  if(minutes !== 0) {
    s += `${minutes} ${minutes === 1 ? 'Minutes' : 'Minutes'}`;
  }
  return s;
}

export default class TaskItem extends Component {
  state = {
    folded: true,
    stopWatchDisplayed: false,
    timerDisplayed: true,
  };

  toggleItem = () => {
    this.setState({folded: !this.state.folded});
  }

  updateTime = (seconds) => {
    console.log(`Task worked on for ${seconds} seconds.`);
  }

  showStopWatch = () => {
    this.setState({stopWatchDisplayed: true, timerDisplayed: false});
  }

  showTimer = () => {
    this.setState({stopWatchDisplayed: false, timerDisplayed: true});
  }

  render() {
    let { title, completed, timeSpent } = this.props.task;
    console.log(`${title} ${completed} ${timeSpent}`);

    return (
      <li key={title} className="task-item">
        <h2 className="task-item-header" onClick={this.toggleItem}>{title}</h2>

        {!this.state.folded ? (
          <div className="task-item-container">
            
            <div className="task-item-details">
              <FinishedIcon finished={completed} />
              <p>You have spent {convertSecondsToTimeString(timeSpent)} on this task.</p>              
              <div>
                <button type="button" className="switch-timer-button" onClick={this.showStopWatch}>Stop Watch</button>
                <button type="button" className="switch-timer-button" onClick={this.showTimer}>Timer</button>

              </div>
            </div>

            <div className="timer-container">
              { this.state.stopWatchDisplayed ? 
                <StopWatch stopwatchDone={this.updateTime} /> :
                <CountdownTimer hours={1} minutes={20} seconds={0} />
              } 

            </div>
          </div>
        ) : (
          <div />
        )}
      </li>
    );
  }
}
