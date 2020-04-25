import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TaskAdd extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      status: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, status } = this.state;

    axios.post('/tasks', { name, status })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, status } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <br></br>
            <h3 class="panel-title">
              Add Task
            </h3>
          </div>
          <div class="panel-body">
            <Link to="/"><button id="dashboard" class="my-2 mx-2 btn btn-info">Return to Dashboard</button></Link>

            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Name</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">Status</label>
                <input type="text" class="form-control" name="status" value={status} onChange={this.onChange} placeholder="Status" />
              </div>
              <button id="add_task" type="submit" class="btn btn-primary btn-default">Add Task</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskAdd;