import React from "react";
import API from "../../utils/Api";
import APIZip from "../../utils/ApiByZip";
import APICostPublic from "../../utils/ApiByCostPublic";
import APICostPrivate from "../../utils/ApiByCostPrivate";

class Colleges extends React.Component {

    state = {
        college: "",
        searchedZip: "",
        costBegin: "",
        costEnd: "",
        publicChecked: false,
        privateChecked: false,
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

    searchByCostPublic = (query1, query2) => {
      if (this.state.publicChecked){
        console.log("begin:" + this.state.costBegin);
        console.log("end:" + this.state.costEnd);
        APICostPublic.search(this.state.costBegin, this.state.costEnd)
        .then(res =>
          {
            console.log("query1:" + query1 + " query2" + query2);
            this.setState({ result: res.data.results })})
            .catch(err => console.log(err));
      }
        };

    searchByCostPrivate = (query1, query2) => {
      if (this.state.privateChecked){
        console.log("begin:" + this.state.costBegin);
        console.log("end:" + this.state.costEnd);
        APICostPrivate.search(this.state.costBegin, this.state.costEnd)
        .then(res =>
          {
            console.log("query1:" + query1 + " query2" + query2);
            this.setState({ result: res.data.results })})
            .catch(err => console.log(err));
      }
        };

    handlePublicCheckBox = event => {
          this.setState({publicChecked:true, privateChecked:false})
          console.log(this.state.publicChecked);
    };

    handlePrivateCheckBox = event => {
          this.setState({privateChecked:true, publicChecked:false})
          console.log(this.state.privateChecked);
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
        if (this.state.publicChecked){
          this.searchByCostPublic(this.state.costBegin, this.state.costEnd);
        } else if (this.state.privateChecked){
          this.searchByCostPrivate(this.state.costBegin, this.state.costEnd);
        } else {
          alert("Try Again!");
        }
        if (this.state.searchedZip != ""){
          this.searchByZip(this.state.searchedZip);
        }
        if (this.state.college != ""){
          this.searchColleges(this.state.college);
        }
        
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
            {/* <div class="form-group">
                <label for="searchTuition">Average cost of Tuition</label>
                <select className="form-control" id="searchOptions">
                    <option>0 - 10,000</option>
                    <option>10,000 - 15,000</option>
                    <option>15,000 - 30,000</option>
                    <option>30,000 - 40,000</option>
                    <option>40,000+</option>
                </select>
            </div> */}
            <label htmlFor="cost">Search by Tuition Cost:</label>
            <br></br>
            <label>
                Public Institution 
                <input
                    name="public"
                    type="checkbox"
                    checked={this.state.publicChecked}
                    onChange={this.handlePublicCheckBox} />
            </label>
            <br></br>
            <label>
                Private Institution 
                <input
                    name="private"
                    type="checkbox"
                    checked={this.state.privateChecked}
                    onChange={this.handlePrivateCheckBox} />
            </label>
            <input
              onChange={this.handleInputChange}
              value={this.state.costBegin}
              name="costBegin"
              type="text"
              className="form-control"
              placeholder="Tutition Cost Range - Beginning"
              id="costBegin"
            />
            <input
              onChange={this.handleInputChange}
              value={this.state.costEnd}
              name="costEnd"
              type="text"
              className="form-control"
              placeholder="Tutition Cost Range - Ending"
              id="costEnd"
            />
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
        <p class="list-group-item list-group-item-action active">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Name: {result['school.name']}</h5>
            <small href={result['school.school_url']} target='blank'>State: {result['school.state']}</small>
            <small>Student body size: {result['latest.student.size']}</small>
            <small>Cost (private): {result['latest.cost.avg_net_price.private']}</small>
            <small>Cost (public): {result['latest.cost.avg_net_price.public']}</small>
            <small><a href={'http://' + result['school.school_url']} target='blank' class="text-white">{result['school.school_url']}</a></small>
            </div>
        </p>
        </li>
        )}
        </ul>
    </div>
    )
  }
}

export default Colleges;
