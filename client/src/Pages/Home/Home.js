import React, { Component } from "react";
// import API from "../utils/API";
import "./home.css";
// import column from "../../images/column.png";

class Home extends Component {
    // state = {

    //   };
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron">
                            {/* <img src={column}></img> */}
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
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="Enter username"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col" id="newUsers">
                        <h3>New users:</h3>
                        <button type="submit" className="btn btn-success">Register</button>
                    </div>
                </div>
            </div>
        );
      }
    }
    
export default Home;