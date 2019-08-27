// import API from "../../utils/Api";
import React, {Component} from 'react';
import Jumbotron from "../..//Components/jumbotron/jumbotron";
import Colleges from "../../Components/searchForms/colleges";
// import searchColleges from "./Components/searchColleges";
import axios from 'axios'
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
  axios.search(query)
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
            <Colleges/>
          </div>

        </div>
        )
    }
}
export default Search
