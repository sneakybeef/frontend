import React, { Component } from "react";
import { Link ,useHistory} from "react-router-dom";
import data from "../../data/data.json";
import Axios from "axios";


class Tasks extends Component {
  state = {
    tasks: data.tasks
  };
  
  async componentDidMount ()
  {
    const {data:tasks} = await Axios.get("http://188.68.54.115:4000/tasks");
    this.setState({tasks});
    console.log(tasks);
  }

  handleChecked = task => {
    let tasks = this.state.tasks;
    const index = this.state.tasks.indexOf(task);
    tasks[index] = this.state.tasks[index];
    tasks[index].done = !this.state.tasks[index].done;
    this.setState({ tasks });
  };
  
  routeChange=()=> {
    
    const history = useHistory();
    history.push("tasks");
  }

  render() {
    return (
      <div>
        <Link to="/tasks/new" className="btn btn-primary">
          New Task
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Done</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map(task => (
              <tr key={task.ID}>
                <td>
                  <button onClick={() => this.handleChecked(task)}>
                    {this.renderCheckbox(task.done)}
                  </button>
                </td>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>
                  <button  onClick={this.routeChange} className="btn btn-primary">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  renderCheckbox = done => {
    if (done) {
      return (
        <svg
          className="bi bi-check-box"
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M17.354 4.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L10 11.293l6.646-6.647a.5.5 0 01.708 0z"
            clipRule="evenodd"
          ></path>
          <path
            fillRule="evenodd"
            d="M3.5 15A1.5 1.5 0 005 16.5h10a1.5 1.5 0 001.5-1.5v-5a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h8a.5.5 0 000-1H5A1.5 1.5 0 003.5 5v10z"
            clipRule="evenodd"
          ></path>
        </svg>
      );
    }
    return (
      <svg
        className="bi bi-circle"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  };
}

export default Tasks;
