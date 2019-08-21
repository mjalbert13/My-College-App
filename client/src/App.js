import React, { Component } from "react";
import Home from "./pages/Home/Home";
import logo from "./logo.svg";
import "./App.css";
import FaqPage from './Pages/FAQ/Faq'
import Register from "./Components/searchForms/register"


class App extends Component {
  render (){
    return (

      
      <div className="App">
        <Register />

      </div>
    )

  }
}
export default App;