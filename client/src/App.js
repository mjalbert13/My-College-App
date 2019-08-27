import React, { Component } from "react";
import "./App.css";
// import FaqPage from './Pages/FAQ/Faq'
// import Register from "./Components/searchForms/register"
// import Navbar from "./components/Navbar";
import SearchPage from "./Pages/Search/Search";
// import Home from "./pages/Home/Home.js";

class App extends Component {
  render (){
    return (

     <div className="App">
        {/* <Home /> */}
        {/* <Navbar /> */}
        <SearchPage />
        {/* <Register /> */}
      </div>

    );
  }
}
export default App;