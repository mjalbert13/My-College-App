import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Search from '../../Pages/Search/Search'
import Saved from '../../Pages/Saved/Saved'

function Navbar(){

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <a className="navbar-brand" href="#">My College App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/">
                    <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/search">
                    <a className="nav-link" href="#">Search</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/saved"> 
                    <a className="nav-link" href="#">Saved</a>
                    </Link>
                  </li>
              </ul>
          </div>
        </nav>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path = "/saved" component={Saved}/> 
      </Router>
    </div>
  );
}

export default Navbar;