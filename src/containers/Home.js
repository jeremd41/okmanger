import React, {Component} from 'react';
import {Link} from "react-router-dom"

class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/cardrestau">Preview fiche restaurant</Link></li>
                    <li><Link to="/Admin">Preview panneaux administrateur </Link></li>
                </ul>
                <div className="Login">
                    <h1>Home Page</h1>
                </div>
            </div>
        );
    }
}

export default Home;