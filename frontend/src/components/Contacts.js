import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    axios.get('/user')
      .then(res => {
        this.setState({ contacts: res.data });
        console.log(this.state.contacts);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <br></br>
            <h3 class="panel-title">
              Users
            </h3>
          </div>
          <div class="panel-body">
            <Link to="/create"><button id="create_user" class="my-2 mx-2 btn btn-primary">Create User</button></Link>
            <Link to="/"><button id="dashboard" class="my-2 btn btn-info">Return to Dashboard</button></Link>

            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                {this.state.contacts.map(c =>
                  <tr>
                    <td><Link to={`/show/${c.id}`}>{c.name}</Link></td>
                    <td>{c.phone}</td>
                    <td>{c.email}</td>
                    <td>{c.city}</td>
                    <td>{c.state}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div class="ml-2"><small>End of list</small></div>
      </div>
    );
  }
}

export default Contacts;