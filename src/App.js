import React, { Component } from "react";
import TaskInput from "./components/TaskInput";

import TaskList from "./components/TaskList";

class App extends Component {
  state = {
    taskList: [{title: "Get this thing working!", completed: false, timeSpent: 1200}],
  };

  addTask= (task) => {
    let tl = [...this.state.taskList, task];
    this.setState({taskList: tl});
  }

  render() {

    const {taskList} = this.state;    

    return (
      <div id="main-container">
        <h1>Task Manager</h1>
        <TaskInput addTask={this.addTask} />

        <TaskList taskList={taskList} />
        
      </div>
    )
  }
}


export default App;
