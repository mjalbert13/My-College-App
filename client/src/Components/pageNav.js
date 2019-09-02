import React, {Component} from "react";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import axios from 'axios'
class pageNav extends Component {

  constructor(){
    super()
    this.state={
      loggedIn:false
    }
  }

  handleLogout = event => {
    event.preventDefault();

    axios.get('/users/logout')
    .then(response => {
      if(!response.data.errmsg){
        console.log("Logging out");
        this.setState({loggedIn: false})
      } else {
        console.log("no user to log out")
      }
    })
  }
render() {
  return (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">My College App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
         
        </li>
        <li className="nav-item">
          
          <a className="nav-link" href="/search">Search</a>
          
        </li>
        <li className="nav-item">
         
          <a className="nav-link" href="/saved">Saved</a>
         
        </li>
        <li className="nav-item">
          
          <a className="nav-link" href="/faq">FAQ</a>
          
        </li>
      </ul>
      <span class="navbar-text">
        <a className="nav-link" href="/register">Sign up  </a>
      </span>
      <span>
        {this.state.loggedIn ? (
          <a className="nav-link" onClick={this.handleLogout} href="/logout">Logout</a>
        ):(
          <a className="nav-link" href="/login">Login</a>
        )}
      </span>
      </div>
    </nav>

     
    </Router>
   
 );

}
}
export default pageNav;
