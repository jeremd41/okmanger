import React, {Component} from 'react';
import {Link} from "react-router-dom"



class DevPreview extends Component {
    render() {
        return (
            <div>
                <h4>DevPreview Page</h4>
                <ul>
                    <li><Link to="/cardrestau">Preview fiche restaurant</Link></li>
                    <li><Link to="/Admin">Preview panneaux administrateur </Link></li>
                    <li><Link to="/Utilisateur">Preview panneaux utilisateur </Link></li>
                </ul>
            </div>
        );
    }
}

export default DevPreview;