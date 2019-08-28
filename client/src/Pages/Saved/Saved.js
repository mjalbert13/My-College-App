import React from "react";
import pageNav from "../../Components/pageNav";
import { BrowserRouter Link } from "react-router-dom";

class Saved extends Component {
   
    state = {
      schools = [],
      message: "Check out your saved schools and add notes"
    };


  render(){
      return (
        <pageNav />
          <div className="Jumbotron">
          <h1>Checkout your saved Schools.</h1>
          <h2>Add notes about your schools to keep track of your journey</h2>
        </div>
        <div className="container">
        <div className="row">
        <div className="col-sm">
        {this.state.result.map(result =>(
          key={name.id}
          location={college.location}
          cost={college.cost}
      ))}
          Notes:
          </div>
        </div>
        </div>

      )
  }
  }