import React, { Component } from "react";
// import API from "../utils/API";
import "./home.css";
import axios from 'axios'

import "../../Components/searchForms/register";


import registerForm from "../../Components/searchForms/register";

class Home extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            name: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange= this.handleInputChange.bind(this);
    }
    
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
        console.log("Name: "+name)
        console.log("Value: "+value)
        console.log("Password State: "+this.state.password)
        console.log("Email State"+this.state.email)
    }

    handleFormSubmit = event => {
        event.preventDefault();
        
        console.log(this.state.email)
        console.log(this.state.password)

        axios.post('/users/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(response => {
            if(!response.data.errmsg){
                
                console.log("Logged in!")
                
            } else {
                console.log("wrong emeail or password")
            }
        })
        .catch(error => {
            console.log(error)
        })

        this.setState({
            email: "",
            password: ""
        })
    }
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
                            <label htmlFor="email">Email</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="email" 
                            aria-describedby="username" 
                            placeholder="Enter Email"
                            name="email"
                            onChange ={this.handleInputChange}></input>
                            </div>
                            <div className="form-group"> 
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password"
                            name="password"
                            onChange={this.handleInputChange}></input>
                            </div> 
                        <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={this.handleFormSubmit}
                        >Submit</button>
                        </form>
                    </div>
                </div>
                <br></br>
                <registerForm />
            </div>
        );
      }
    }
    
export default Home;