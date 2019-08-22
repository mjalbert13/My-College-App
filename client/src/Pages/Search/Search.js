import API from "../../utils/Api";
import Jumbotron from "../..//Components/jumbotron/jumbotron"
import React, {Component} from 'react';
// import searchColleges from "./Components/searchColleges";


class Search extends Component  {
  state =  {
    // colleges: [],
    // location: [],
    result: [],
    search: ""
  }

  componentDidMount() {
    this.searchColleges("Marquette");
    // this.searchColleges("boston%20college");
    console.log('mount');
  }

searchColleges = query => {
  API.search(query)
  .then(res =>
    {
      console.log("query:" + query);
      this.setState({ result: res.data.results })})
      .catch(err => console.log(err));
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
      console.log(this.state.result, 'IN RENDER')
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

                       <div class="form-group">
                            <label for="searchName">Name of College/University</label>
                            <input type="text" class="form-control" id="searchName" placeholder="Marquette"></input>
                        </div>

                        <div class="form-group">
                            <label for="searchState">State</label>
                            <input type="text" class="form-control" id="searchState" placeholder="Nevada"></input>
                        </div>

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

                        <button onClick={this.setState.handleFormSubmit} className="btn btn-primary mt-3">
                          Search
                        </button>

                        

                        <ul class="list-group"
                        search={this.state.search}
                        handleformSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        >
                            {/* <a href="#" class="list-group-item list-group-item-action active">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Marquette University</h5>
                                <small>Milwaukee, WI</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <small>Donec id elit non mi porta.</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Pepperdine University</h5>
                                <small class="text-muted">Malibu, CA</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <small class="text-muted">Donec id elit non mi porta.</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Grambling State University</h5>
                                <small class="text-muted">Grambling, LA</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <small class="text-muted">Donec id elit non mi porta.</small>
                            </a> */}
                            {/* <h3>name={this.state.result.map((obj, i)=> 
                              (i < 1) ?  obj['school.name'] : null
                            )}
                            </h3> */}
                            <h3>Results:</h3>
                            {this.state.result.map((result)=>
                              <li className="list-group-item" key={result.id}>
                               <h5>Name: {result['school.name']}</h5>
                               <h5>State: {result['school.state']}</h5>
                               <h5>Student body size: {result['latest.student.size']}</h5>
                               <h5>Cost (private): {result['latest.cost.avg_net_price.private']}</h5>
                               <h5>Cost (public): {result['latest.cost.avg_net_price.public']}</h5>
                              </li> 
                            )}
                        </ul>

                    </form>
                </div>
            </div>
        )
    }
}
export default Search
