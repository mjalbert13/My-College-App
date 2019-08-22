import React, { Component } from "react";
import axios from 'axios'


class Form extends Component {
  constructor() {
    super()
  // Setting the component's initial state
      this.state = {
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        email: ""
      };
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
      this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    console.log(name)
    // Updating the input's state
    this.setState({
      [name]: value

    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    
    axios.post('/users/', {
      firstName: this.state.firstName,
      lastName:this.state.lastName,
      email: this.state.email,
      password:this.state.password
    })
    .then(response => {
      if(!response.data.errmsg){
        console.log("something")
        this.setState({
          redirectTo: '/login'
        })
      } else{
        console.log('User allready exists')
      }
    })
    .catch(error => {
      console.log(error)
    })
    

    this.setState({
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword:"",
      email: "",
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container">
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            className="form-control"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            className="form-control"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            className="form-control"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <input
            className="form-control"
            value={this.state.confirmPassword}
            name= "confirmPassword"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <input
          className="form-control"
          value={this.state.email}
          name="email"
          onChange={this.handleInputChange}
          type="email"
          placeholder="name@domain.com"
        />
        <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

