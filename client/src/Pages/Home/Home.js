import React, { Component } from "react";
// import API from "../utils/API";

class Home extends Component {
    // state = {

    //   };
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div class="jumbotron">
                            <h1 className="d-flex justify-content-center">My College App!</h1>
                            <p className="lead">A full stack MERN application that lets users search for colleges and save their favorites as well as add notes</p>
                            <hr className="my-4"></hr>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form>
                        <h3>Returning users:</h3>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="username" aria-describedby="username" placeholder="Enter username"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col">
                        <h3>New users:</h3>
                        <button type="submit" class="btn btn-success">Register</button>
                    </div>
                </div>
            </div>
        );
      }
    }
    
    export default Home;