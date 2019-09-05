import React, {Component} from "react";


class Saved extends Component {
   
    constructor(){
    super()
    this.state = {
      schools: [],
      message: "Check out your saved schools and add notes"
    };


  }

  render(){
      return (
      <div>
        
        <div className="card">
          <h1>Checkout your saved Schools.</h1>
          <h2>Add notes about your schools to keep track of your journey</h2>
        </div>

        <div className="container">

          <div className="row">

           <div className="col-sm">

        
          Notes:
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
  </div>

  </div>
      )
    }
  };


export default Saved;
