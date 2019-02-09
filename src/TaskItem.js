import React, { Component } from "react";

function convertSecondsToTimeString(seconds) {
  let totalMinutes = Math.floor(seconds / 60);
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;

  let s = "";
  if(hours != 0) {
    s += `${hours} ${hours == 1 ? 'Hour' : 'Hours'} `;
  }

  if(minutes != 0) {
    s += `${minutes} ${minutes == 1 ? 'Minutes' : 'Minutes'}`;
  }
  return s;

}

export default class TaskItem extends Component {
  state = {
    folded: true
  };

  toggleItem = () => {
    this.setState({folded: !this.state.folded});
  }
  render() {
    let { title, completed, timeSpent } = this.props.task;
    return (
      <li class="task-item">
        <h2 class="task-item-header" onClick={this.toggleItem}>{title}</h2>

        {!this.state.folded ? (
          <div class="task-item-container">
            <h3>{completed ? "Done" : "Not yet finished"}</h3>
            <h3>{convertSecondsToTimeString(timeSpent)}</h3>
            <button>Work on this task</button>
          </div>
        ) : (
          <div />
        )}
      </li>
    );
  }
}
