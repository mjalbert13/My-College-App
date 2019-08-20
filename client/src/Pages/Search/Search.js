
import React, {Component} from 'react';
import searchColleges from "./Components/searchColleges";


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
    this.searchColleges(this.state.search );
    this.
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

                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action active">
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
                            </a>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
export default SearchPage