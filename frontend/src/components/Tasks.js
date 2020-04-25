import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Tasks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    axios.get('/tasks')
      .then(res => {
        this.setState({ tasks: res.data });
        console.log(this.state.tasks);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <br></br>
            <h3 class="panel-title">
              All Tasks
            </h3>
          </div>
          <div class="panel-body">
            <Link to="/task_add"><button id="add_task" class="my-2 btn btn-primary mx-2">Add Task</button></Link>
            <Link to="/"><button id="dashboard" class="my-2 btn btn-info">Return to Dashboard</button></Link>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tasks.map(t =>
                  <tr>
                    <td><Link to={`/task_show/${t.id}`}>{t.name}</Link></td>
                    <td>{t.status}</td>
                  </tr>
                )}
              </tbody>
            </table>
            <div class="ml-2"><small>End of list</small></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;