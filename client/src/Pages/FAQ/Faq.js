import React, {Component} from 'react';
import pageNav from "../../Components/pageNav";
import { BrowserRouter, Link } from "react-router-dom";


class FaqPage extends Component {

    render(){
        return (
            <div>
            <pageNav />
            <pageNav />
            </div>
             <div className = "container">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Need Help?</h1>
                         <p className="lead">Here are some of the most asked question</p>
                    </div>
                </div>
                </div>
                <div className="container">
                    <h3>What college should I go to? </h3>
                    <p>I don't know thats why you are here!</p>
               </div>
        )
    }
};

export default FaqPage;