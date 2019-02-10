import React, {Component} from 'react';
import {convertSecondsToTimeObject} from "../util/convert";

export default class TimeDisplay extends Component {

  render() {
    const {currentTime} = this.props;
    const {hours, minutes, seconds} = convertSecondsToTimeObject(currentTime);
    let disabled = !this.props.editable;

    return (
      <div className="timer-display">
        <input disabled={disabled} className="timer-input" type="text" value={hours} />:
        <input disabled={disabled} className="timer-input" type="text" value={minutes} />:
        <input disabled={disabled} className="timer-input" type="text" value={seconds} />
      </div>
    );
  }
}