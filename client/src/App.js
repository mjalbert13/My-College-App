import React, { Component } from "react";
import "./App.css";

import FaqPage from './Pages/FAQ/Faq'
import Navbar from "./components/Navbar";
import SearchPage from "./Pages/Search/Search";
import Home from "./pages/Home/Home";

class App extends Component {
  render (){
    return (
      <div className="Home">
        <Home />
        {/* <Navbar /> */}
        {/* <SearchPage /> */}

      </div>
    )

  }

}
export default App;