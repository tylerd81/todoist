import React, {Component} from 'react';
import {convertSecondsToTimeObject} from "../util/convert";

export default class TimeDisplay extends Component {

  render() {
    const {currentTime} = this.props;
    const timeObj = convertSecondsToTimeObject(currentTime);

    const timeString = `${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`;
    return (
      <div className="timer-display">
        <h3>{timeString}</h3>
      </div>
    );
  }
}