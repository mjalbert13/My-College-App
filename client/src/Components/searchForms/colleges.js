import React from "react";
import API from "../../utils/Api";
import APIZip from "../../utils/ApiByZip";

class Colleges extends React.Component {

    state = {
        college: "",
        searchedZip: "",
        result: []
    }

    searchColleges = query => {
        API.search(query)
        .then(res =>
          {
            console.log("query:" + query);
            this.setState({ result: res.data.results })})
            .catch(err => console.log(err));
        };

    searchByZip = query => {
        APIZip.search(query)
        .then(res =>
          {
            console.log("query:" + query);
            this.setState({ result: res.data.results })})
            .catch(err => console.log(err));
        };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchColleges(this.state.college);
        this.searchByZip(this.state.searchedZip);
      };

      handleCollegeSave = id => {
        const collegeName = this.state.colleges.find(college => college.id === id);

        API.saveCollege({
          school: collegeName.school,
          location: collegeName.location,
          cost: collegeName.cost,
        }).then(()=> this.getColleges());
    };  
    
    
  render () {
    return (
    <div>
        <form>
          <div className="form-group">
            <label htmlFor="search">Search by Name:</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.college}
              name="college"
              type="text"
              className="form-control"
              placeholder="Search for a College"
              id="college"
            />
            <br></br>
            <label htmlFor="zip">Search by Zip (20 mile range):</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.searchedZip}
              name="searchedZip"
              type="text"
              className="form-control"
              placeholder="Search for a College by Zip Code"
              id="searchedZip"
            />
            <br></br>
            <div class="form-group">
                <label for="searchTuition">Average cost of Tuition</label>
                <select className="form-control" id="searchOptions">
                    <option>0 - 10,000</option>
                    <option>10,000 - 15,000</option>
                    <option>15,000 - 30,000</option>
                    <option>30,000 - 40,000</option>
                    <option>40,000+</option>
                </select>
            </div>
            {/* <label htmlFor="cost">Search by Tuition Cost:</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.searchedZip}
              name="searchedZip"
              type="text"
              className="form-control"
              placeholder="Search for a College by Zip Code"
              id="searchedZip"
            /> */}
            <button 
            onClick={this.handleFormSubmit}
             className="btn btn-primary mt-3">
              Search
            </button>
          </div>
        </form>

        <ul class="list-group">
        <h3>Results:</h3>
       {this.state.result.map((result)=>
        <li className="list-group-item" key={result.id}>
        <a href="#" class="list-group-item list-group-item-action active">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Name: {result['school.name']}</h5>
            <small>State: {result['school.state']}</small>
            <small>Student body size: {result['latest.student.size']}</small>
            <small>Cost (private): {result['latest.cost.avg_net_price.private']}</small>
            <small>Cost (public): {result['latest.cost.avg_net_price.public']}</small>
            <button
                onClick={() => this.handleSchoolSave(result.id)}
                className="btn btn-primary ml-2">
                Save
             </button>
            </div>
        </a>
        </li> 
        )}
        </ul>
    </div>
    )
  }
}

export default Colleges;
