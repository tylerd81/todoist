import React, { Component } from 'react';

export default class FinishedIcon extends Component {
  render() {
    let {finished} = this.props;

    return (
      finished ? 
      <div className="finished-icon"><i className="green-check fas fa-check"></i> Task Complete!</div>:
      <div className="finished-icon"><i className="red-check far fa-calendar"></i> Working on it...</div>);

  }
}