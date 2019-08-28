import React from "react";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Saved from '../Pages/Saved/Saved';
import Search from '../Pages/Search/Search';
import FaqPage from '../Pages/FAQ/Faq';

function pageNav() {
  return (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">My College App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/search">
          <a className="nav-link" href="#">Search</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/saved">
          <a className="nav-link" href="#">Saved</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/faq">
          <a className="nav-link" href="#">FAQ</a>
          </Link>
        </li>
      </ul>
        
      </div>
    </nav>

    <Route exact path="/" component={Home}/>
    <Route exact path="/search" component ={Search}/>
    <Route exact path="/saved" component={Saved}/>
    <Route exact path="/faq" component={FaqPage}/>

    </Router>
   
 );

}

export default pageNav;
