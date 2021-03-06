import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
    axios.get('/user/'+this.props.match.params.id)
      .then(res => {
        this.setState({ contact: res.data });
        console.log(this.state.contact);
      });
  }

  onChange = (e) => {
    const state = this.state.contact
    state[e.target.name] = e.target.value;
    this.setState({contact:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, address, city, state, postalCode, phone } = this.state.contact;

    axios.put('/user/'+this.props.match.params.id, { name, address, city, state, postalCode, phone })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <br></br>
            <h3 class="panel-title">
                Edit User
            </h3>
          </div>
          <div class="panel-body">
            <Link to="/user"><button class="my-2 mx-1 btn btn-info">View Users</button></Link>
            <Link to="/"><button class="my-2 btn btn-info">Return to Dashboard</button></Link>

            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.contact.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" class="form-control" name="address" value={this.state.contact.address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="city">City:</label>
                <input type="text" class="form-control" name="city" value={this.state.contact.city} onChange={this.onChange} placeholder="City" />
              </div>
              <div class="form-group">
                <label for="state">State:</label>
                <input type="text" class="form-control" name="state" value={this.state.contact.state} onChange={this.onChange} placeholder="State" />
              </div>
              <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="text" class="form-control" name="phone" value={this.state.contact.phone} onChange={this.onChange} placeholder="Phone Number" />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" name="email" value={this.state.contact.email} onChange={this.onChange} placeholder="Email Address" />
              </div>
              <button type="submit" class="my-2 btn btn-success">Update User</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;