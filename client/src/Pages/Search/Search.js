import React, {Component} from 'react';
<<<<<<< HEAD
import Jumbotron from "../../Components/Jumbotron/jumbotron";
=======
// import Jumbotron from "../../Components/jumbotron/jumbotron";
>>>>>>> origin
import Colleges from "../../Components/searchForms/colleges";
import "../Search/search.css";

class Search extends Component  {

    render(){
        return (
          <div> 
          
              <div className="Jumbotron">
         <h2>Search your College using the criteria below
              to find your dream school</h2>
              </div>
             
            
         <div className="card">              
              <Colleges/>
            </div>

          </div>
        );
    }
};
export default Search;