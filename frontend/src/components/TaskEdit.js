import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TaskEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: {}
    };
  }

  componentDidMount() {
    axios.get('/tasks/'+this.props.match.params.id)
      .then(res => {
        this.setState({ tasks: res.data });
        console.log(this.state.tasks);
      });
  }

  onChange = (e) => {
    const state = this.state.tasks
    state[e.target.name] = e.target.value;
    this.setState({tasks:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, status } = this.state.tasks;

    axios.put('/tasks/'+this.props.match.params.id, { name, status })
      .then((result) => {
        this.props.history.push("/task_show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <br></br>
            <h3 class="panel-title">
                Edit Task
            </h3>
          </div>
          <div class="panel-body">
            <Link to="/task"><button class="my-2 mx-1 btn btn-info">View Tasks</button></Link>
            <Link to="/"><button class="my-2 btn btn-info">Return to Dashboard</button></Link>

            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" name="name" value={this.state.tasks.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="status">Status</label>
                <input type="text" class="form-control" name="status" value={this.state.tasks.status} onChange={this.onChange} placeholder="Status" />
              </div>
              <button type="submit" class="my-2 btn btn-success">Update Task</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskEdit;