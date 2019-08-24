import React, { Component } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";

// import FaqPage from './Pages/FAQ/Faq'
// import Navbar from "./components/Navbar";
// import Search from "./Pages/Search/Search";
// import Register from './Components/searchForms/register';


class App extends Component {
  render (){
    return (
      <div className="Home">
        <Home />
      </div>
    );
  }
}
export default App;