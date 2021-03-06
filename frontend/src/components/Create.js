import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      phone: '',
      email: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, address, city, state, phone, email } = this.state;

    axios.post('/user', { name, address, city, state, phone, email })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, address, city, state, phone, email } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <br></br>
            <h3 class="panel-title">
              Create User
            </h3>
          </div>
          <div class="panel-body">
            <Link to="/"><button id="dashboard" class="my-2 mx-2 btn btn-info">Return to Dashboard</button></Link>

            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="city">City</label>
                <input type="text" class="form-control" name="city" value={city} onChange={this.onChange} placeholder="City" />
              </div>
              <div class="form-group">
                <label for="state">State</label>
                <input type="text" class="form-control" name="state" value={state} onChange={this.onChange} placeholder="State" />
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" name="phone" value={phone} onChange={this.onChange} placeholder="Phone Number" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email Address" />
              </div>
              <button id="create_user" type="submit" class="btn btn-primary btn-default">Create User</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;