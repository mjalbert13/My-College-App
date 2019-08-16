import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FaqPage from './Pages/FAQ/Faq'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FaqPage />
      </div>
    );
  }
}

export default App;
