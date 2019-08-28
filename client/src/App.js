import React, { Component } from "react";
import "./App.css";

// import FaqPage from './Pages/FAQ/Faq'
// import Register from "./Components/searchForms/register"
import SearchPage from "./pages/Search/Search";
// import Home from "./pages/Home/Home.js";

class App extends Component {
  render (){
    return (

     <div className="App">
        {/* <Home /> */}


        <SearchPage />
        {/* <Register /> */}
      </div>

    );
  }
}
export default App;