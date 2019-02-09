import React, { Component } from "react";
import TaskItem from "./TaskItem";

export default class TaskList extends Component {
  render() {
    const { taskList } = this.props;

    const taskItems = taskList.map(task => <TaskItem task={task} />);
    return <ul class="task-list">{taskItems}</ul>;
  }
}
