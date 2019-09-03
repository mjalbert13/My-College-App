import React, {Component} from 'react';
import Jumbotron from "../../Components/jumbotron/jumbotron";
import Colleges from "../../Components/searchForms/colleges";


class Search extends Component  {

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
        );
    }
};
export default Search;