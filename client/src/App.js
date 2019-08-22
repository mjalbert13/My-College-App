import React, { Component } from "react";
import "./App.css";
import FaqPage from './Pages/FAQ/Faq'
import Register from "./Components/searchForms/register"

// import FaqPage from './Pages/FAQ/Faq'
// import Navbar from "./components/Navbar";
// import SearchPage from "./pages/Search/Search";
import Home from "./pages/Home/Home.js";
// import Register from './Components/searchForms/register'


class App extends Component {
  render (){
    return (

      
     <div className="App">
        <Register />


      <div className="Home">
        <Home />
        {/* <Navbar /> */}
        {/* <SearchPage /> */}

      </div>
    );
  }
}
export default App;