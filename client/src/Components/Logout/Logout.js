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

        Axios.get('/users/logout')
        .then(response => {
            if(!response.data.errmsg) {
                console.log("User logged out success!")
            } else {
                console.log("No user to log out")
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