import React from "react";
import searchColleges from "./searchColleges";

class Search extends Component  {
  state =  {
    colleges: [],
    location: [],
  }
}

searchColleges = (name, cost, state, size,) => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
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
    this.searchMovies(this.state.search );
    this.
  };

render(){
  return(
    <Jumbotron>
      <h1 className="Text-center">
      <strong>Find your college:</strong>
      </h1>
      <h2 className="text-center">Search your College using the criteria below
      to find your dream school</h2>
    </Jumbotron>
  )
}
