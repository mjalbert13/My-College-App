import React, { Component } from "react";
import "./App.css";

// import FaqPage from './Pages/FAQ/Faq'
// import Register from "./Components/searchForms/register"
import SearchPage from "./Pages/Search/Search";
import Home from "./Pages/Home/Home";
import PageNav from './Components/pageNav'

class App extends Component {
  render (){
    return (

     <div className="App">
        <PageNav />
        <Home />


        {/* <SearchPage /> */}
        {/* <Register /> */}
      </div>

    );
  }
}
export default App;