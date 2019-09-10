import React, {Component} from "react";
import Axios from "axios";
import "./Saved.css";
import API from "../../utils/Api";

class Saved extends Component {
   
  constructor(){
  super()
  this.state = {
    schools: [],
    note: "",
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

handleCollegeSave = id => {
  console.log(this.state.result);
  console.log("starting to save!");
  const collegeName = this.state.result.find(college => college.id === id);
  console.log(collegeName);
  console.log(collegeName.id);

  API.saveCollege({
    id: collegeName.id,
    school: collegeName['school.name'],
    location: collegeName['school.state'],
    costPrivate: collegeName['latest.cost.avg_net_price.private'],
    costPublic: collegeName['latest.cost.avg_net_price.public'],
    note: collegeName.note
  }).then(API.getColleges());
};  

handleFormSubmit = event => {
  event.preventDefault();
  this.handleNoteSave(this.state.note);
};
handleNoteSave = (collegeResultNote) => {
  const saveNote =this.state.notes
  API.saveNote({
   id: collegeResultNote.id,
   notes: saveNote,
   date: collegeResultNote.date
  }).then(API.handleCollegeSave(), console.log("note: " + collegeResultNote.note));
};

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // handleNoteSave = id => {
  //   console.log("starting to save note");
  //   const collegeResultNote = this.state.schools.find(college => college.id === id);
  //   console.log(collegeResultNote);
  //   console.log(collegeResultNote.id);

  //   API.saveNote({
  //     id: collegeResultNote.id,
  //     school: collegeResultNote['school.name'],
  //     location: collegeResultNote['school.state'],
  //     costPrivate: collegeResultNote['latest.cost.avg_net_price.private'],
  //     costPublic: collegeResultNote['latest.cost.avg_net_price.public'],
  //     note: collegeResultNote.note
  //   }).then(API.getColleges(), console.log("note: " + collegeResultNote.note));
  // };  
  
  render(){
      return (
      <div>
        
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <h1 className="d-flex justify-content-center">Check out your saved schools.</h1>
              <h2 className="d-flex justify-content-center">Add notes about your schools to keep track of your journey</h2>
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
                  <small className="d-inline-flex p-2">Note: {result.note}</small>
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
                          <form>
                            <div class="form-group">
                              <div class="form-group">
                                <label for="message-text" class="col-form-label">Add a note for things like scholarship info!</label>
                                <input
                                  onChange={this.handleInputChange}
                                  value={this.state.note}
                                  name="note"
                                  type="text"
                                  className="form-control"
                                  placeholder="Create a Note"
                                  id="note"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary saveNote" onClick={() => this.handleFormSubmit}>Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>

  </div>
      )
    }
  };

export default Saved;