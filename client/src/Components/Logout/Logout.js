import React, { Component } from 'react';
import Axios from 'axios';

class Logout extends Component {

    constructor() {
        super()
        this.state ={
            loggedIn: true
        }
    }

    handleLogout = event => {
        event.preventDefault();

        Axios.post('/users/logout')
        .then(response => {
            if(this.state.loggedIn === true) {
                console.log("User logged out success!")
                this.setState({loggedIn: false})
            } else {
                return console.log("No user to log out")
            }
        })
    }

    render() {
        return(
            <button className="btn btn-danger" onClick={this.handleLogout}>
                Logout
            </button>
        )
    }
}

export default Logout;