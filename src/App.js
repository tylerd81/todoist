import React, { Component } from "react";
import TaskList from "./TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/tasks")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return null;
        }
      })
      .then(jsonData => {
        if (jsonData != null) {
          this.setState({ taskList: jsonData });
        }
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Task List</h1>
        <TaskList taskList={this.state.taskList} />
      </div>
    );
  }
}

export default App;
