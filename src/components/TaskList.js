import React, { Component } from "react";
import TaskItem from "./TaskItem";

export default class TaskList extends Component {
  render() {
    const  {taskList}  = this.props;
    const taskItems = taskList.map(task => <TaskItem task={task} />);
    
    if(taskList.length === 0) {
      return <h2>Add a task.</h2>
    }else{
      return (
        <ul className="task-list">
          {taskItems}
        </ul>
      );
    }
  }
}
