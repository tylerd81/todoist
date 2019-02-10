import React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';
import TimeDisplay from "./TimeDisplay";

export default class CountdownTimer extends Component {
  //pass in hours, minutes, seconds as props
  //<CountdownTimer hours={0} minutes={15} seconds={0} />

  state = {
    currentTime: 0,
  };

  componentDidMount() {
    //convert the props into seconds    
    let {minutes, seconds, hours} = this.props;
    let currentTime = (minutes * 60) + (hours * 60 * 60) + seconds;
    this.setState({currentTime});
  }

  render() {
    return (
      <TimeDisplay currentTime={this.state.currentTime} />
    );
  }
}

CountdownTimer.PropTypes = {
  hours: number,
  seconds: number,
  minutes: number,
};