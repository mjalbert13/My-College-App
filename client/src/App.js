import React, { Component } from "react";
import Home from "./pages/Home/Home";
import logo from "./logo.svg";
import "./App.css";
import FaqPage from './Pages/FAQ/Faq'
import Navbar from "./components/Navbar";
import SearchPage from "./Pages/Search/Search";

 

class App extends Component {
  render (){
    return (

      
      <div className="App">
        <Home />
        <Navbar />
        <SearchPage />
      </div>
    )

  }

}
export default App;