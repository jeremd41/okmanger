import React, {Component} from 'react';

import '../scss/containers/Login.scss';
import {Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class Login extends Component {

    handleLogin = event => {
        event.preventDefault();

        console.log(event);
    };

    render() {
        return (
            <div className="Login">
                <Form className="login-form">
                    <h1>Connexion</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Mot de passe"/>
                    </Form.Group>

                    <Button
                        onClick={this.handleLogin}
                        variant="primary"
                        type="submit">Valider</Button>

                    <Form.Text>
                        Vous n'avez pas de compte ?
                        <Link to="/inscription"> Inscription</Link>
                    </Form.Text>

                    <Form.Text>
                        <Link to="/accueil">Retour</Link>
                    </Form.Text>
                </Form></div>
        );
    }
}

export default Login;