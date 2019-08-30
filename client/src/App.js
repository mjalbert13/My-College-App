import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FaqPage from './Pages/FAQ/Faq';
import Search from "./Pages/Search/Search";
import Register from './Components/searchForms/register';
import Home from "./Pages/Home/Home";
import Saved from "./Pages/Saved/Saved";
import Login from "./Components/Login/Login"
import PageNav from './Components/pageNav';


class App extends Component {
  constructor(){
    super()
    this.state={
      loggedIn: false
    }
  }
  
  render (){
    return (
    <div>
      <PageNav />
      <Router>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/search' component={Search}/>
              <Route exact path='/saved' component={Saved}/>
              <Route exact path='/faq' component={FaqPage}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path="/login" component={Login}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;