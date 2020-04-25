import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

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
              Task Dashboard
            </h3>
          </div>
          <div class="panel-body">
            <Link to="/task_add"><button id="add_task" class="my-2 btn btn-primary mx-1">Add Task</button></Link>
            <Link to="/task"><button id="view_tasks" class="my-2 mx-1 btn btn-info">View Tasks</button></Link>
            <Link to="/create"><button id="create_user" class="my-2 mx-1 btn btn-info">Create User</button></Link>
            <Link to="/user"><button id="view_users" class="my-2 mx-1 btn btn-info">View Users</button></Link>
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

export default App;