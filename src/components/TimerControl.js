import React, { Component } from 'react';
import PropTypes from 'react';

export default class TimerControl extends Component {
  render() {

  }
}

TimerControl.propTypes = {
  onStart: PropTypes.func,
  onStop: PropTypes.func,
  onPause: PropTypes.func,
  onReset: PropTypes.func,
};