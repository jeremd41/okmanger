import React, {Component} from 'react';

import '../scss/containers/Register.scss';
import {Form, Button} from "react-bootstrap";

import {Link} from "react-router-dom";

class Register extends Component {
    state={
        nom:"",
        prenom:"",
        email:"",
        password: "",
        confirmPassword:""
    }

    handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    };

    handleLogin = (event) => {
        event.preventDefault();

        console.log(event);
    };

    render() {
        return (
            <div className="Register">
                <Form className="login-form">
                    <h1>Inscription</h1>
                    <Form.Group controlId="userLastName">
                        <Form.Control name="nom" type="text" placeholder="Nom" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="userFirstName">
                        <Form.Control name="prenom" type="text" placeholder="Prénom" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="userEmail">
                        <Form.Control name="email" type="email" placeholder="Email" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="userPassword">
                        <Form.Control name="password" type="password" placeholder="Mot de passe" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="userConfirmPassword">
                        <Form.Control name="confirmPassword" type="password" placeholder="Confirmation mot de passe" onChange={this.handleChange}/>
                    </Form.Group>

                    <Button
                        onClick={this.handleLogin}
                        variant="primary"
                        type="submit">Valider</Button>

                    <Form.Text>
                        <Link to="/accueil">Retour</Link>
                    </Form.Text>
                </Form></div>
        );
    }
}

export default Register;