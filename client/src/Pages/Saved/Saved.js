import React, {Component} from "react";
import Axios from "axios";
import "./Saved.css";


class Saved extends Component {
   
    constructor(){
    super()
    this.state = {
      schools: [],
      message: "Check out your saved schools and add notes"
    };
    this.getCollege = this.getCollege.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    this.getCollege()
  }

  getCollege(){
    Axios.get('/save/').then(response => {
      if(response.data){
        console.log(response.data)
        this.setState({
          schools:response.data
        })
      }else{
        console.log('no colleges saved')
      }
    })
  }
  render(){
      return (
      <div>
        
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <h1>Checkout your saved Schools.</h1>
              <h2>Add notes about your schools to keep track of your journey</h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
           <div className="col-sm results">
            {this.state.schools.map((result)=>
            <li className="list-group-item" key={result.id}>
              <a href="#" className="list-group-item list-group-item-action active">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Name: {result.collegeName}</h5>
                  <small className="d-inline-flex p-2">State: {result.location}</small>
                  <small className="d-inline-flex p-2">Cost (private): {result.costPrivate}</small>
                  <small className="d-inline-flex p-2">Cost (public): {result.costPublic}</small>
                  <button
                      onClick={() => this.handleCollegeSave(result.id)}
                      className="btn btn-primary ml-2">
                      Create Note
                  </button>
                </div>
              </a>
            </li>
            )}
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