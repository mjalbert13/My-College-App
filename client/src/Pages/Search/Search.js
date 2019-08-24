import React, {Component} from 'react';
import Jumbotron from "../../Components/Jumbotron/jumbotron";
// import searchColleges from "./Components/searchColleges";
// import API from "../../utils/Api";


class Search extends Component  {
  state =  {
    school:"",
    colleges: [],
    location: [],
  };

  

  // searchColleges = (name, cost, state, size,) => {
  //   API.search(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchColleges(this.state.search );
  };

  render(){
    return (
      <div>              
        <Jumbotron>
          <h1 className="Text-center">
            <strong>Find your college:</strong>
          </h1>
          <h2 className="text-center">Search your College using the criteria below
          to find your dream school</h2>
        </Jumbotron>

        <div className="container">              
          <form>
            <div className="form-group">
                <label for="searchName">Name of College/University</label>
                <input type="text" className="form-control" id="searchName" placeholder="Marquette" value={this.state.} ></input>
            </div>

            <div className="form-group">
                <label for="searchState">State</label>
                <input type="text" className="form-control" id="searchState" placeholder="Nevada"></input>
            </div>

            <div className="form-group">
                <label for="searchTuition">Average cost of Tuition</label>
                <select className="form-control" id="searchOptions">
                    <option>0 - 10,000</option>
                    <option>10,000 - 15,000</option>
                    <option>15,000 - 30,000</option>
                    <option>30,000 - 40,000</option>
                    <option>40,000+</option>
                </select>
            </div>

            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Marquette University</h5>
                    <small>Milwaukee, WI</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Pepperdine University</h5>
                    <small className="text-muted">Malibu, CA</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small className="text-muted">Donec id elit non mi porta.</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Grambling State University</h5>
                    <small className="text-muted">Grambling, LA</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small className="text-muted">Donec id elit non mi porta.</small>
                </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Search;