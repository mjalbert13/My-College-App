import React from "react";
import pageNav from "../../Components/pageNav";
import { BrowserRouter Link } from "react-router-dom";


  render(){
      return (
        <pageNav>
          <div className="Jumbotron">
          <h1>Checkout your saved Schools.</h1>
          <h2>Add notes about your schools to keep track of your journey</h2>
        </div>
        <div className="container">
        <div className="row">
        <div className="col-sm">
        <strong>School Name:</strong>
        </div>
        <div className="col-sm">
        <strong>State:</strong>
        </div>
        <div className="col-sm">
          Notes:
          </div>
        </div>
        </div>

      )
  }