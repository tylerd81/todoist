import React, { Component } from "react";

export default class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: ""
    };
  }  

  taskInputChange = (event) => {
    this.setState({taskTitle : event.target.value});
  }

  addButtonPressed = () => {
    let {addTask} = this.props;
    
    if(this.state.taskTitle.length !== 0) {
      let title = this.state.taskTitle;
      addTask({title, timeSpent: 0, completed: false});
      this.setState({taskTitle: ""});
    }
  }

  render() {
    return (
      <form>
        <div id="new-task-container">
          <button
            name="taskTitle"
            type="button"
            className="add-task-button"
            variant="contained"
            color="primary"
            onClick={this.addButtonPressed}
          >
             Add A Task <i className="fas fa-plus"></i>
          </button>
          <input
            value={this.state.taskTitle}
            onChange={this.taskInputChange}
            type="text"
            className="task-title-input"
          />
        </div>
      </form>
    );
  }
}
