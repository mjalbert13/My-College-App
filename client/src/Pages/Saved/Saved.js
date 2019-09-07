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
                  {/* <!-- Button trigger modal --> */}
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Create Note
                  </button>

                </div>
              </a>
            </li>
            )}
          </div>
        </div>
      </div>
                  {/* <!-- Modal --> */}
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Custom Note</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          ...
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>

  </div>
      )
    }
  };

export default Saved;