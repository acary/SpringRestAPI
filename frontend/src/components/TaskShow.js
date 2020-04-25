import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TaskShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: {}
    };
  }

  componentDidMount() {
    axios.get('/tasks/'+this.props.match.params.id)
      .then(res => {
        this.setState({ task: res.data });
        console.log(this.state.task);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/tasks/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.state = {
          task: { status: "Completed"}
        };

    axios.put('/tasks/'+this.props.match.params.id, this.state.task)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <br></br>
            <h3 class="panel-title">
              Task Details
            </h3>
          </div>
          <div class="panel-body">
            <Link to="/task"><button id="view_tasks" class="my-2 mx-1 btn btn-info">View Tasks</button></Link>
            <Link to="/"><button id="dashboard" class="my-2 btn btn-info">Return to Dashboard</button></Link>
            <dl>
              <dt>Name</dt>
              <dd>{this.state.task.name}</dd>
              <dt>Status</dt>
              <dd>{this.state.task.status}</dd>
            </dl>

            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <input type="hidden" class="form-control" name="status" value="Completed" />
              </div>
              <button type="submit" id="complete" class="my-2 btn btn-primary">Mark Complete</button>
            </form>

            <Link to={`/task_edit/${this.state.task.id}`} id="edit_task" class="btn btn-secondary">Edit Task</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.task.id)} id="delete_task" class="btn btn-danger">Delete Task</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskShow;